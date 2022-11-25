import * as React from 'react';
import Radio from '@mui/material/Radio';
import '../App.css';
import 'react-circular-progressbar/dist/styles.css';
import { Grid, Button, Paper, RadioGroup, FormControlLabel, FormControl,IconButton, Alert, Snackbar } from '@mui/material';
import dao from '../Dao/Dao';
import CloseIcon from '@mui/icons-material/Close';
import Chart from './Chart';


export default function Poll(props) {

     // value of currently cheked radiobutton
    const [value, setValue] = React.useState();
      
     // handles radiobutton values
    const handleRadioChange = (event) => {
        setValue(event.target.value);

    };
 
     //on  sumbit pressed  
    const handleSubmit = async (event) => {
        event.preventDefault();
        // PUT new vote in
        const res = await dao.putVote(props.poll.id, value);
       
        // set state with the result
        if(res===200){
            console.log(res)
            setMsg("Vote success")
            setSeverity("success")
            setOpen(true)
            setValue(null);
        }else{
            setMsg(res)
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
    // snackbar ends

   
  return (
  <>
    
    {/* grid to make components align */}
    <Grid
        container
        spacing={1}
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        marginBottom={5}
    >

    {/* Paper component for backround*/}
        <Paper  elevation={16} sx={{ m: 1, width: 500, marginTop:4}}>
            {/* form element */}
            <form onSubmit={handleSubmit}>
                <FormControl sx={{}} variant="standard">
                <h4>{"Id "+props.poll.id+ ": "+ props.poll.title}</h4>
                    <RadioGroup
                        sx={{mb:4, ml:3 }}
                        aria-labelledby="demo-error-radios"
                        name="quiz"
                        value={value}
                        onChange={handleRadioChange}
                    >
                        {/* map all voteoptions to selectable radiobuttons */}
                        {props.poll.voteOptions.map((option, index)=>
                            <FormControlLabel value={option.id} control={<Radio />} label={option.title} />
                        )}

                    </RadioGroup>
                    {/* button to send answer */}
                    <Button disabled={!value} sx={{ color: "green", bgcolor:"lightGreen", mb:3}} type="submit" variant="outlined">
                        Send answer
                    </Button>
                </FormControl>
            </form>     
            {/* Chart component to display vote amounts*/}
            <Chart voteoptions={props.poll.voteOptions}></Chart>
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


