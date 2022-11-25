       

import { Collapse, Grid } from "@mui/material";
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function Chart(props) {
 
const [expand, setExpand] = React.useState(false);

// visual element for snackbar


return (
<>
    {/* Checks witch arrow should be displayed */}
    {expand ? (
    <KeyboardArrowUpIcon
        sx={{ color: "black", fontSize: 40 }}
        onClick={() => setExpand(!expand)}
    >
        {" "}
    </KeyboardArrowUpIcon>
    ) : (
    <KeyboardArrowDownIcon
        sx={{ color: "black", fontSize: 40 }}
        onClick={() => setExpand(!expand)}
    >
        {""}
    </KeyboardArrowDownIcon>
    )}

    {/* Collabsible element for charts */}
    <Collapse  in={expand} style={{width:"100%"}}>
        <Grid container rowSpacing={1}  
                justifyContent="center"
        >
                {/* map all voteoptions to charts with voteamount */}
                {props.voteoptions.map((option, index)=>
                    <Grid item xs={6} sx={{mb:2}}> 
                        <div  style={{marginBottom:12}}>{option.title}</div>
                        <div  style={{ width: 100, height: 100, marginLeft: "30%"}}>
                            {/* todo maxValue of answer to db when creating poll? */}
                            <CircularProgressbar value={option.voteAmount}  text={option.voteAmount} maxValue={100}/>
                        </div>
                    </Grid>
                )}
        </Grid>
    </Collapse>
</>

);
}







