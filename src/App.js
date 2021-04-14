import { useState } from "react";
import { SearchContext, MovieContext } from "./context";
import Search from "./Search/Search";
import "./App.css";

let OMDB_API = "e739e00a";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [movieArray, setMovieArray] = useState([]);

  async function handleOnChange(value) {
    setSearchValue(value);

    let response = await fetch(
      `http://omdbapi.com/?apikey=${OMDB_API}&s=${searchValue}`
    );

    let data = await response.json();

    setMovieArray(data.Search || []);
  }

  let searchContextValueObj = {
    movieSearchTitle: searchValue,
    handleOnChange,
  };

  return (
    <div style={{ textAlign: "center" }}>
      <searchContextValueObj.Provider value={searchContextValueObj}>
        <Search />
      </searchContextValueObj.Provider>
    </div>
  );
}

export default App;
