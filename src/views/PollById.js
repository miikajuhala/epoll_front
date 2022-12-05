import * as React from 'react';
import '../App.css';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import {  Grid, Button, Input } from '@mui/material';
import dao from '../Dao/Dao';
import Poll from '../Components/Poll';



export default function PollById(props) {
  
const [Id, setId] = React.useState();
const [loaded, setLoaded] = React.useState(false);
const [poll, setPoll] = React.useState([]);


//handle change for search field
const handleChange = (event)=>{

  setId(event.target.value);

};

// fetching function for polls
const getPoll = async(id) => {

      // get the data from the api
      const res = await dao.getPollById(id)
   
      // set state with the result
      if(res.status===200){
        //set responses poll entity as poll
        setPoll(res.data);
        // set loaded true to show poll component
        setLoaded(true);
      }else{
        // show error message to user
        props.props.setMsg(res); props.props.setSeverity("error"); props.props.setOpen(true)
      }
}
    


  return (
   <>
   {/* slider element for searchfield and button */}
    <Slide direction="left" in={props.checked} mountOnEnter unmountOnExit>
         
         <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
            >

            {/* Paper surroundounding input fields */}
            <Paper   sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                marginTop:4
            }}>
                {/* search field and button for searhin by pollid */}
                <Input sx={{m:0.5}} onChange={handleChange} type={"number"} placeholder="Poll id here!"/>
                <Button sx={{color: "green", bgcolor:"lightGreen", m:0.5}} disabled={!Id} onClick={()=>getPoll(Id)}>Search</Button>
            </Paper>
          </Grid>
        
    </Slide>
    {/* slider element for searched poll */}
    <Slide direction="left">
      <>
        {loaded && props.checked && <Poll update={()=>getPoll(Id)} props={props} poll={poll[0]}></Poll>} 
      </>
    </Slide>
 </>
  );
}


