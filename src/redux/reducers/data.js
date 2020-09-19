import {
  getDataAction,
  getDataNoLimitAction,
  postDataAction,
  pending,
  rejected,
  fulfilled,
} from "../actions/actionTypes";

const initialValue = {
  data: [],
  dataLimit: [],
  pagination: {},
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
  isFulfilledLimit: false,
  errorMessage: {},
};

const fetchData = (state = initialValue, action) => {
  switch (action.type) {
    case getDataNoLimitAction + pending:
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case getDataNoLimitAction + rejected:
      return {
        ...state,
        isRejected: true,
        isFulfilled: false,
        errorMessage: action.payload.data,
      };
    case getDataNoLimitAction + fulfilled:
      return {
        ...state,
        isRejected: false,
        isFulfilled: true,
        pagination: action.payload.data.pagination,
        data: action.payload.data.data,
      };
    case getDataAction + pending:
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilledLimit: false,
      };
    case getDataAction + rejected:
      return {
        ...state,
        isRejected: true,
        isFulfilledLimit: false,
        errorMessage: action.payload.data,
      };
    case getDataAction + fulfilled:
      return {
        ...state,
        isRejected: false,
        isFulfilledLimit: true,
        pagination: action.payload.data.pagination,
        dataLimit: action.payload.data.data,
      };
    case postDataAction + pending:
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case postDataAction + rejected:
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        errorMessage: action.payload.data,
      };
    case postDataAction + fulfilled:
      state.data.push(action.payload.data.data);
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        data: state.data,
      };
    default:
      return {
        ...state,
      };
  }
};

export default fetchData;
