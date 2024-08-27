import React, { useState, useEffect } from 'react';
import { useGlobalContext } from './context';

const Search = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

  useEffect(() => {
    setLocalSearchTerm(searchTerm);
  }, [searchTerm]);

  const handleChange = (e) => {
    const term = e.target.value;
    setLocalSearchTerm(term);
    setSearchTerm(term);
  };

  return (
    <div className="m-4 p-4">
      <div className="flex flex-row -mx-2">
        <input
          type="search"
          name="search"
          id="search"
          className="appearance-none shadow rounded-md ring-1 ring-green-400 leading-5 sm:text-sm border border-transparent py-2 m-1 placeholder:text-slate-400 pl-12 pr-3 block w-full text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
          value={localSearchTerm}
          onChange={handleChange}
          placeholder="ابحث عن السورة..."
          dir="rtl"
        />
      </div>
    </div>
  );
};

export default Search;
