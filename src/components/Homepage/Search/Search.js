import React from "react";
import { ReactComponent as SearchIcon } from "../../../assets/images/search.svg";
import classes from "./Search.module.css";

function Search() {
  
  console.log("Search");
  const keysWords = [
    "counter",
    "UNDERSHINK UV",
    "RO",
    "STORM UV",
    "Alkaline",
    "RO+UV",
    "RO+UV+Alkaline"
  ];
  const keyList = keysWords.map((el) => <div key={el}>{el}</div>);
  const submitSearch =(event)=>{
      event.preventDefault();
  }
  return (
    <div className={classes.Search}>
      <div className={classes.Title}>Looking for something else?</div>
      <form className={classes.SearchForm} onSubmit={submitSearch}>
        <button type="submit" className={classes.SearchButton}>
          <SearchIcon />
        </button>
        <input
          type="text"
          className={classes.SearchBox}
          placeholder="Search Keyword"
        ></input>
      </form>
      <div className={classes.KeyWordsContainer}>{keyList}</div>
    </div>
  );
}

export default Search;
