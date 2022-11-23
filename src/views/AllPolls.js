import { Grid} from "@mui/material";
import React, { useEffect } from "react";
import Poll from "../Components/Poll";
import dao from "../Dao/Dao";

export default function AllPolls(props) {
  // logic consts
  const [loaded, setLoaded] = React.useState(false);
  const [polls, setPolls] = React.useState([]);
  

  // declare the async data fetching function
  useEffect(() => {
    const getAllPolls = async() => {

          // get the data from the api
          const data = await dao.getAllPolls()
      
          // set state with the result
          setPolls(data);
        
          console.log(data[0].voteOptions)
          setLoaded(true);
  }

    getAllPolls()
      //catch any error
      .catch(console.error);
        
  }, [])
  
    return (
     <>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
          {/* Header */}
          <h2>All Polls</h2>

          {/* Map all polls from db*/}
          {loaded && polls.map((poll, index)=>
            <Poll title={poll.title} voteoptions={poll.voteOptions}></Poll>
          )}   

      </Grid>
   </>
    );


  }
  

 