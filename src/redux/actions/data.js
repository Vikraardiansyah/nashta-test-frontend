import {
  getDataAction,
  postDataAction,
  getDataNoLimitAction,
} from "./actionTypes";
import { getData, postData } from "../../client";

export const getDataActionCreator = query => {
  return {
    type: getDataAction,
    payload: getData(query),
  };
};

export const getDataNoLimitActionCreator = () => {
  return {
    type: getDataNoLimitAction,
    payload: getData({ home: true }),
  };
};

export const postDataActionCreator = form => {
  return {
    type: postDataAction,
    payload: postData(form),
  };
};
