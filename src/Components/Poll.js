import * as React from 'react';
import Radio from '@mui/material/Radio';
import '../App.css';
import { Grid, Button, Paper, RadioGroup, FormControlLabel, FormControl,IconButton, Alert, Snackbar } from '@mui/material';
import dao from '../Dao/Dao';
import CloseIcon from '@mui/icons-material/Close';


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
        const res = await dao.putVote(value)
    
        // set state with the result
        if(res===200){
            console.log(res)
            setMsg("Vote success")
            setSeverity("success")
            setOpen(true)
        }else{
            setMsg("Db error")
            setSeverity("error")
            setOpen(true)
        }
    }

    // sackbar consts
    const [open, setOpen] = React.useState(false)
    const [msg, setMsg] =  React.useState('')
    const [severity, setSeverity] =  React.useState('')
    const action = (
    <React.Fragment>
        <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={()=>setOpen(false)}
        >
        <CloseIcon fontSize="small" />
        </IconButton>
    </React.Fragment>
    )

   
  return (
   <>
    
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

      {/*snackbar element*/}
      <Snackbar
      lenght={13}
      open={open}
      anchorOrigin={{ vertical:"bottom", horizontal:"center" }}
      autoHideDuration={2000}
      onClose={()=>setOpen(false)}
      message={<Alert severity={severity}>{msg}</Alert>}
      action={action}
  />
    </>
  );
}


