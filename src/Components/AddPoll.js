import * as React from 'react';
import '../App.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import { TextField, Grid, Button } from '@mui/material';
import dao from '../Dao/Dao';



export default function AddPoll(props) {


const [title, setTitle] = React.useState("");

const [options, setOptions] = React.useState([]);
const [voteoptions, setVoteoptions] = React.useState([]);

//handles voteoptions state
const handleChange = (event)=>{

   voteoptions[event.target.name] = ({title: event.target.value, voteAmount: 0})

};

const handleTitle = (event)=>{
    setTitle(event.target.value);
};

 function handleRemove(index) {
    console.log("index", index)
    // var arr = []
  var gg = voteoptions.splice(index, 1)
    setVoteoptions(voteoptions)
    console.log( voteoptions)
    setOptions(gg)

  }

//call postNewPoll in dao class
const postPoll= async () =>{
    let res = await dao.postNewPoll(title, voteoptions)
    console.log(res)

    // if res ok -> display snackbar success message to user
    if(res===200) {props.props.setMsg("success");props.props.setSeverity("success"); props.props.setOpen(true)}
    else {props.props.setMsg("Error with database"); props.props.setSeverity("error") ;props.props.setOpen(true)}
}
            

  return (
   
    <Slide  direction="up" in={props.checked} mountOnEnter unmountOnExit>
         
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

                {/* field for title */}
                <Grid xs={12}>
                    <TextField
                        label="Title"
                        onChange={handleTitle}
                    />
                </Grid>
                {/* button to create new question */}
                <Grid xs={12}>
                    <Button sx={{color: "green", }} onClick={()=>{
                        setVoteoptions(voteoptions=>[...voteoptions,{"title": null ,"voteAmount": 0}])
                    }}>
                        add option
                    </Button>
                </Grid>

            
                {voteoptions.map((random, index ) =>
                <Grid xs={12}>
                    <TextField name={index} onChange={handleChange} value={random.title} label={"Option: "+ (index+1)} />   
                    <Button onClick={()=> handleRemove(index)} >del</Button>
                </Grid>
                )}
                   
                
                {/* Button box */}
                <Box
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="flex-end"
                >
                    {/* <Button sx={{color: "green", bgcolor:"lightGreen" }} onClick={()=>console.log(voteoptions)}>fg222f</Button> */}
                    <Button sx={{color: "green", bgcolor:"lightGreen",m:0.5 }} onClick={()=>postPoll()}>Save</Button>
                </Box>

            </Paper>
            </Grid>
    </Slide>
    
 
  );
}


