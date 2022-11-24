import { Grid, Modal} from "@mui/material";
import React, { useEffect } from "react";
import Poll from "../Components/Poll";
import dao from "../Dao/Dao";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Fab} from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import AddPoll from "../Components/AddPoll";

export default function AllPolls(props) {
  // logic consts
  const [loaded, setLoaded] = React.useState(false);
  const [polls, setPolls] = React.useState([]);
  const [checked, setChecked] = React.useState(false);

  //handle checked status in compnents
  const handleChange = ()=>{
    setChecked(!checked)
  }

  // declare the async data fetching function
  useEffect(() => {
    const getAllPolls = async() => {

      // get the data from the api
      const res = await dao.getAllPolls()
      setPolls(res);
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
          <>
            <Poll title={poll.title} pollId={poll.id} voteoptions={poll.voteOptions}></Poll>
          </>
          )}   

      </Grid>
      <Fab icon={<AddCircleOutlineIcon/> } onClick={()=>setChecked(!checked)} />
      <Modal sx={{marginTop:20}} open={checked}>
        <div>
          <h2 style={{color: "#79c7e8", textAlign:"center"}}>Add new Poll</h2>
          <AddPoll checked={checked} handleChange={handleChange} props={props}></AddPoll>
        </div>
      </Modal>
   </>
    );
  }
  

 