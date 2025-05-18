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
      <div className="project">
        <p id="titles">{tr.projects}</p>
        {[1, 2, 3].map((_, idx) => (
          <div className="projN" key={idx}>
            {idx % 2 === 0 ? (
              <>
                <div className="pro-text">
                  <p id="pro-nm">{tr.sundown}</p>
                  <div className="pro-btn">
                    <button>{tr.next}</button>
                    <button>{tr.next}</button>
                    <button>{tr.react}</button>
                    <button>{tr.js}</button>
                  </div>
                  <p id="pro-detail">
                    {tr.developed}
                    <i>{tr.frontend}</i> {tr.toShow}
                    <br />
                    {tr.use}
                    <i> {tr.libraries} </i> {tr.for}
                    <br />
                    {tr.implement}
                  </p>
                  <div className="git">
                    <button id="git-btn">
                      <i className="fa-brands fa-github"></i>
                    </button>
                    <div id="git-btn-two">
                      <i className="fa-solid fa-up-right-from-square"></i>
                    </div>
                  </div>
                </div>
                <div className="pro-img">
                  <img id="img1" src="/sun.png" alt="" />
                  <img id="img2" src="/sunmob.png" alt="" />
                </div>
              </>
            ) : (
              <>
                <div className="pro-img">
                  <img id="img1" src="/sun.png" alt="" />
                  <img id="img2" src="/sunmob.png" alt="" />
                </div>
                <div className="pro-text">
                  <p id="pro-nm">{tr.sundown}</p>
                  <div className="pro-btn">
                    <button>{tr.next}</button>
                    <button>{tr.next}</button>
                    <button>{tr.react}</button>
                    <button>{tr.js}</button>
                  </div>
                  <p id="pro-detail">
                    {tr.developed}
                    <i>{tr.frontend}</i> {tr.toShow}
                    <br />
                    {tr.use}
                    <i> {tr.libraries} </i> {tr.for}
                    <br />
                    {tr.implement}
                  </p>
                  <div className="git">
                    <button id="git-btn">
                      <i className="fa-brands fa-github"></i>
                    </button>
                    <div id="git-btn-two">
                      <i className="fa-solid fa-up-right-from-square"></i>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
