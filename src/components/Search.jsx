import React, { useState, useCallback } from 'react';
import debounce from 'lodash/debounce';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Debounce the search to avoid too many updates
  const debouncedSearch = useCallback(
    debounce((term) => {
      onSearch(term);
    }, 300),
    [onSearch]
  );

  const handleChange = (e) => {
    const term = String(e.target.value);
    setSearchTerm(term);
    debouncedSearch(term);
  };

  return (
    <div className="m-4 p-4">
      <div className="flex flex-row -mx-2">
        <input
          type="search"
          name="search"
          id="search"
          className="appearance-none shadow rounded-md ring-1 ring-green-400 leading-5 sm:text-sm border border-transparent py-2 m-1 placeholder:text-slate-400 pl-12 pr-3 block w-full text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
          value={searchTerm}
          onChange={handleChange}
          placeholder="ابحث عن السورة..."
          dir="rtl"
        />
      </div>
    </div>
  );
};

export default Search;
