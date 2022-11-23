import * as React from 'react';
import '../App.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import { TextField, Grid, Button, Input } from '@mui/material';
import dao from '../Dao/Dao';



export default function PollById(props) {
    const getPoll= () =>{

        
    }

  return (
   
    <Slide  direction="left" in={props.checked} mountOnEnter unmountOnExit>
         
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
                <Input sx={{m:0.5}} placeholder="Poll id here!"/>
                <Button sx={{color: "green", bgcolor:"lightGreen", m:0.5}} onClick={()=>getPoll}>Search</Button>
            </Paper>
            </Grid>
    </Slide>
    
 
  );
}


