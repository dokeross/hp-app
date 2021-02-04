import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

import { changeStatus } from "../../utils/api/products";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "fit-content",
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));

const useConfirmationStatus = (id, status) => {
  const [check, setCheck] = React.useState(status);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleStatus = (event) => {
    setCheck(event.target.checked);
    changeStatus(id, event.target.checked);
  };

  return {
    check,
    open,
    handleClickOpen,
    handleClose,
    handleStatus,
  };
};

export const ConfirmationStatus = ({ id, status }) => {
  const classes = useStyles();
  const {
    check,
    open,
    handleClickOpen,
    handleClose,
    handleStatus,
  } = useConfirmationStatus(id, status);
  return (
    <React.Fragment>
      <Button onClick={handleClickOpen}>
        <FiberManualRecordIcon color={check ? "primary" : "error"} />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Статус товара</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Необходимо установить статус товара в соответствии с тем, обработан
            он и выгружен на сайт или нет
          </DialogContentText>
          <form className={classes.form} noValidate>
            <FormControlLabel
              className={classes.formControlLabel}
              control={
                <Switch
                  checked={check}
                  onChange={handleStatus}
                  color="primary"
                />
              }
              label="Сменить статус"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
