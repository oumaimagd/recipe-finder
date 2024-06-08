import React, { useState } from "react";

function SearchBox({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search recipes by title or ingredient..."
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBox;
