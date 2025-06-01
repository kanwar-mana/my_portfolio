import React from "react";
import "./index.css";
import { useLanguage } from "./LanguageContext";

const t = {
  en: {
    projects: "Projects",
    sundown: "Sundown",
    developed: "Developed a ",
    frontend: "frontend application",
    toShow: "to show design capabilities",
    use: "Use the ",
    libraries: "Locomotive and Swiper JavaScript",
    for: "library for smooth scrolling and beautiful swiping effects",
    implement: "Implement animation with combination of CSS & JavaScript",
    next: "Next.js",
    react: "React.js",
    js: "JavaScript.js",
  },
  ur: {
    projects: "منصوبے",
    sundown: "سن ڈاؤن",
    developed: "ایک ",
    frontend: "فرنٹ اینڈ ایپلیکیشن تیار کی",
    toShow: "تاکہ ڈیزائن کی صلاحیتیں ظاہر ہوں",
    use: "استعمال کیا ",
    libraries: "لوکوموٹیو اور سوائپر جاوا اسکرپٹ",
    for: "لائبریری ہموار اسکرولنگ اور خوبصورت سوائپنگ ایفیکٹس کے لیے",
    implement: "سی ایس ایس اور جاوا اسکرپٹ کے امتزاج سے اینیمیشن کا نفاذ",
    next: "نیکسٹ جے ایس",
    react: "ری ایکٹ جے ایس",
    js: "جاوا اسکرپٹ جے ایس",
  },
};

function Projects() {
  const { lang } = useLanguage();
  const tr = t[lang];
  return (
    <>
      <div id="project" className="project">
        <p id="titles">Projects</p>
        {/* 1st project */}
          <div className="projN">
            
              <div className="project-container">
                <div className="pro-text">
                  <p id="pro-nm">Sundown</p>
                  <div className="pro-btn">
                    <button>Next.js</button>
                    <button>React.js</button>
                    <button>JavaScript.js</button>
                    <button>CSS</button>
                  </div>
                  <p id="pro-detail">
                  Developed a 
                    <i>frontend application</i> to show design capabilities
                    <br />
                    Use the 
                    <i> Locomotive and Swiper JavaScript </i> library for smooth scrolling and beautiful swiping effects
                    <br />
                    Implement animation with combination of CSS & JavaScript
                  </p>
                  <div className="git" onClick={()=>window.open("http://sundownss.netlify.app/")}>
                    <button id="git-btn">
                      <i className="fa-brands fa-github"></i>
                    </button>
                    <div id="git-btn-two">
                      <i className="fa-solid fa-up-right-from-square"></i>
                    </div>
                  </div>
                </div>
                <div className="pro-img">
                  <img id="img1" src="sun.webp" alt="" />
                  <img id="img2" src="sunmob.webp" alt="" />
                </div>
              </div>
              
        {/* 2nd project */}
              <div className="project-container">
                <div className="pro-img">
                  <img id="img1" src="ecom1.webp" alt="" />
                  <img id="img2" src="ecom.webp" alt="" />
                </div>
                <div className="pro-text">
                  <p id="pro-nm">Ecommerce</p>
                  <div className="pro-btn">
                    <button>HTML</button>
                    <button>CSS</button>
                    <button>JavaScript</button>
                    
                  </div>
                  <p id="pro-detail">
                  A full-featured Ecommerce application enabling users to register, authenticate, and manage their order product seamlessly. <br />
                  Developed the<i>front-end using HTML and CSS,</i> creating a responsive and intuitive user interface
                    <br />
                    Implemented user authentication and authorization using 
                    <i>Appwrite </i> , ensuring secure access to the application. 
                    <br />
                    Managed the backend entirely with Appwrite, handling data storage, retrieval, and user management efficiently. 
                  </p>
                  <div className="git" onClick={()=>window.open("https://jakum.netlify.app/","_blank")}>
                    <button id="git-btn">
                      <i className="fa-brands fa-github"></i>
                    </button>
                    <div id="git-btn-two">
                      <i className="fa-solid fa-up-right-from-square"></i>
                    </div>
                  </div>
                </div>
              </div>
              {/* 3rd project */}
              <div className="project-container">
                <div className="pro-text">
                  <p id="pro-nm">Portfolio</p>
                  <div className="pro-btn">
                    <button>HTML</button>
                    <button>CSS</button>
                    <button>JavaScript</button>
                    <button>React.js</button>
                  </div>
                  <p id="pro-detail">
                  Developed a 
                    <i>portfolio website</i> to showcase my skills and projects
                    <br /> 
                    Implemented a responsive and intuitive user interface using 
                    <i> HTML and CSS </i>
                    <br />
                    Implemented a smooth and responsive navigation menu using 
                    <i> JavaScript </i>
                  </p>
                  <div className="git" onClick={()=>window.open("https://kanwar-mana.github.io/my_portfolio/","_blank")}>
                    <button id="git-btn">
                      <i className="fa-brands fa-github"></i>
                    </button>
                    <div id="git-btn-two">
                      <i className="fa-solid fa-up-right-from-square"></i>
                    </div>
                  </div>
                </div>
                <div className="pro-img">
                  <img id="img1" src="portfolio.webp" alt="" />
                  <img id="img2" src="portfolio1.webp" alt="" />
                </div>
              </div>
          </div>
        
      </div>
    </>
  );
}

export default Projects;
