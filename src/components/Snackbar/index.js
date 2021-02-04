import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const CustomizedSnackbars = ({ openSnackbar, handleCloseSnackbar }) => {
  return (
    <div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={"error"}>
          <div>Неправильно введен логин и пароль</div>
        </Alert>
      </Snackbar>
    </div>
  );
};
