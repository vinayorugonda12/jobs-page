const courses = [
  { id: 1, name: 'React for Beginners', instructor: 'Jenny lectures', duration: '6 weeks' },
  { id: 2, name: 'Node.js Masterclass', instructor: 'FreeCodeCamp', duration: '8 weeks' },
  { id: 3, name: 'Data Science with Python', instructor: 'Nawin Reddy', duration: '12 weeks' },
  { id: 4, name: 'UI/UX Design Bootcamp', instructor: 'KG reddy', duration: '5 weeks' },
  { id: 5, name: 'DevOps Fundamentals', instructor: 'Geeksforgeeeks', duration: '10 weeks' },
  { id: 6, name: 'Cloud Computing with AWS', instructor: 'kunal', duration: '9 weeks' },
  { id: 7, name: 'Java + DSA', instructor: 'Kunal Kushwaha', duration: '9 weeks' }
];

const getCourses = (req, res) => {
  res.json(courses);
};

module.exports = { getCourses };
