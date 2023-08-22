import "./App.css";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Skills />
      <Profile />
      <Projects />
    </div>
  );
}

export default App;
