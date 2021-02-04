import { useState, useEffect } from "react";
import { getProducts, removeProductById } from "../../utils/api/products.js";

import { axios } from "../../core";

export const useProducts = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [countProducts, setCountProducts] = useState(0);
  const [numberProcessedProducts, setNumberProcessedProducts] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(100);
  const [sort, setSort] = useState("processingStatus");
  const [sortType, setSortType] = useState("asc");
  const [filter, setFilter] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [update, setUpdate] = useState(false);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeFilter = (val) => {
    setSearch((prevState) => {
      return "";
    });
    setPage((prevState) => {
      return 1;
    });
    setFilter((prevState) => {
      return val;
    });
  };

  const handleChangeSearchInput = (e, value) => {
    e.preventDefault();
    setSearch(value);
  };

  const handleChangeSort = (valueSort, nameSort) => {
    setSort((prevState) => {
      return nameSort;
    });
    setSortType((prevState) => {
      return valueSort;
    });
  };

  const removeProduct = (id) => {
    if (window.confirm("Вы действительно хотите удалить товар?")) {
      removeProductById(id).then(() => setUpdate((prevState) => !prevState));
    }
  };

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        setIsLoading(true);
        const response = await getProducts(
          page,
          filter,
          search,
          sort,
          sortType,
          productsPerPage
        );
        const { data } = response;
        setData(data.data);
        setCountProducts(data.count);
        setNumberProcessedProducts(data.numberProcessed);
        setIsError(false);
      } catch (e) {
        console.log(e);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getAllProducts();
  }, [page, filter, search, sort, sortType, update]);

  return {
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
  };
};
