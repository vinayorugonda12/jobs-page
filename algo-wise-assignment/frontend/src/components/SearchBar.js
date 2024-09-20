import React, { useState } from 'react';

const SearchBar = ({ setSearchTerm }) => {
  const [input, setInput] = useState('');

  const handleSearch = (e) => {
    setInput(e.target.value);
    setSearchTerm(e.target.value);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={input}
        onChange={handleSearch}
        placeholder="Search for jobs or courses"
        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
      />
    </div>
  );
};

export default SearchBar;
