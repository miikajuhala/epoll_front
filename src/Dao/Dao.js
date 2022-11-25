import axios from 'axios'

const baseUrl = "https://localhost:7021/api";


const getAllPolls = async () => {
    try
    {
        let res = await axios.get(baseUrl + "/Poll/");
        if (res.status && res.status === 200) {
            console.log(res.data)
            return res.data
          };
    }
    catch (error) 
    {
        // if error return dummy data to display to user
        console.log(error)
        return [{id :1, title: "Sorry:"+error.message ,voteOptions:[{id:15,title:"Thats a bummer",voteAmount:36,pollId:1}]}]
       
    };


};

const getPollById = async (id) => {
    try
    {
        let res = await axios.get(baseUrl + "/Poll/"+id);
        console.log(res.data)
        return res
    }
    catch (error) 
    {
        console.log(error)
        //if error=not found return info of that
        if(error.response && error.response.status===404){
            return error.response.data;
        }
        //if error in server/database return info from err.message
        else
        return error.message;
    };


};



const postNewPoll = async (title, voteoptions) => {

    try
    {
        let res = await axios.post(baseUrl + "/Poll", {
            title: title,
            voteOptions: voteoptions
        });
            
        return res;
    }

    catch (error) 
    {
      console.log(error)
        if(!error.response){
            return error.message
        }
        //id server/network error
        if(error.response && error.response.status===500){
            return error.message
        }
        // if error related to title missing from poll entity
        if(error.response.data.errors.Title){
            return "Add title! :)";
        }
        // if error related to options missing from poll entity
        if((error.response.data.errors.VoteOptions)){
            return "you must add atleast one option :)";
        }
    };
    }


const putVote = async (pollId, id) => {
    try
    {
        console.log(pollId, id)
        let res = await axios.put(baseUrl + "/Poll/"+pollId+"/vote/"+id);

            if (res.status && res.status === 200) {
                return res.status;
            };
    }
    catch (error) 
    {
        //return error message
        return error.message;
    };
};


const dao = {
    getAllPolls,
    getPollById,
    putVote,
    postNewPoll
};
export default dao;
