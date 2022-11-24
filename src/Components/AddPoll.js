import * as React from 'react';
import '../App.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import { TextField, Grid, Button } from '@mui/material';
import dao from '../Dao/Dao';




export default function AddPoll(props) {

const [title, setTitle] = React.useState("");
// eslint-disable-next-line
const [options, setOptions] = React.useState([]);
const [voteoptions, setVoteoptions] = React.useState([]);


//handles voteoptions state
const handleChange = (event)=>{

   voteoptions[event.target.name] = ({title: event.target.value, voteAmount: 0})

};

// handles title changes
const handleTitle = (event)=>{
    setTitle(event.target.value);
};

// remove question from screen locally
function handleRemove(index) {

    //remove voteoption from array
    var gg = voteoptions.splice(index, 1)
    setVoteoptions(voteoptions)
    setOptions(gg)
}

//call postNewPoll in dao class
const postPoll= async () =>{
    let res = await dao.postNewPoll(title, voteoptions)
   

    // if res ok -> display snackbar success message to user
    if(res.status===200) {
        props.props.setMsg("Your poll is created with id: "+res.data.id);
        props.props.setSeverity("success"); 
        props.props.setOpen(true); 
        setTimeout(() => props.handleChange(), 1000)
    }
    else {
        console.log(res)
        props.props.setMsg(""+res); 
        props.props.setSeverity("error");
        props.props.setOpen(true)
    }


}
            

  return (
   
    // slider for the whole element
    <Slide  direction="up" in={props.checked} mountOnEnter unmountOnExit>
         
        {/* grid to keep elements in order */}
        <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
        >

            {/* Paper surroundounding input fields */}
            <Paper   elevation={16} sx={{
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

                {/* Map voteoptions */}
                {voteoptions.map((random, index ) =>
                <Grid xs={12}>
                    <TextField name={index} onChange={handleChange} value={random.title} label={"Option: "+ (index+1)} />   
                    <Button sx={{color: ""}} onClick={()=> handleRemove(index)} >del</Button>
                </Grid>
                )}
                   
                
                {/* Save Button box */}
                <Box
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="flex-end"
                >
                    <Button sx={{color: "", bgcolor:"lightRed",m:0.5 }} onClick={()=>props.handleChange()}>Cancel</Button>
                    <Button disabled={voteoptions.length<0} sx={{color: "green", bgcolor:"lightGreen",m:0.5 }} onClick={()=>postPoll()}>Save</Button>
                </Box>

            </Paper>
        </Grid>
    </Slide>
  );
}


