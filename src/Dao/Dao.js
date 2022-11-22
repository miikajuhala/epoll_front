import axios from 'axios'



const baseUrl = "https://localhost:7021/api";


const getAllPolls = async () => {

};

const getPollById = async (id) => {

};



const postNewPoll = async (title, voteoptions) => {

    // stringify voteoptions and map them to "titles"
    const myJSON = JSON.stringify(voteoptions);
    const titles = new Map(Object.entries(JSON.parse(myJSON)))

    // loop all titles to array
    const array = [];
    titles.forEach(voteoption => {
        array.push(
            {
                "title": voteoption,
                "voteAmount": 0
            }
        )
    })

    axios.post(baseUrl + "/Poll", {
        title: title,
        voteOptions: array
    })
        .then((response) => {
            console.log("RESPONSE", response);
        });
};


const incrementVote = async (editedSubject) => {

};





const dao = {
    getAllPolls,
    getPollById,
    incrementVote,
    postNewPoll
};
export default dao;
