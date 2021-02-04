import { axios } from "../../core";

export const getMe = () => axios.get("/user/me");
export const signIn = (postData) =>
  axios.post("/user/signin", postData, {
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "",
      "Content-Type": "application/json",
    },
  });
