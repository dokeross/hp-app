import { axios } from "../../core";

export const getProducts = (
  page,
  filter,
  search,
  sort,
  sortType,
  productsPerPage
) =>
  axios.get(
    `/getProductsByHp?page=${page}&filter=${filter}&search=${search}&sort=${sort}&sortType=${sortType}&productsPerPage=${productsPerPage}`
  );

export const changeStatus = (id, status) =>
  axios.get(`/changeStatus/?id=${id}&status=${status}`);

export const removeProductById = (id) => axios.delete("/productsByHp/" + id);
