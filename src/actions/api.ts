import { Dispatch } from "react";
import { auth } from "../../firebase-config";

export const authenticatedRequestWithDispatch = async (
  dispatch: Dispatch<any>,
  endpoint: string,
  requestType: string,
  successType: string,
  errorType: string,
  method: string = "GET",
  data: string | null = null
) => {
  const userToken = await auth.currentUser?.getIdToken();
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${userToken}`,
  };
  console.log("starting auth request");
  requestWithDispatch(
    dispatch,
    endpoint,
    requestType,
    successType,
    errorType,
    method,
    data as string,
    headers,
  );
};

export const requestWithDispatch = async (
  dispatch: Dispatch<any>,
  endpoint: string,
  requestType: string,
  successType: string,
  errorType: string,
  data: string | null = null,
  method: string = "GET",
  headers = { "Content-Type": "application/json" }
) => {
  try {
    dispatch({ type: requestType });
    console.log("fetching data")
    const response = await fetch(endpoint, {
      headers,
      method,
      body: data,
    });
    console.log(response);
    dispatch({ type: successType, payload: response.json() });
  } catch {
    dispatch({ type: errorType });
  }
};
