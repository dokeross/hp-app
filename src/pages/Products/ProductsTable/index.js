import React from "react";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import { CopyByClick } from "../../../components/CopyToClick";
import { ConfirmationStatus } from "../../../components/ConfirmationStatus";
import { PopperPopupState } from "../../../components/Popper";
import { SearchString } from "../../../components/Search";
import { Filter } from "../../../components/Filter";
import { SortButtons } from "../../../components/SortButtons";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableCell: {
    fontSize: "13px",
  },
  imageBlock: {
    width: "100px",
    height: "100px",
    textAlign: "center",
  },
  imageProduct: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  searchWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },
  sortWrapper: {
    display: "flex",
  },
  center: {
    textAlign: "center",
  },
  groupWrapper: {
    maxWidth: "100px",
    overflow: "auto",
  },
  deleteSymbol: {
    color: "red",
    fontWeight: 600,
    cursor: "pointer",
  },
});

export const ProductsTable = ({
  data,
  handleChangeFilter,
  handleChangeSearchInput,
  handleChangeSort,
  removeProduct,
  sort,
  sortType,
  search,
}) => {
  const classes = useStyles();

  return (
    <>
      <TableContainer component={Paper}>
        <div className={classes.searchWrapper}>
          <Filter handleChangeFilter={handleChangeFilter} />
          <SearchString
            handleChangeSearchInput={handleChangeSearchInput}
            search={search}
          />
        </div>
        <Table
          className={classes.table}
          size="small"
          aria-label="products table"
        >
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell}>
                <div className={classes.sortWrapper}>
                  <div>Статус</div>
                  <SortButtons
                    handleChangeSort={handleChangeSort}
                    sort={sort}
                    sortType={sortType}
                    nameSort="processingStatus"
                  />
                </div>
              </TableCell>
              <TableCell className={classes.tableCell}>Изображение</TableCell>
              <TableCell className={classes.tableCell}>
                <div className={classes.sortWrapper}>
                  <div>Название</div>
                  <SortButtons
                    handleChangeSort={handleChangeSort}
                    sort={sort}
                    sortType={sortType}
                    nameSort="title"
                  />
                </div>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <div className={classes.sortWrapper}>
                  <div>Цена</div>
                  <SortButtons
                    handleChangeSort={handleChangeSort}
                    sort={sort}
                    sortType={sortType}
                    nameSort="price"
                  />
                </div>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <div className={classes.sortWrapper}>
                  <div>Магазин</div>
                  <SortButtons
                    handleChangeSort={handleChangeSort}
                    sort={sort}
                    sortType={sortType}
                    nameSort="tenant"
                  />
                </div>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <div className={classes.sortWrapper}>
                  <div>Класс</div>
                  <SortButtons
                    handleChangeSort={handleChangeSort}
                    sort={sort}
                    sortType={sortType}
                    nameSort="gruppa"
                  />
                </div>
              </TableCell>
              {/* <TableCell className={classes.tableCell}>
                <div className={classes.sortWrapper}>
                  <div>Группа</div>
                  <SortButtons
                    handleChangeSort={handleChangeSort}
                    sort={sort}
                    sortType={sortType}
                    nameSort="podgruppa"
                  />
                </div>
              </TableCell> */}
              <TableCell className={classes.tableCell}>Свойства</TableCell>
              <TableCell className={classes.tableCell}>
                <div className={classes.sortWrapper}>
                  <div>Обновлено</div>
                  <SortButtons
                    handleChangeSort={handleChangeSort}
                    sort={sort}
                    sortType={sortType}
                    nameSort="updatedAt"
                  />
                </div>
              </TableCell>
              <TableCell className={classes.tableCell}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item._id}>
                <TableCell className={classes.tableCell}>
                  {item.active ? (
                    <div className={classes.center}>
                      <ConfirmationStatus
                        id={item._id}
                        status={item.processingStatus}
                      />
                    </div>
                  ) : (
                    <div className={classes.center}>
                      <DeleteForeverIcon fontSize="large" color="error" />
                    </div>
                  )}
                </TableCell>
                <TableCell
                  className={classes.tableCell}
                  component="th"
                  scope="row"
                >
                  <div className={classes.imageBlock}>
                    <img src={item.image} className={classes.imageProduct} />
                  </div>
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <CopyByClick text={item.title} />
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <CopyByClick text={item.price} />
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {item.titleShop}
                  <br />
                  {item.numberShop}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <div className={classes.groupWrapper}>{item.gruppa}</div>
                </TableCell>
                {/* <TableCell className={classes.tableCell}>{item.podgruppa}</TableCell> */}
                <TableCell className={classes.tableCell}>
                  <PopperPopupState data={item} />
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {format(parseISO(item.updatedAt), "MM/dd/yyyy")}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <Avatar
                    alt="Remy Sharp"
                    src="http://dokerapp.na4u.ru/avatars/admin.jpg"
                  />
                </TableCell>
                <TableCell
                  className={classes.tableCell}
                  onClick={() => removeProduct(item._id)}
                >
                  <div className={classes.deleteSymbol}>x</div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* {data.slice(0, 10).map(product => (
        <div key={product._id}>{product.title}</div>
      ))} */}
    </>
  );
};
