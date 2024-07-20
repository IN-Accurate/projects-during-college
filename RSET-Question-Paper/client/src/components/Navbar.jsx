import React, { useState } from 'react';
import { useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchSuggestions({ suggestions, onSuggestionClick }) {

  let filteredSuggestions = [];
  if (searchText.length > 0)
    filteredSuggestions = suggestions.filter((suggestion) =>
      suggestion.name.toLowerCase().startsWith(searchText.toLowerCase())
    );

  if (suggestions.length === 0) return null;

  return (
    <div className='search-focus'>
      <ul className='search-suggestions'>
        {suggestions.map((suggestion) => (
          <li
            className='searchlist'
            key={suggestion._id}
            onClick={() => onSuggestionClick(suggestion._id)}
          >
            {suggestion.name}
            {suggestion.featured && (
              <span className='featured-suggestion'>Featured</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Navbar() {
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    // Fetch and set suggestions based on the searchText
    // Replace this with your actual suggestion fetching logic
  };

  const searchListClick = (param) => {
    // Handle when a suggestion is clicked
    // You can navigate or perform other actions here
  };

  return (
    <nav className='bg-quaternary-color p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <div className='text-white font-bold text-xl'>Your Logo</div>

        {/* Search Bar */}
        <div className='flex items-center space-x-4'>
          <div className='flex items-center bg-white rounded-full px-4 py-2 focus:outline-none focus:ring focus:border-blue-300'>
            <input
              type='text'
              placeholder='Search...'
              value={searchText}
              onChange={handleSearchChange}
              className='searchInput w-full focus:outline-none'
            />
            <FaSearch className='text-gray-500' /> {/* Use the search icon */}
          </div>
        </div>

        {/* Avatar */}
        <div className='flex items-center'>
          <img
            src='https://via.placeholder.com/40'
            alt='User Avatar'
            className='w-8 h-8 rounded-full'
          />
          <span className='text-white ml-2'>Username</span>
        </div>
      </div>

      <SearchSuggestions
        suggestions={suggestions}
        onSuggestionClick={searchListClick}
      />
    </nav>
  );
}

export default Navbar;
