import IconButton from "@material-ui/core/IconButton";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  buttonWrapper: {
    display: "flex",
    padding: "0 5px",
  },
  activeIcon: {
    color: "#3ebe8c",
    border: "2px solid #3ebe8c",
  },
});

export const SortButtons = ({ handleChangeSort, sort, sortType, nameSort }) => {
  const value = nameSort;
  const classes = useStyles();
  return (
    <div className={classes.buttonWrapper}>
      <IconButton
        aria-label="delete"
        size="small"
        onClick={() => handleChangeSort("asc", nameSort)}
        className={sort == nameSort && sortType == "asc" && classes.activeIcon}
      >
        <ArrowUpwardIcon fontSize="inherit" />
      </IconButton>
      <IconButton
        aria-label="delete"
        size="small"
        onClick={() => handleChangeSort("desc", nameSort)}
        className={sort == nameSort && sortType == "desc" && classes.activeIcon}
      >
        <ArrowDownwardIcon fontSize="inherit" />
      </IconButton>
    </div>
  );
};
