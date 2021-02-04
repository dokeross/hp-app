import axios from "axios";

axios.defaults.baseURL = "http://91.226.83.245:3003/";
axios.defaults.headers.common["token"] = window.localStorage.token;
// axios.defaults.headers = {
//   "Access-Control-Allow-Origin": "*",
//   //   "Content-Type": "application/x-www-form-urlencoded",
// };

window.axios = axios;

export default axios;
