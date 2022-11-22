import * as React from 'react';
import '../App.css';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Theme } from '@mui/material/styles';
import { TextField, Grid, Button } from '@mui/material';
import dao from '../Dao/Dao';



export default function AddPoll(props) {

const [title, setTitle] = React.useState("");

const [options, setOptions] = React.useState([]);
const [voteoptions, setVoteoptions] = React.useState([]);

//takes event from individual form elements and pushes it to state const
const handleChange = (event)=>{
    setVoteoptions({...voteoptions, [event.target.name]: event.target.value});
};
const handleTitle = (event)=>{
    setTitle(event.target.value);
};
//call postNewPoll in dao folder
const postPoll= () => dao.postNewPoll(title, voteoptions)
            

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
                    <Button onClick={()=>{
                        setOptions(arr=>[...arr,1 ])
                    }}
                    >add new option!</Button>
                </Grid>

            
                {options.map((random, index ) =>
                <Grid xs={12}>
                    <TextField name={index} onChange={handleChange} label={"question: "+index} />   
                </Grid>
                )}
                   
                
                {/* Button box */}
                <Box
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="flex-end"
                >
                    <Button sx={{color: "green", bgcolor:"lightGreen" }} onClick={()=>console.log("dd",voteoptions)}>fg222f</Button>
                    <Button sx={{color: "green", bgcolor:"lightGreen" }} onClick={()=>postPoll()}>fgf</Button>
                </Box>

            </Paper>
            </Grid>
    </Slide>
    
 
  );
}


