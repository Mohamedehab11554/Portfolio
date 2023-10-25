import './App.scss';
import particles from './utlis/particl';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Routes, Route, useLocation } from 'react-router-dom';
import Portfolio from './containers/portfolio';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Contact from './containers/contact';
import Home from './containers/home';
import About from './containers/about';
import Navbar from './components/navBar';

function App() {
  const location = useLocation();
  console.log(location);


  const handleInit = async (main) => {
    await loadFull(main)
  }

  const renderParticleJsInHomepage = location.pathname === "/";

  return (
    <div className="App">
      {/* particles js */}

      {
        renderParticleJsInHomepage &&
        <Particles id='Particles' options={particles} init={handleInit} />

      }




      {/* navbar */}
      <Navbar />

      {/* main page content */}
      <div className='App__main-page-content'>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </div>


    </div>
  );
}

export default App;
