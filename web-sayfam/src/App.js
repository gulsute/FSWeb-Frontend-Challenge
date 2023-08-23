import "./App.css";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App" class="dark:bg-[#252128]">
      <Header />
      <main>
        <Intro />
        <Skills />
        <Profile />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
