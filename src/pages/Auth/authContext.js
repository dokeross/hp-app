import React, { useContext, useReducer } from "react";

const AuthContext = React.createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "authorizationStatus":
      return { ...state, isAuth: action.payload };
  }
  switch (action.type) {
    case "getAvatar":
      return { ...state, avatar: action.payload };
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    isAuth: !!window.localStorage.token,
    avatar: "http://dokerapp.na4u.ru/avatars/admin.jpg",
  });

  const changeAuthorizationStatus = (value) => {
    dispatch({ type: "authorizationStatus", payload: value });
  };

  const getAvatar = (avatar) => {
    dispatch({ type: "getAvatar", payload: avatar });
  };

  return (
    <div>
      <AuthContext.Provider
        value={{
          isAuth: state.isAuth,
          changeAuthorizationStatus,
          avatar: state.avatar,
          getAvatar,
        }}
      >
        {children}
      </AuthContext.Provider>
    </div>
  );
};
