import { authenticatedRequestWithDispatch, requestWithDispatch } from "./api";
import { Dispatch } from "react";

export const GET_USER_REQUEST = "@@GET_USER_REQUEST";
export const GET_USER_SUCCESS = "@@GET_USER_SUCCESS";
export const GET_USER_FAILURE = "@@GET_USER_FAILURE";

export const SET_USER_REQUEST = "@@SET_USER_REQUEST";
export const SET_USER_SUCCESS = "@@SET_USER_SUCCESS";
export const SET_USER_FAILURE = "@@SET_USER_FAILURE";

export type OnboardingInfo = {
  name: string;
  email: string;
  password: string;
  pid: string;
  major: string;
  year: number;
};

export const getUser = () => {
  return (dispatch: Dispatch<any>) => {
    return authenticatedRequestWithDispatch(
      dispatch,
      "http://localhost:5000/goohdars/us-central1/api/get-user",
      GET_USER_REQUEST,
      GET_USER_SUCCESS,
      GET_USER_FAILURE,
      "GET",
    );
  };
};

export const setUser = (onboardingInfo: OnboardingInfo) => {
  return (dispatch: Dispatch<any>) => {
    return authenticatedRequestWithDispatch(
      dispatch,
      "http://localhost:5000/goohdars/us-central1/api/set-user",
      SET_USER_REQUEST,
      SET_USER_SUCCESS,
      SET_USER_FAILURE,
      "POST",
      JSON.stringify(onboardingInfo),
    );
  };
};
