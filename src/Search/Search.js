import React, { useContext } from "react";
import { SearchContext } from "../context/context";

const Search = () => {
  const [handleOnChange, movieSearchTitle] = useContext(contextValue);

  return (
    <div>
      <input
        type='search'
        name='movieSearch'
        value={movieSearchTitle}
        onChange={(e) => handleOnChange(e.target.value)}
      />
    </div>
  );
};
