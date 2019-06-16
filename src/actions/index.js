import { FETCH_DATA } from "./types";
import { NextItem } from "./types";
import { error_in_fetch } from "./types";
import { is_loading } from "./types";
import { change_data } from "./types";
import axios from "axios";

const apiUrl = "https://api.jsonbin.io/b/5cfd35bf2132b7426dfe33b1";

export const errorinfetch = bool => {
  return {
    type: error_in_fetch,
    haserror: bool
  };
};

export const isloading = bool => {
  return {
    type: is_loading,
    isloading: bool
  };
};

export const fetchData = data => {
  return {
    type: FETCH_DATA,
    data
  };
};

export const fetchGithubData = () => {
  return dispatch => {
    dispatch(isloading(true));
    axios
      .get(apiUrl)
      .then(items => {
        console.log(items);
        dispatch(fetchData(items.data));
        dispatch(isloading(false));
      })
      .catch(() => dispatch(errorinfetch(true)));
  };
};

export const nextitem = () => {
  return { type: NextItem };
};

export const change = payload => {
  return { type: change_data, payload };
};
