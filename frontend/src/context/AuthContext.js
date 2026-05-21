"use client";
import api from "@/services/api";

const { createContext, useReducer, useEffect, useContext } = require("react");

const AuthContext = createContext();

const initialState = {
  user: null,
  cart:null,
  payments:null,
  isLoading: true,
  isLoggedIn: false,
  error: null,
};
const authReducer = (state, action) => {
  switch (action?.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };

    case "getUser":
      return {
        user: action?.payload?.user,
        cart: action?.payload?.cart,
        payments: action?.payload?.payments,
        isLoading: false,
        isLoggedIn: true,
        error: null,
      };

    case "updateUser":
      return {
        ...state,
        user: action?.payload,
      };

    case "logout":
      return {
        ...state,
        user: null,
        cart: null,
        payments: null,
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
      // dispatch({ type: "loading" });
      try {
        const { data } = await api.get("/user/profile");
        console.log(data?.data);
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
        cart: state.cart,
        payments: state.payments,
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
