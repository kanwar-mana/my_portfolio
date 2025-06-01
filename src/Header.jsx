import "./index.css";
import GradientText from "./assets/GradientText";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext";

const translations = {
  en: {
    nav: ["HOME", "ABOUT", "PROJECT", "CONTACT"],
    lang: "Eng",
    langAlt: "Urd",
    frontend: "Frontend",
    projects: "Projects",
    developer: "Developer",
    goal: "Student of",
    goal1: "Computer Science",
    goal2: "at ",
    goal3: "UET Taxila",
    goal4: "to process development was enjoyable",
    github: "Github",
    linkedin: "Linkedin",
    telegram: "Telegram",
    facebook: "Facebook",
    instagram: "Instagram",
  },
  ur: {
    nav: ["ہوم", "تعارف", "منصوبے", "رابطہ"],
    lang: "اردو",
    langAlt: "انگریزی",
    frontend: "فرنٹ اینڈ",
    projects: "منصوبے",
    developer: "ڈویلپر",
    goal: "میرا مقصد ہے ",
    goal1: "قابلِ فہم، صاف",
    goal2: "اور ",
    goal3: "سمجھنے کے قابل کوڈ لکھنا",
    goal4: "تاکہ ترقی کا عمل خوشگوار ہو",
    github: "گِٹ ہب",
    linkedin: "لنکڈ اِن",
    telegram: "ٹیلیگرام",
    facebook: "فیس بک",
    instagram: "انسٹاگرام",
  },
};

function Header() {
  const [isLightMode, setIsLightMode] = useState(false);
  const { lang, toggleLang } = useLanguage();
  const t = translations[lang];

  useEffect(() => {
    AOS.init({
      duration: 15000, // animation duration (in ms)
      once: true, // whether animation should happen only once
    });
  }, []);

  useEffect(() => {
    document.body.classList.toggle("light-mode", isLightMode);
  }, [isLightMode]);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId.toLowerCase());
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <div className="header">
        <img data-aos="fade-up" src="logo.webp" alt="" />
        <div data-aos="fade-up" className="nav-bar">
          {t.nav.map((item, i) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleSmoothScroll(e, item)}
              className="smooth-scroll"
            >
              {item}
            </a>
          ))}
        </div>

        <div data-aos="fade-up" className="mode">
          <p onClick={toggleLang} style={{ cursor: "pointer" }}>
            {t.lang} <br />
            {t.langAlt}
          </p>
          <label htmlFor="switch" className="toggle">
            <input
              type="checkbox"
              className="input"
              id="switch"
              checked={isLightMode}
              onChange={() => setIsLightMode((m) => !m)}
            />
            <div className="icon icon--moon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="25"
                height="25"
              >
                <path
                  fillRule="evenodd"
                  d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>

            <div className="icon icon--sun">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="25"
                height="25"
              >
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
              </svg>
            </div>
          </label>
        </div>
      </div>
      <div className="header-two">
        <div className="head-text-one">
          <div>
            <GradientText children={t.frontend} className="p" />
          </div>
          <div className="two-btn">
            <button id="proj">
              <i>{t.projects}</i>
            </button>
            <button id="proj-1">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="header-text-two">
        <p id="p-two-one">
          {t.goal}
          <i> {t.goal1}</i> <br />
          {t.goal2}
          <i>{t.goal3}</i>
          <br /> {t.goal4}
        </p>
        <div>
          <GradientText children={t.developer} className="p-two-two" />
        </div>
      </div>

      <div className="social-button">
        <div className="social-one">
          <a href="https://github.com/kanwar-mana">
            <i className="fa-brands fa-github"></i>&nbsp;&nbsp;&nbsp;{t.github}
          </a>
          <a href="https://www.linkedin.com/in/kanwer-abdull-rahman/">
            <i className="fa-brands fa-linkedin-in"></i>&nbsp;&nbsp;&nbsp;{t.linkedin}
          </a>
        </div>
        <div className="social-two">
          <a href="https://t.me/Kanwer7172">
            <i className="fa-brands fa-telegram"></i>&nbsp;&nbsp;&nbsp;{t.telegram}
          </a>
        </div>
        <div className="social-three">
          <a href="https://www.facebook.com/kanwar.abdullrahman.9">
            <i className="fa-brands fa-facebook-f"></i>&nbsp;&nbsp;&nbsp;{t.facebook}
          </a>
          <a href="https://www.instagram.com/mana.ji_/">
            <i className="fa-brands fa-instagram"></i>&nbsp;&nbsp;&nbsp;{t.instagram}
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
