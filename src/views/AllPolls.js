import { Grid, Modal} from "@mui/material";
import React, { useEffect } from "react";
import Poll from "../Components/Poll";
import dao from "../Dao/Dao";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Fab} from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import AddPoll from "../Components/AddPoll";

export default function AllPolls(props) {

  // consts
  const [loaded, setLoaded] = React.useState(false);
  const [polls, setPolls] = React.useState([]);
  const [checked, setChecked] = React.useState(false);

  //handle checked status
  const handleChange = ()=>{
    setChecked(!checked)
  }

  
  useEffect(() => {
    // declare fetching function
    const getAllPolls = async() => {

      // get the data from the api
      const res = await dao.getAllPolls()
      setPolls(res);
      setLoaded(true);
  }
    // call fetchin function
    getAllPolls()
    
  }, [])
  
    return (
     <>
      
      {/* grid container */}
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
          {/* H2 */}
          <h2>All Polls</h2>

          {/* Map all polls from db*/}
          {loaded && polls.map((poll, index)=>
            <>
              <Poll poll={poll}></Poll>
            </>
          )}   

      </Grid>

      {/*Floating button that opes add new poll pop up when clicked  */}
      <Fab icon={<AddCircleOutlineIcon/> } onClick={()=>setChecked(!checked)} />
      
      {/* pop up modal */}
      <Modal sx={{marginTop:20}} open={checked}>
        <div>
          <h2 style={{color: "#79c7e8", textAlign:"center"}}>Add new Poll</h2>
          <AddPoll checked={checked} handleChange={handleChange} props={props}></AddPoll>
        </div>
      </Modal>
   </>
    );
  }
  

 