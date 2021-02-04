import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Popper from "@material-ui/core/Popper";
import PopupState, { bindToggle, bindPopper } from "material-ui-popup-state";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import NoteOutlinedIcon from "@material-ui/icons/NoteOutlined";

import { CopyByClick } from "../CopyToClick";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";

import { fieldsName } from "../../utils/fieldsName";

const useStyles = makeStyles((theme) => ({
  button: {
    color: "#3ebe8c",
    border: "1px solid #3ebe8c",
  },
  typography: {
    padding: theme.spacing(2),
  },
  row: {
    display: "flex",
    padding: "10px",
  },
  titleProperty: {
    marginRight: "20px",
    minWidth: "150px",
  },
  propertyBody: {
    maxWidth: "500px",
  },
  dataAvailable: {
    display: "flex",
  },
  dataAvailableSpan: {
    marginLeft: "20px",
  },
}));

export const PopperPopupState = ({ data }) => {
  const classes = useStyles();
  const [propertyList, setPropertyList] = React.useState([]);

  React.useEffect(() => {
    const result = Object.keys(data)
      .map((item) => {
        const nameProperty = fieldsName[item];
        return fieldsName[item] && { [nameProperty]: data[item] };
      })
      .filter((v) => v);
    setPropertyList((prevState) => {
      return result;
    });
  }, []);
  return (
    <PopupState variant="popper" popupId="demo-popup-popper">
      {(popupState) => (
        <div>
          <Button
            variant="outlined"
            className={classes.button}
            size="small"
            startIcon={<AspectRatioIcon />}
            {...bindToggle(popupState)}
          >
            Свойства
          </Button>
          <Popper {...bindPopper(popupState)} transition>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper>
                  <Typography className={classes.typography}>
                    <div>
                      <div>
                        {propertyList.length > 0 ? (
                          propertyList.map((item) => {
                            return Object.keys(item).map((v) => (
                              <div className={classes.row}>
                                <div className={classes.titleProperty}>
                                  {v}:
                                </div>
                                <div className={classes.dataAvailableSpan}>
                                  <CopyByClick text={item[v]} />
                                </div>
                              </div>
                            ));
                          })
                        ) : (
                          <div className={classes.dataAvailable}>
                            <NoteOutlinedIcon color="primary" />{" "}
                            <span className={classes.dataAvailableSpan}>
                              Данных нет
                            </span>
                          </div>
                        )}
                        {data.description && (
                          <div className={classes.row}>
                            <div className={classes.titleProperty}>
                              Описание:
                            </div>
                            <div className={classes.dataAvailableSpan}>
                              <CopyByClick text={data.description} />
                            </div>
                          </div>
                        )}
                      </div>
                      <Button
                        variant="outlined"
                        // className={classes.button}
                        size="small"
                        {...bindToggle(popupState)}
                      >
                        Закрыть
                      </Button>
                    </div>
                  </Typography>
                </Paper>
              </Fade>
            )}
          </Popper>
        </div>
      )}
    </PopupState>
  );
};
