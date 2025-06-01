import React from "react";
import "./index.css";
import { useLanguage } from "./LanguageContext";
import Lottie from "lottie-react";
import AnimBackground from "./assets/AnimBackground.json";
const t = {
  en: {
    about: ".../About...",
    hello: "Hello I'm Kanwer. I'm ",
    junior: "Junior Web Developer",
    more: "More than ",
    years: "3 year",
    experience: "of experience",
    download: "Download My Resume",
    tech: "Some of my favorite ",
    tech2: "technology,",
    tech3: "topics and tools",
    tech4: "that i used",
    frontend: "Front-end",
    styles: "Styles",
    backend: "Back-end",
    devops: "DevOps",
    work: "Work",
    workList: [
      {
        period: "2022-",
        duration: "1 year 2 month",
        company: "ITHUB",
        title: "Front-end Developer | React Native",
      },
      {
        period: "2022-2023",
        company: "VK .Inc",
        title: "Front-end Developer | Native",
      },
      {
        period: "2022-2024",
        company: "ITHUB",
        title: "Backend Developer | React Native",
      },
      {
        period: "2024-2025",
        company: "Colmia",
        title: "Full-Stack Developer | React & Python",
      },
    ],
  },
  ur: {
    about: ".../تعارف...",
    hello: "ہیلو! میں کنور ہوں۔ میں ",
    junior: "جونیئر ویب ڈویلپر",
    more: "زیادہ سے زیادہ ",
    years: "3 سال",
    experience: "کا تجربہ",
    download: "میرا ریزیومے ڈاؤن لوڈ کریں",
    tech: "میری پسندیدہ ",
    tech2: "ٹیکنالوجی،",
    tech3: "موضوعات اور ٹولز",
    tech4: "جو میں نے استعمال کیے",
    frontend: "فرنٹ اینڈ",
    styles: "اسٹائلز",
    backend: "بیک اینڈ",
    devops: "ڈیواپس",
    work: "کام",
    workList: [
      {
        period: "2022-",
        duration: "1 سال 2 ماہ",
        company: "آئی تھب",
        title: "فرنٹ اینڈ ڈویلپر | ری ایکٹ نیٹو",
      },
      {
        period: "2022-2023",
        company: "وی کے انک",
        title: "فرنٹ اینڈ ڈویلپر | نیٹو",
      },
      {
        period: "2022-2024",
        company: "آئی تھب",
        title: "بیک اینڈ ڈویلپر | ری ایکٹ نیٹو",
      },
      {
        period: "2024-2025",
        company: "کولمیا",
        title: "فل اسٹیک ڈویلپر | ری ایکٹ اور پائتھن",
      },
    ],
  },
};

function About() {
  const { lang } = useLanguage();
  const tr = t[lang];
  return (
    <>
      <div id="about" className="about">
        <div className="about-text">
          <p>{tr.about}</p>
          <p>
            {tr.hello}
            <i>{tr.junior}</i> . <br />
            {tr.more}
            <i>{tr.years}</i> {tr.experience} <br />
            <a id="btn" href="resume.pdf" download onChange={(e)=>e.preventDefault}>
              <i className="bi bi-cloud-arrow-down-fill"></i>{tr.download}
            </a>
          </p>
        </div>
        <div className="about-skills">
          <div className="skills">
            <div data-aos="fade-up" className="skill-front">
              <p id="heading">
                {tr.frontend} <br />
              </p>
              <button id="skill-btn">HTML</button>
              <button id="skill-btn">CSS</button>
              <button id="skill-btn">React</button>
              <button id="skill-btn">JavaScript</button>
              <button id="skill-btn">Tailwind CSS</button>
            </div>
            <div data-aos="fade-up" className="skill-sec">
              <div className="skill-sec-one">
                <p id="heading">
                  {tr.styles} <br />
                </p>
                <button id="skill-btn">CSS</button>
                <button id="skill-btn">Tailwind CSS</button>
                <button id="skill-btn">BootStrap</button>
                <button id="skill-btn">Swiper JS</button>

              </div>
              <div className="git">
                <button id="git-btn" onClick={()=>window.open("https://github.com/kanwar-mana", "_blank")}>
                  <i className="fa-brands fa-github"></i>
                </button>
                <div id="git-btn-two" onClick={()=>window.open("https://github.com/kanwar-mana", "_blank")}>
                  <i className="fa-solid fa-up-right-from-square"></i>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" className="skill-front">
              <p id="heading">
                {tr.backend} <br />
              </p>
              <button id="skill-btn">Node.js</button>
              <button id="skill-btn">JavaScript</button>
              <button id="skill-btn">Python</button>
              <button id="skill-btn">MongoDb</button>
              <button id="skill-btn">Express</button>
            </div>
            <div data-aos="fade-up" className="devop-text">
              <p>
                {tr.tech}
                <i>
                  {tr.tech2},<br />
                  {tr.tech3}
                </i>
                {tr.tech4}
              </p>
              <div className="dev-ops">
                <p id="heading">
                  {tr.devops} <br />
                </p>
                <button id="skill-btn">React</button>
                <button id="skill-btn">React</button>
                <button id="skill-btn">React</button>
                <button id="skill-btn">React</button>
                <button id="skill-btn">React</button>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" className="profile">
            <img src="profile-pic.png" alt="" />
            <div id="back-design"></div>
          </div>
        </div>
        <div className="work">
          <p id="work-heading">{tr.work}</p>
          <div className="work-detail">
            {tr.workList.map((item, idx) => (
              <div className="n-p" key={idx}>
                <p>
                  {item.period}
                  {item.duration && <><br />{item.duration}</>}
                </p>
                <p>{item.company}</p>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
