const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const jobsRoutes = require('./routes/jobs');

dotenv.config();
app.use(cors());
app.use(express.json());

app.use('/api/jobs', jobsRoutes); 

const PORT = process.env.PORT || 5000;

// Import Routes

const coursesRoutes = require('./routes/courses');

// Use Routes

app.use('/api/courses', coursesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
