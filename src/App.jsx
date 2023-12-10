import { useContext } from 'react';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Intro from './Components/Intro/Intro';
import ProjectList from './Components/ProjectList/ProjectList';
import Toggle from './Components/Toggle/Toggle';
import { ThemeContext } from './context';


function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="App" style={{ backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white" }}>
      <section>
      <Toggle />
      </section>
      <section>
      <Intro />
      </section>
      <About />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default App;
