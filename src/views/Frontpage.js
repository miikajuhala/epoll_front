
import * as React from 'react';
import '../App.css';
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddPoll from '../Components/AddPoll';
import PollById from './PollById';

export default function Frontpage(props) {

  //slider consts for displaying views
  const [checked, setChecked] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);

  //handlers for displaying views
  const handleChange = () => {
    setChecked2(false)
    setChecked((prev) => !prev);
  };
  const handleChange2 = () => {
    setChecked(false)
    setChecked2((prev) => !prev);
  };

   //navigation instance
   let Navigate = useNavigate();

  return (
  <>
   <h1 className='App'>Polls App!</h1>
   {/* Stack element to display menu options */}
    <Stack
        marginTop="10%"
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        >
        {/* menu options */}
        <input className="paper-btn-menu" onClick={()=>Navigate("/AllPolls")} type="button" value="See all Polls"/>
        <input className="paper-btn-menu" onClick={()=>handleChange()} type="button" value={ checked ? "nevermind" :"Add one yourself!"}/>
        <input className="paper-btn-menu" onClick={()=>handleChange2()} type="button" value={ checked2 ? "nevermind" :"Search one by id!"}/>

    </Stack>

    {/* components visible when buttons clicked */}
    <AddPoll checked={checked} props={props} handleChange={handleChange}></AddPoll>
    <PollById checked={checked2} props={props}></PollById>
  </>
  );
}


