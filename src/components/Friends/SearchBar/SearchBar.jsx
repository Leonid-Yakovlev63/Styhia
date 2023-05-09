import React, { useState } from 'react';
import s from './SearchBar.module.css';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form className={s['search-form']} onSubmit={handleFormSubmit}>

      <input
        className={s['search-input']}
        type="text"
        id="search"
        placeholder="Поиск"
        value={query}
        onChange={handleInputChange}
      />
      {/*<button className={s['search-button']} type="submit">
        Search
      </button>*/}
    </form>
  );
}

export default SearchBar;
