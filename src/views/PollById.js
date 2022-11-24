import * as React from 'react';
import '../App.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import { TextField, Grid, Button, Input, useThemeProps } from '@mui/material';
import dao from '../Dao/Dao';
import Poll from '../Components/Poll';



export default function PollById(props) {
  
const [Id, setId] = React.useState();
const [loaded, setLoaded] = React.useState(false);
const [poll, setPoll] = React.useState([]);


//handle cange for search field
const handleChange = (event)=>{

  setId(event.target.value);

};

// declare the async data fetching function
const getPoll = async(id) => {
  console.log(Id)
      // get the data from the api
      const res = await dao.getPollById(id)
   
      // set state with the result
      console.log(res)
      if(res.status===200){
        setPoll(res.data);
        setLoaded(true);
        console.log(poll[0].voteOptions)
      }else{
         props.props.setMsg(res); props.props.setSeverity("error"); props.props.setOpen(true)
      }
}
    


  return (
   <>
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
                <Input sx={{m:0.5}} onChange={handleChange} type={"number"} placeholder="Poll id here!"/>
                <Button sx={{color: "green", bgcolor:"lightGreen", m:0.5}} onClick={()=>getPoll(Id)}>Search</Button>
                {/* <Button sx={{color: "green", bgcolor:"lightGreen", m:0.5}} onClick={()=>console.log(poll[1].voteOptions)}>log</Button> */}
                
            </Paper>
          </Grid>
        
    </Slide>
    <Slide direction="left">
      <>
        {loaded && props.checked && <Poll props={props} title={poll[0].title} pollId={poll[0].id} voteoptions={poll[0].voteOptions}></Poll>} 
      </>
    </Slide>
 </>
  );
}


