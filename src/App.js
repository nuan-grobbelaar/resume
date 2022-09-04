import logo from './logo.svg';
import './App.css';

import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { navActions } from './store/nav.js';

import NavBar from './components/ui/NavBar';
import FrontPage from './components/FrontPage';
import Experience from './components/Experience';
import AboutMe from './components/AboutMe';

function App() {
  const dispatch = useDispatch();
  const selected = useSelector(state => state.nav.selected);

  const home = useRef(null);
  const experience = useRef(null);
  const skills = useRef(null);
  const about = useRef(null);

  const map = {home: home, experience: experience, skills: skills, about: about}

  useEffect(() => {
    if (selected && selected !== '') {
      window.scrollTo({
        top: map[selected].current.offsetTop,
        behavior: 'smooth',
      });
    }
  }, [selected]);

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries, observer) => {
  //     const entry = entries[0];
  //     if (entry.isIntersecting) {
  //       dispatch(navActions.setPage('skills'));
  //     }
  //   });
  //   observer.observe(skills.current);
  // }, []);

  return (
    <div className="App">
      <NavBar />
      <section style={{width: '100%'}} ref={home}><FrontPage /></section>
      <section style={{width: '100%'}} ref={experience}><Experience /></section>
      {/* <section style={{width: '100%'}} ref={skills}><Skills /></section> */}
      <section style={{width: '100%'}} ref={about}><AboutMe /></section>
    </div>
  );
}

export default App;
