import React from 'react';
import styles from "./search.module.scss";

// Search bar component to input character names and reset page number
const Search = ({ setSearch, updatePageNumber }) => {
  // Prevent default form submit behavior on button click
  let searchBtn = (e) => {
    e.preventDefault();
  };
  return (
    <form
      className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
    >
      <input
        onChange={(e) => {
          updatePageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Search for characters"
        className={styles.input}
        type="text"
      />
      <button
        onClick={searchBtn}
        className={`${styles.btn} btn btn-primary fs-5`}
      >
        Search
      </button>
    </form>
  );
};

export default Search;