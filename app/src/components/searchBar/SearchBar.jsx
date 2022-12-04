import React from "react";
import { setQuery } from "../../features/shop/shopSlice";
import { useDispatch } from "react-redux";
import style from "./searchBar.module.scss";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <div className={`${style.container} ${style.display}`}>
      <input
        onChange={({ target: { value } }) => dispatch(setQuery(value))}
        required
      />
      <span>
        <FontAwesomeIcon icon={faSearch} /> Search
      </span>
    </div>
  );
};

export default SearchBar;
