import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { CustomizedSnackbars } from "../../../components/Snackbar";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <Link color="inherit" href="https://doker.ru/">
        ТК ДОКЕР
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#3ebe8c",
    color: "#fff",
  },
  h1: {
    color: "#494848",
  },
}));

export const LoginForm = ({
  email,
  password,
  changeEmail,
  changePasword,
  handleSubmit,
  openSnackbar,
  handleCloseSnackbar,
}) => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" className={classes.h1}>
          Введите логин и пароль
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={changeEmail}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={changePasword}
          />
          <Button
            fullWidth
            variant="contained"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Войти в программу
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
      <CustomizedSnackbars
        openSnackbar={openSnackbar}
        handleCloseSnackbar={handleCloseSnackbar}
      />
    </Container>
  );
};

// export const LoginForm = ({
//   name,
//   changeName,
//   password,
//   changePasword,
//   handleSubmit,
// }) => {
//   return (
//     <>
//       <form>
//         <label>
//           Name:
//           <input type="text" name="name" value={name} onChange={changeName} />
//         </label>

//         <label>
//           password:
//           <input type="text" name="name" value={password} onChange={changePasword} />
//         </label>

//         <button onClick={handleSubmit}>авторизоваться</button>
//       </form>
//       ;
//     </>
//   );
// };
