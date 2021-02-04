import { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useCopyToClipboard } from "react-use";
// import Button from "@material-ui/core/Button";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      maxWidth: "250px",
      overflow: "auto",
    },
    icon: {
      marginRight: theme.spacing(0.5),
      color: "#3ebe8c",
    },
  })
);

const STATUS_COPY = {
  COPY: "copy",
  COPIED: "copied",
};

const TITLE_BY_STATUS = {
  [STATUS_COPY.COPY]: "Копировать",
  [STATUS_COPY.COPIED]: "Скопировано",
};

export const CopyByClick = ({ text }) => {
  const classes = useStyles();
  const [, copyToClipboard] = useCopyToClipboard();
  const [statusCopy, setStatusCopy] = useState(STATUS_COPY.COPY);

  const onClickCopy = useCallback(() => {
    copyToClipboard(text);
    setStatusCopy(STATUS_COPY.COPIED);
  }, [copyToClipboard, text]);

  const onClickAway = useCallback(() => {
    setStatusCopy(STATUS_COPY.COPY);
  }, [setStatusCopy]);

  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <Tooltip title={TITLE_BY_STATUS[statusCopy]} placement="top" arrow>
        <div className={classes.root} onClick={onClickCopy}>
          <FileCopyOutlinedIcon
            fontSize="small"
            className={classes.icon}
            color="primary"
          />
          {text}
        </div>
      </Tooltip>
    </ClickAwayListener>
  );
};

CopyByClick.propTypes = {
  text: PropTypes.string.isRequired,
};
