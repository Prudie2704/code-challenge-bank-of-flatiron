import React, { useState } from "react";

export default function SearchForm({ onSearching }) {
  const [search, setSearch] = useState("");
 
  function handleChange(event) {
    setSearch(event.target.value);
    onSearching(search);
  }

  return (
    <form>
      <input value={search} type="text" placeholder="Search" onChange={handleChange} />
      <button>
        Search
      </button>
    </form>
  );
}