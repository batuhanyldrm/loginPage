import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import DialogActions from '@mui/material/DialogActions';
import React from "react";

const LoginModal = (props) => {

	const {open, handleClose} = props

  return (
		<div>
			<Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">
          <div className="text-center">Wrong Password</div>
        </DialogTitle>
        <DialogContent>
					<div>The provided password is wrong</div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
		</div>
	);
};

export default LoginModal;
