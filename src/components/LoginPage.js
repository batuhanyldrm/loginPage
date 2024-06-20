import { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { styled } from '@mui/system';
import { makeStyles } from '@mui/styles';

import icon from '../img/icon.png'
import LoginModal from './LoginModal';
import { FormHelperText } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  main: {
    height:"100%",
    width: "100%",
    display: "flex",
    backgroundColor: "#2148c0",
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    display: "flex",
    justifyContent: "center"
  },
  color: {
    color: "white !important"
  },
  errormsg: {
    color: "red !important"
  }
}));

const WhiteOutlinedInput = styled(OutlinedInput)({
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white',
  },
  color:  'white',
});

function LoginPage() {
  const classes = useStyles();

  const dbUsername = 'test@luxpmsoft.com';
  const dbPassword = 'test1234!';

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  
  const handleClose = () => {
    setOpen(false);
  };

  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).+$/;

  const handleLogin = () => {
    if (username === dbUsername && password === dbPassword) {
      window.location = window.location.origin + "/page";
    } else if (password !== dbPassword) {
      setOpen(true)
    } else {
      console.log("error")
    }
  }

  return (
    <div className={classes.main}>
      <LoginModal
        open={open}
        handleClose={handleClose}
      />
      <div>
        <div className={classes.icon}>
          <img src={icon} />
        </div>
        <FormControl className='col-12 mt-5 mb-4' variant="outlined">
          <InputLabel className={classes.color}>USERNAME</InputLabel>
          <WhiteOutlinedInput
            type="text"
            startAdornment={<PersonOutlineIcon className={classes.color} />}
            label="USERNAME"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>
        <FormControl className='col-12' error={!passwordRegex.test(password) && password.length !== 0} variant="outlined">
          <InputLabel className={classes.color}>PASSWORD</InputLabel>
          <WhiteOutlinedInput
            type="password"
            startAdornment={<HttpsOutlinedIcon />}
            label="PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!passwordRegex.test(password) && password.length !== 0 &&
            <FormHelperText className={classes.errormsg}>Wrong combination</FormHelperText>
          }
        </FormControl>
        <div className='col-12'>
        <Button className='col-12 mt-4' onClick={handleLogin} style={{backgroundColor: "white", color: "#2148c0"}} variant="contained"><b>Login</b></Button>
        <div className="text-white text-end mt-2">Forgot Password ?</div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
