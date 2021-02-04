import { Route } from "react-router-dom";
import { LoginForm } from "../../modules/LoginForm/containers/LoginForm";

export const Auth = () => {
  return <Route exact path="/signin" component={LoginForm} />;
  // <Route exact path="/signup" component={RegisterForm} />;
};
