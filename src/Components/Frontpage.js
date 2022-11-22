
import * as React from 'react';
import '../App.css';
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddPoll from './AddPoll';

export default function Frontpage(props) {

  //slider const for adding new 
  const [checked, setChecked] = React.useState(false);
  //handler for showing add new component
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

   //navigation instance
   let Navigate = useNavigate();

  return (
    <>
   <h1 className='App'>Polls App!</h1>
    <Stack
        marginTop="10%"
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        >
      
        <input class="paper-btn-menu" onClick={()=>Navigate("/AllPolls")} type="button" value="See all Polls"/>
        <input className="paper-btn-menu" onClick={()=>handleChange()} type="button" value="Add one your self!"/>
    </Stack>
    <AddPoll checked={checked} handleChange={handleChange}></AddPoll>
    </>
  );
}


