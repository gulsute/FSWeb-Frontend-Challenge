import "./App.css";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Skills />
      <Profile />
    </div>
  );
}

export default App;
