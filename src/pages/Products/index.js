import { useState } from "react";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import IconButton from "@material-ui/core/IconButton";

import { Header } from "../../components/Header";
import { useProducts } from "./useProducts";
import { ProductsTable } from "./ProductsTable";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: "1450px",
      margin: "0 auto",
      paddingLeft: "15px",
      paddingRight: "15px",
    },
    wrapperQuantityPanel: {
      display: "flex",
      marginBottom: "35px",
    },
    quantityPanel: {
      marginRight: "45px",
    },
    quantityPanelHeader: {
      fontSize: "15px",
      fontWeight: "500",
      color: "#2c3e50",
    },
    quantityPanelBody: {
      color: "#3ebe8c",

      fontSize: "28px",
      fontWeight: "500",
    },
    pagination: {
      display: "flex",
      alignItems: "center",
    },
    pages: {
      marginRight: "20px",
    },
  })
);

export const Products = () => {
  const classes = useStyles();
  const {
    data,
    isLoading,
    isError,
    countProducts,
    numberProcessedProducts,
    productsPerPage,
    page,
    sort,
    sortType,
    search,
    handleChangePage,
    handleChangeFilter,
    handleChangeSearchInput,
    handleChangeSort,
    removeProduct,
  } = useProducts();

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <Header />
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <div>
              {isLoading ? (
                <div>
                  <CircularProgress />
                </div>
              ) : (
                <div>
                  <div className={classes.wrapperQuantityPanel}>
                    <div className={classes.quantityPanel}>
                      <div className={classes.quantityPanelHeader}>
                        ОБЩЕЕ КОЛИЧЕСТВО
                      </div>
                      <div className={classes.quantityPanelBody}>
                        {countProducts}
                      </div>
                    </div>
                    <div className={classes.quantityPanel}>
                      <div className={classes.quantityPanelHeader}>
                        ОБРАБОТАНО
                      </div>
                      <div className={classes.quantityPanelBody}>
                        {numberProcessedProducts}
                      </div>
                    </div>
                    <div className={classes.quantityPanel}>
                      <div className={classes.quantityPanelHeader}>
                        НЕОБРАБОТАНО
                      </div>
                      <div className={classes.quantityPanelBody}>
                        {countProducts - numberProcessedProducts}
                      </div>
                    </div>
                  </div>

                  <div className={classes.pagination}>
                    <p className={classes.pages}>
                      {(page - 1) * productsPerPage + 1}-
                      {countProducts > page * productsPerPage
                        ? page * productsPerPage
                        : countProducts}{" "}
                      из {countProducts}
                    </p>
                    <div>
                      <IconButton
                        size="small"
                        disabled={page === 1}
                        onClick={() => handleChangePage(page - 1)}
                      >
                        <ArrowBackIosIcon fontSize="inherit" />
                      </IconButton>
                      <IconButton
                        size="small"
                        disabled={
                          page >= Math.ceil(countProducts / productsPerPage)
                        }
                        onClick={() => handleChangePage(page + 1)}
                      >
                        <ArrowForwardIosIcon fontSize="inherit" />
                      </IconButton>
                    </div>
                  </div>

                  <ProductsTable
                    data={data}
                    handleChangeFilter={handleChangeFilter}
                    handleChangeSearchInput={handleChangeSearchInput}
                    handleChangeSort={handleChangeSort}
                    removeProduct={removeProduct}
                    sort={sort}
                    sortType={sortType}
                    search={search}
                  />
                </div>
              )}
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
