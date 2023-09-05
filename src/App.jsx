import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Footer from "./pages/Connect";

export default function App() {
  return (
    <div className="body">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
