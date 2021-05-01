import createDataContext from "./createDataContext";
import { AsyncStorage } from "react-native";
import { navigate } from "../navigationRef";
import firebase from "firebase";

const authReducer = (state, action) => {
  switch (action.type) {
    case "sign_up":
      return { errorMessage: "", userId: action.payload };
    case "sign_in":
      return { errorMessage: "", userId: action.payload };
    case "show_error":
      return { ...state, errorMessage: action.payload };
    case "clear_error_msg":
      return { ...state, errorMessage: "" };
    case "sign_out":
      return { errorMessage: "", userId: null };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const user = await AsyncStorage.getItem("user");
  if (user) {
    dispatch({ type: "sign_in", payload: user });
    navigate("Home");
  } else {
    navigate("SignUp");
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      console.log("email", email);
      const signedUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      console.log(signedUser.user.uid);
      await AsyncStorage.setItem("user", signedUser.user.uid);
      dispatch({ type: "sign_up", payload: signedUser.user.uid });
      navigate("Home");
    } catch (err) {
      dispatch({
        type: "show_error",
        payload: "Something went wrong, Please try again",
      });
    }
  };
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    try {
      console.log("email", email);
      const LoggedInUser = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      console.log(LoggedInUser.user.uid);
      await AsyncStorage.setItem("user", LoggedInUser.user.uid);
      dispatch({ type: "sign_in", payload: LoggedInUser.user.uid });
      navigate("Home");
    } catch (err) {
      dispatch({
        type: "show_error",
        payload: "Something went wrong, Please try again",
      });
    }
  };
};

const clearError = (dispatch) => {
  return () => {
    console.log("clear-----------");
    dispatch({ type: "clear_error_msg" });
  };
};

const signout = (dispatch) => {
  return async () => {
    await firebase.auth().signOut();
    await AsyncStorage.removeItem("user");
    dispatch({ type: "sign_out" });
    navigate("SignUp");
  };
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, clearError, signin, tryLocalSignin, signout },
  { userId: "", errorMessage: "" }
);
