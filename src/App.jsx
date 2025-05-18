import "./index.css";
import Header from "./header";
import About from "./About";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import Anim from "./assets/Anim.json";

import { useEffect } from "react";
import Projects from "./Projects";
import Contact from "./Contact";
import { LanguageProvider } from "./LanguageContext";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (in ms)
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <LanguageProvider>
      <div id="home">
        <Lottie data-aos="zoom-in" class="anim" animationData={Anim} />
        <div className="main">
          <Header />
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
