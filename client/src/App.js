import React from 'react';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import TrialForm from './components/TrialForm';
import Courses from './components/Courses';
import Footer from './components/Footer';


const App = (props) => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <TrialForm />
      <Courses />
      <Footer />
    </div>
  );
}

export default App;