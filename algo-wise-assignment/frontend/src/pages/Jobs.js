import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/jobs')
      .then(response => setJobs(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Available Jobs</h2>
      <ul>
        {jobs.map(job => <li key={job.id}>{job.title}</li>)}
      </ul>
    </div>
  );
};

export default Jobs;
