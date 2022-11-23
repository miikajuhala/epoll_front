import axios from 'axios'



const baseUrl = "https://localhost:7021/api";


const getAllPolls = async () => {

};

const getPollById = async (id) => {

};



const postNewPoll = async (title, voteoptions) => {

    try{
        let res = await axios.post(baseUrl + "/Poll", {
            title: title,
            voteOptions: voteoptions
        });
        if (res.status === 200) {
            return res.status;
          };
        }
        catch (error) {
          return "error";
        };
    }


const incrementVote = async (editedSubject) => {

};





const dao = {
    getAllPolls,
    getPollById,
    incrementVote,
    postNewPoll
};
export default dao;
