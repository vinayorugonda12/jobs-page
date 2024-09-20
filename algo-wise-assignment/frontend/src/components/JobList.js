import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import Pagination from './Pagination';
import { Button } from '@mui/material';



const JobList = ({ searchTerm }) => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const jobsPerPage = 7;

  useEffect(() => {
    axios.get('http://localhost:5000/api/jobs')
      .then(response => setJobs(response.data))
      .catch(error => console.error('Error fetching jobs:', error));
  }, []);

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastJob = page * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  return (
    <div>
      <Typography variant="h4" gutterBottom>Job Openings</Typography>
      <Grid container spacing={3}>
        {currentJobs.map(job => (
          <Grid item xs={12} sm={6} md={4} key={job.id}>
            <Card>
              <CardContent>
                <Typography variant="h5">{job.title}</Typography>
                <Typography color="textSecondary">{job.location}</Typography>
                <Button
                  component={Link}
                  to={`/apply-job/${job.id}`}  // Navigating to the Apply page
                  variant="contained"
                  color="primary"
                >
                  Apply
                </Button>
               
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={Math.ceil(filteredJobs.length / jobsPerPage)}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default JobList;
