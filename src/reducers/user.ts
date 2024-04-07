import { PayloadAction } from "@reduxjs/toolkit";
import * as user from "../actions/user";

type UserState = {
  loading: boolean;
  errors: string[];
  user?: {
	name?: string,
	pid?: string,
	year?: number,
	onboarded?: boolean,
  }
};

const initialState: UserState = {
  loading: false,
  errors: [],
  user: undefined
};

export default (
  state = initialState,
  action: PayloadAction<any>
): UserState => {
  switch (action.type) {
    case user.GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case user.GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
		user: action.payload,
      };
    case user.GET_USER_FAILURE:
      return {
        ...state,
        loading: false,
        errors: ["errors"],
      };
    default:
      return state;
  }
};
