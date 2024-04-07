import { requestWithDispatch } from "./api";
import { Dispatch } from "react";

export const GET_USER_REQUEST = "@@GET_USER_REQUEST";
export const GET_USER_SUCCESS = "@@GET_USER_SUCCESS";
export const GET_USER_FAILURE = "@@GET_USER_FAILURE";

export const getUser = () => {
  return (dispatch: Dispatch<any>) => {
    return requestWithDispatch(
      dispatch,
      "https://helloworld-eovzxfzvvq-uc.a.run.app",
      GET_USER_REQUEST,
      GET_USER_SUCCESS,
      GET_USER_FAILURE
    );
  };
};
