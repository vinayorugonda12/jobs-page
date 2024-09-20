import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Jobs from './pages/Jobs';
import Courses from './pages/Courses';
import HomePage from './pages/HomePage';
import './styles/App.css';
import ApplyJob from './pages/ApplyJob'; 
import RegisterCourse from './pages/RegisterCourse'; 



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/apply-job/:id" element={<ApplyJob />} />
        <Route path="/register-course/:id" element={<RegisterCourse />} /> 
      </Routes>
    </Router>
  );
}

export default App;
