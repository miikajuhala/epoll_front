import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPoll from "../Components/AddPoll";
import AllPolls from "../Components/AllPolls";
import Frontpage from "../Components/Frontpage";
import { Alert, Snackbar, IconButton, } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function Navigation() {
 
//consts for snackbar :)
const [open, setOpen] = React.useState(false)
const [msg, setMsg] =  React.useState('')



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
<h2 className='badge'>PollApp v1.0</h2>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Frontpage setMsg={setMsg} setOpen={setOpen}/>} />
        <Route path="AllPolls" element={<AllPolls setMsg={setMsg} setOpen={setOpen}/>} />
        <Route path="AddPoll" element={<AddPoll setMsg={setMsg} setOpen={setOpen}/>} />
      </Routes>
</BrowserRouter>

{/* Snackbar for announcments */}
<Snackbar
    lenght={13}
    open={open}
    anchorOrigin={{ vertical:"bottom", horizontal:"center" }}
    autoHideDuration={2000}
    onClose={()=>setOpen(false)}
    message={<Alert severity="success">{msg}</Alert>}
    action={action}
/>

</>

  );
}

export default Navigation;
