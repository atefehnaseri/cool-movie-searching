import axiosConfig from "./axiosConfig";
import {API_BASE_URL} from "../constants";


export const searchMovie: any = async (searchedText: string, queryParams: any) => {

  let queries = "?";
  for (const queryParamKey in queryParams) {
    if (queryParams.hasOwnProperty(queryParamKey)) {
      queries += queryParamKey + "=" + queryParams[queryParamKey] + "&";
    }
  }
  queries = queries.substring(0, queries.length - 1);
  const response = await axiosConfig.get(`${API_BASE_URL}/search/movie/${queries}`);
  return JSON.stringify(response.data, null, 2);
};