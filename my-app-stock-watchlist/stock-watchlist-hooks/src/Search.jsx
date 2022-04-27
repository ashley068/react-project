import React, { useState } from "react";
import "./style.css";

const Search = (props) => {
  const [term, setTerm] = useState("");

  return (
    <div>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className="search-bar"
      />
      <button onClick={() => props.addNewStock(term)} className="btn-add">
        Add
      </button>
    </div>
  );
};

export default Search;
