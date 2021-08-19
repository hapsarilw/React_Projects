import React, { useState, useEffect } from "react";
import PokemonList from "./PokemonList";
import Pagination from "./Pagination";
import axios from "axios";

function App() {
  // Called function using useState()
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  // everytime currentPage changes run url
  // so user can access different page
  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setPrevPageUrl(res.data.previous);
        setNextPageUrl(res.data.next);
        setPokemon(res.data.results.map((p) => p.name));
      });
    // Called everytime useEffect load again
    // Cancel request everytime user make new one if user has old request
    // Application never load all data
    return () => {
      cancel();
    };
  }, [currentPageUrl]);

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  if (loading) {
    return "Loading";
  }

  return (
    <>
      <PokemonList pokemonList={pokemon} />
      <Pagination        
        gotoNextPage={ nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={ prevPageUrl ? gotoPrevPage : null}
      />
    </>
  );
}

export default App;
