import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/courses')
      .then(response => setCourses(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Trending Courses</h2>
      <ul>
        {courses.map(course => <li key={course.id}>{course.name}</li>)}
      </ul>
    </div>
  );
};

export default Courses;
