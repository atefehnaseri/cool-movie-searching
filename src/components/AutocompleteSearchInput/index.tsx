import React, {useEffect, useRef, useState} from "react";
import {Card, Col, Container, Input, Row} from "reactstrap";
import {IMovie} from "../../types/interfaces/movie.interfaces";
import {useDebounce} from "../../hooks/useDebounce";
import deadPoolIsWaiting from "../../assets/images/deadpoolIsWating.png"
import {useQuery} from "react-query";
import {searchMovie} from "../../services";
import {API_KEY} from "../../constants";

const AutocompleteSearchInput = () => {

  const inputSearchRef = useRef<HTMLInputElement>(null);
  const [searchedValue, setSearchedValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<IMovie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<IMovie | string>("");
  const [activeSuggestion, setActiveSuggestion] = useState<number>(0);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const debouncedSearchedValue = useDebounce(searchedValue, 500);

  const searchMovieQueryParams = {
    "api_key": API_KEY,
    "language": "en-US",
    "query": debouncedSearchedValue,
    "page": 1,
    "include_adult": false,
  };
  const {isLoading, isError, data} = useQuery<IMovie[], Error>(['searchMovie', debouncedSearchedValue],
     () => searchMovie(searchedValue, searchMovieQueryParams), {retry: 1,
      onSuccess: (res) => {
      console.log("response is: ", res);
        setSuggestions([]);
      },
      onError: (err: any) => {
        console.log("error is: ", err);

      },}
    );


  useEffect(
    () => {
      if (debouncedSearchedValue) {

        setIsSearching(true);
        if (!isError && data && !isLoading) {
          setIsSearching(false);
          // setSuggestions(data.results);
        }
      } else {
        setSuggestions([]);
        setIsSearching(false);
      }
    },
    [debouncedSearchedValue]
  );
  useEffect(() => {
    if (inputSearchRef.current) {
      inputSearchRef.current.focus();
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      setSearchedValue(event.target.value);
  };

  const handleClick = (value: string) => {
    setSearchedValue(value);
    setSuggestions([]);
    setSelectedMovie(value);
    setActiveSuggestion(0);
  };


  return (
    <Container>
      <img alt="What are you waiting for?! search a cool movie" src={deadPoolIsWaiting} width="50%" height="33%"/>
      <Input
        placeholder="No waiting! Search for a cool movie.."
        value={searchedValue}
        onChange={handleChange}
        innerRef={inputSearchRef}
        color="secondary"
      />
      {isSearching && <div>Searching ...</div>}

      {!isSearching && selectedMovie && <Card css={{marginTop: "0.5rem"}}>
        <Card css={{padding: "0"}}>
          {!suggestions.length &&
          searchedValue.length &&
          // !selectedMovie.length ? (
          !selectedMovie ? (
            <Row>
              <Col>
                <p>Nothing to show :(</p>
              </Col>
            </Row>
          ) : (
            <>
              {suggestions.map(({title, overview}: IMovie, index) => (
                <Row
                  key={index}
                  onClick={() => handleClick(title)}
                >
                </Row>
              ))}
            </>
          )}
        </Card>
      </Card>}
    </Container>
  );
};

export default AutocompleteSearchInput;