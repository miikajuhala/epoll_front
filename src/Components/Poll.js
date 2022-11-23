import * as React from 'react';
import Radio from '@mui/material/Radio';
import '../App.css';
import Slide from '@mui/material/Slide';
import { TextField, Grid, Button, Paper, Typography, Box, RadioGroup, FormHelperText, FormLabel, FormControlLabel, FormControl } from '@mui/material';
import dao from '../Dao/Dao';



export default function Poll(props) {

    // checked value
    const [value, setValue] = React.useState();
      
    // handles radiobutton values
    const handleRadioChange = (event) => {
        setValue(event.target.value);
       
      };

    //on  sumbit pressed  
    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log(value)
        // get the data from the api
        const data = await dao.putVote(value)
     
        // set state with the result
        
        console.log(data)
        props.props.props.setMsg("Voting success")
        props.props.props.setSeverity("success")
        props.props.props.setOpen(true)

    }
  return (
   
    
    <Grid
        container
        spacing={1}
        alignItems="center"
        justifyContent="center"
        textAlign="center"
    >

    {/* Paper component for backround*/}
        <Paper sx={{ m: 1, width: 300, marginTop:4 }}>

                    <form onSubmit={handleSubmit}>
                        <FormControl sx={{}} variant="standard">
                        <h4>{props.title}</h4>
                            <RadioGroup
                                sx={{mb:4, ml:3 }}
                                aria-labelledby="demo-error-radios"
                                name="quiz"
                                value={value}
                                onChange={handleRadioChange}
                            >
                                {/* map all voteoptions to selectable radiobuttons */}
                                {props.voteoptions.map((option, index)=>
                                    <FormControlLabel value={option.id} control={<Radio />} label={option.title} />
                                )}

                            </RadioGroup>
                            
                            <Button sx={{ color: "green", bgcolor:"lightGreen", mb:3}} type="submit" variant="outlined">
                                Send answer
                            </Button>
                        </FormControl>
                    </form>

            </Paper>
    </Grid>
    
  );
}


