import React, { useState } from 'react';
import JobList from '../components/JobList';
import CourseList from '../components/CourseList';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <SearchBar setSearchTerm={setSearchTerm} />
      <JobList searchTerm={searchTerm} />
      <CourseList searchTerm={searchTerm} />
    </div>
  );
};

export default HomePage;
