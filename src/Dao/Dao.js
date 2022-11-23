import axios from 'axios'



const baseUrl = "https://localhost:7021/api";


const getAllPolls = async () => {
    try
    {
        let res = await axios.get(baseUrl + "/Poll/");
        if (res.status === 200) {
            console.log(res.data)
            return res.data
          };
    }
    catch (error) 
    {
          return "error";
    };


};

const getPollById = async (id) => {
    try
    {
        let res = await axios.get(baseUrl + "/Poll/"+id);
        if (res.status === 200) {
            console.log(res.data)
            return res.data
        }
          
    }
    catch (error) 
    {
          return "error";
    };


};



const postNewPoll = async (title, voteoptions) => {

    try
    {
        let res = await axios.post(baseUrl + "/Poll", {
            title: title,
            voteOptions: voteoptions
        });
            if (res.status === 200) {
                return res.status;
            };
    }
    catch (error) 
    {
        return "error";
    };
    }


const putVote = async (id) => {
    try
    {
        console.log(id)
        let res = await axios.put(baseUrl + "/Poll/putvote/"+id);

            if (res.status === 200) {
                return res.status;
            };
    }
    catch (error) 
    {
        return "error";
    };
};


const dao = {
    getAllPolls,
    getPollById,
    putVote,
    postNewPoll
};
export default dao;
