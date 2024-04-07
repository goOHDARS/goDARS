import { Dispatch } from "react";
import { auth } from "../../firebase-config";

export const authenticatedRequestWithDispatch = async (
  dispatch: Dispatch<any>,
  endpoint: string,
  requestType: string,
  successType: string,
  errorType: string,
  data = null
) => {
  const userToken = await auth.currentUser?.getIdToken();
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${userToken}`,
  };

  requestWithDispatch(
    dispatch,
    endpoint,
    requestType,
    successType,
    errorType,
    data,
    headers
  );
};

export const requestWithDispatch = async (
  dispatch: Dispatch<any>,
  endpoint: string,
  requestType: string,
  successType: string,
  errorType: string,
  data = null,
  headers = { "Content-Type": "application/json" }
) => {
  try {
    dispatch({ type: requestType });
    const response = await fetch(endpoint, {
      headers,
      body: data,
    });
    console.log(response)
    dispatch({ type: successType, payload: response.json() });
  } catch {
    dispatch({ type: errorType });
  }
};
