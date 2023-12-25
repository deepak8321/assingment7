import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import "./Search.css"; // Import your CSS file

const Search = () => {
  const [trendSuggestions, setTrendSuggestions] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchTrendSuggestions = () => {
    // Fetch trend suggestions using faker API
    const suggestions = Array.from({ length: 5 }, () => faker.lorem.word());
    setTrendSuggestions(suggestions);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredSuggestions = trendSuggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="search-container">
      <button className="search-button" onClick={fetchTrendSuggestions}>
        Search
      </button>
      <input
        type="text"
        placeholder="Filter suggestions"
        value={filter}
        onChange={handleFilterChange}
        className="filter-input"
      />
      <div className="suggestion-container">
        {filteredSuggestions.map((suggestion, index) => (
          <div key={index} className="suggestion-item">
            {suggestion}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
