import React, {FC, useEffect, useState} from "react";
import AutocompleteSearchInput from "../../components/AutocompleteSearchInput";
import { IMovie } from "../../types/interfaces/movie.interfaces";

const Home: FC = () => {

  return (
    <div>
      <AutocompleteSearchInput/>
      {/*<SearchedMovieTable/>*/}
    </div>
  )
};
export default Home