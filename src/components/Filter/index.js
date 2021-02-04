import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { makeStyles } from "@material-ui/core/styles";
import FilterListIcon from "@material-ui/icons/FilterList";

const useStyles = makeStyles({
  filterButton: {
    border: "1px solid #3ebe8c",
    color: "#3ebe8c",
    width: "120px",
  },
});

export const Filter = ({ handleChangeFilter }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    handleChangeFilter(e);
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        startIcon={<FilterListIcon />}
        className={classes.filterButton}
        onClick={handleClick}
      >
        Filter
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
      >
        <MenuItem onClick={() => handleClose(null)}>Все</MenuItem>
        <MenuItem onClick={() => handleClose(true)}>Обработанные</MenuItem>
        <MenuItem onClick={() => handleClose(false)}>Необработанные</MenuItem>
      </Menu>
    </div>
  );
};
