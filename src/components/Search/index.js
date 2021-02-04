import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    marginBottom: "30px",
    border: "1px solid #3ebe8c",
    boxShadow: "none",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 1,
    color: "#3ebe8c",
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export const SearchString = ({ handleChangeSearchInput, search }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState("");

  const changeValueInput = (e) => {
    setValue(e.target.value);
  };

  React.useEffect(() => {
    setValue((prevState) => {
      return search;
    });
  }, []);

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Поиск товара в приложении"
        inputProps={{ "aria-label": "search" }}
        onChange={changeValueInput}
        value={value}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
        onClick={(e) => handleChangeSearchInput(e, value)}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
