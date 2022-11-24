       

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

    <Collapse  in={expand} style={{width:"100%"}}>
        <Grid container rowSpacing={1}  
                justifyContent="center"
                marginLeft={"15%"} 
        >
                {props.voteoptions.map((option, index)=>
                    <Grid item xs={6} sx={{mb:2}}> 
                        <div  style={{ width: 100, height: 100}}>
                            {/* todo max amount of answer to db when creating poll */}
                            <CircularProgressbar value={option.voteAmount} text={option.title} maxValue={50}/>
                        </div>
                    </Grid>
                )}
        </Grid>
    </Collapse>
</>

);
}







