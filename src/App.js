import './App.css';
import Navs from './components/navBars/Navs';
import About from './components/navBars/About';
import Services from './components/navBars/Services';
import Projects from './components/navBars/Projects';
import Contact  from './components/navBars/Contact';
import Experience from './components/navBars/Experiance';
import Exp from "./components/navBars/Expe";

function App() {
  return (
    <div className="App">
      <Navs />
      <About/>
      <Services/>
      <Projects/>
      {/* <Services/> */}
      <Experience/>
      {/* < Exp /> */}
      <Contact/>
      
     
    </div>
  );
}

export default App;
