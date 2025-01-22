import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage.tsx/HomePage';
import NavBar from './components/NavBar/NavBar';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import EducationPage from './components/Education/Education';

function App() {
  return (
    <>
     <Router>
     <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/education" element={<EducationPage />} />


      </Routes>
    </Router>
    </>
  );
}

export default App;
