import React, { useState } from "react";
import { connect } from "react-redux";
import { stocklistActions } from "../../store/stocklist/actions";
import "./style.css";

const mapDispatchToProps = { addNewStock: stocklistActions.addNewStock };

const SearchToAdd = ({ addNewStock }) => {
  const [term, setTerm] = useState("");

  const handleSearchToAdd = () => {
    const textTrimmed = term.trim();
    if (textTrimmed.length === 0) return;
    addNewStock(textTrimmed);
    setTerm("");
  };

  return (
    <div>
      <input
        className="search-bar"
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button className="btn-add" onClick={handleSearchToAdd}>
        Add
      </button>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(SearchToAdd);
