import { useState } from "react";
import { signIn } from "../../../utils/api/user.js";
import { useAuth } from "../../../pages/Auth/authContext";
import { LoginForm as BaseLoginForm } from "../components/LoginForm";

export const LoginForm = ({ history }) => {
  const { changeAuthorizationStatus } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const changeEmail = (e) => setEmail(e.target.value);
  const changePasword = (e) => setPassword(e.target.value);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn({
      email,
      password,
    })
      .then(({ data }) => {
        const { token, status } = data;
        window.axios.defaults.headers.common["token"] = token;
        window.localStorage["token"] = token;
        console.log(token, status);
        changeAuthorizationStatus(true);
        history.push("/");
      })
      .catch((err) => {
        setOpenSnackbar(true);
      });
  };

  return (
    <BaseLoginForm
      email={email}
      password={password}
      changeEmail={changeEmail}
      changePasword={changePasword}
      handleSubmit={handleSubmit}
      openSnackbar={openSnackbar}
      handleCloseSnackbar={handleCloseSnackbar}
    />
  );
};
