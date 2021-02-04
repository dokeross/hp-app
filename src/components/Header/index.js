import AppBar from "@material-ui/core/AppBar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import { useAuth } from "../../pages/Auth/authContext";

import { Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "1450px",
    margin: "0 auto",
    width: "100%",
    paddingLeft: "15px",
    paddingRight: "15px",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: "linear-gradient(to right,#3ebe8c, #3ebe8c)",
    justifyContent: "center",
    height: "50px",
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  linkSignin: {
    color: "#3f51b5",
    textDecoration: "none",
  },
}));

const useHeader = () => {
  const { changeAuthorizationStatus, avatar } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    changeAuthorizationStatus(false);
    // history.push("/signin");
  };

  return { handleSubmit, avatar };
};

export const Header = () => {
  const classes = useStyles();
  const { handleSubmit, avatar } = useHeader();

  return (
    <>
      <AppBar className={classes.appBar} position="static">
        <div className={classes.root}>
          <div className={classes.wrapper}>
            <Button
              onClick={handleSubmit}
              color="primary"
              size="small"
              startIcon={<ArrowBackIosIcon />}
            >
              <Link className={classes.linkSignin} to="/signin">
                Выйти
              </Link>
            </Button>

            <Avatar alt="admin" src={avatar} />
          </div>
        </div>
      </AppBar>
      ;
    </>
  );
};
