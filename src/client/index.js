import axios from "axios";
import qs from "querystring";

export const getData = query => {
  return axios.get(`${process.env.REACT_APP_URL}?${qs.stringify(query)}`);
};

export const postData = form => {
  return axios.post(`${process.env.REACT_APP_URL}`, form);
};
