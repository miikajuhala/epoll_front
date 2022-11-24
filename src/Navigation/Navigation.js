import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPoll from "../Components/AddPoll";
import AllPolls from "../views/AllPolls";
import Frontpage from "../views/Frontpage";
import { Alert, Snackbar, IconButton, } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function Navigation() {
 
//consts for snackbar :)
const [open, setOpen] = React.useState(false)
const [msg, setMsg] =  React.useState('')
const [severity, setSeverity] =  React.useState('')

// visual element for snackbar
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
    <Route path="/" element={<Frontpage setSeverity={setSeverity} setMsg={setMsg} setOpen={setOpen}/>} />
    <Route path="AllPolls" element={<AllPolls setMsg={setMsg} setSeverity={setSeverity} setOpen={setOpen}/>} />
    <Route path="AddPoll" element={<AddPoll setSeverity={setSeverity} setMsg={setMsg} setOpen={setOpen}/>} />
  </Routes>
</BrowserRouter>

{/* Snackbar for announcments */}
<Snackbar
    lenght={13}
    open={open}
    anchorOrigin={{ vertical:"bottom", horizontal:"center" }}
    autoHideDuration={4000}
    onClose={()=>setOpen(false)}
    message={<Alert severity={severity}>{msg}</Alert>}
    action={action}
/>

</>

  );
}

export default Navigation;

