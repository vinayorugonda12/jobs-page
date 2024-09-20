import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const CourseList = ({ searchTerm }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/courses')
      .then(response => setCourses(response.data))
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Typography variant="h4" gutterBottom>Trending Courses</Typography>
      <Grid container spacing={3}>
        {filteredCourses.map(course => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Card>
              <CardContent>
                <Typography variant="h5">{course.name}</Typography>
                <Typography color="textSecondary">Instructor: {course.instructor}</Typography>
                <Button
                  component={Link}
                  to={`/register-course/${course.id}`}  // Link to the register page
                  variant="contained"
                  color="primary"
                >
                  Register
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CourseList;
