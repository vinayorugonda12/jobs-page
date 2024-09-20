// controllers/jobsController.js

const jobs = [
  { id: 1, title: 'Frontend Developer', location: 'Hyderabad', category: 'Frontend', date: '2024-09-01', applyLink: 'https://g.co/kgs/XoKqxVg' },
  { id: 2, title: 'Backend Developer', location: 'Bengaluru', category: 'Backend', date: '2024-08-15', applyLink: 'https://example.com/apply/backend' },
  { id: 3, title: 'Full Stack Developer', location: 'Remote', category: 'Full Stack', date: '2024-08-20', applyLink: 'https://example.com/apply/fullstack' },
  { id: 4, title: 'Mobile Developer', location: 'Noida', category: 'Mobile', date: '2024-08-25', applyLink: 'https://example.com/apply/mobile' },
  { id: 5, title: 'UI/UX Designer', location: '', category: 'Design', date: '2024-09-05', applyLink: 'https://example.com/apply/uiux' },
  { id: 6, title: 'DevOps Engineer', location: 'Paris', category: 'DevOps', date: '2024-08-30', applyLink: 'https://example.com/apply/devops' },
];

// Function to get all jobs
const getJobs = (req, res) => {
  res.json(jobs);
};

// Function to get job by ID
// const getJobById = (req, res) => {
//   const jobId = parseInt(req.params.id);  // Get the job ID from the request parameters
//   const job = jobs.find(job => job.id === jobId);  // Find the job with the matching ID
//   if (!job) {
//     return res.status(404).json({ message: 'Job not found' });  // If job is not found, return 404
//   }
//   res.json(job);  // Return the job data
// };

// Export the functions
module.exports = { getJobs};
