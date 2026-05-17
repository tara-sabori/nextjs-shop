"use client";
import api from "@/services/api";

const { createContext, useReducer, useEffect, useContext } = require("react");

const AuthContext = createContext();

const initialState = {
  user: null,
  isLoading: true,
  isLoggedIn: false,
  error: null,
};
const authReducer = (state, action) => {
  switch (action?.type) {
    case "getUser":
      return {
        user: action?.payload,
        isLoading: false,
        isLoggedIn: true,
        error: null,
      };

    case "logout":
      return {
        ...state,
        user: null,
        isLoading: false,
        isLoggedIn: false,
      };
    case "error":
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: action?.payload,
      };

    default:
      return state;
  }
};
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const { data } = await api.get("/user/profile");
        console.log(data);
        dispatch({ type: "getUser", payload: data?.data });
      } catch (error) {
        console.log(error?.response);
        dispatch({ type: "error", payload: error?.response?.data?.message });
      }
    };
    getUserProfile();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isLoggedIn: state.isLoggedIn,
        isLoading: state.isLoading,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
