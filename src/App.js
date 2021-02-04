import { useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { useAuth } from "./pages/Auth/authContext";
import { getMe } from "./utils/api/user";
import { Auth } from "./pages/Auth";
import { Products } from "./pages/Products";

export function App() {
  const { isAuth, changeAuthorizationStatus, getAvatar } = useAuth();
  useEffect(() => {
    getMe()
      .then(({ data }) => getAvatar(data.avatar))
      .catch((err) => {
        if (err.response.status === 403 || err.response.status === 404) {
          changeAuthorizationStatus(false);
          delete window.localStorage.token;
        }
      });
  }, []);

  return (
    <div className="">
      <Switch>
        <Route exact path={["/signin"]} component={Auth} />
        <Route
          path="/"
          render={() => (isAuth ? <Products /> : <Redirect to="/signin" />)}
        />
      </Switch>
    </div>
  );
}
