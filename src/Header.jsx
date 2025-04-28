import './index.css'
import GradientText from './assets/GradientText';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

function Header() {
      useEffect(() => {
          AOS.init({
            duration: 15000, // animation duration (in ms)
            once: true, // whether animation should happen only once
          });
        }, []);

  return (
    <>
      <div class="header">
        <img data-aos='fade-up' src="./logo.png" alt="" />
        <div data-aos='fade-up' class="nav-bar">
          <a href="#home">HOME</a>
          <a href="#home">ABOUT</a>
          <a href="#home">PROJECT</a>
          <a href="#home">CONTACT</a>
        </div>

        <div data-aos='fade-up' class="mode">
          <p>Eng <br/>Urd</p>
          <label for="switch" class="toggle">
            <input type="checkbox" class="input" id="switch" />
            <div class="icon icon--moon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="25"
                height="25"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
        
            <div class="icon icon--sun">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="25"
                height="25"
              >
                <path
                  d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
                ></path>
              </svg>
            </div>
          </label>
        </div>
      </div>
      <div class="header-two">

        <div class="head-text-one">
            <div><GradientText children={'Front-end'} className='p'/></div>
          <div class="two-btn">
            <button id="proj"><i>Projects</i></button>
            <button id="proj-1"><i class="fa-solid fa-arrow-right"></i></button>
          </div>
         </div>
      </div>
      <div class="header-text-two">
        <p id="p-two-one">My goal is to<i> write maintable, clean</i> <br />and <i>understandable code</i> to process<br /> development was enjoyable</p>
        <div><GradientText children={'Developer'} className='p-two-two'/></div>
      </div>

       <div class="social-button">
        <div class="social-one">
          <a href=""><i class="fa-brands fa-github"></i>&nbsp;&nbsp;&nbsp;Github</a>
          <a href=""><i class="fa-brands fa-linkedin-in"></i>&nbsp;&nbsp;&nbsp;Linkedin</a>
        </div>
        <div class="social-two">
          <a href=""><i class="fa-brands fa-telegram"></i>&nbsp;&nbsp;&nbsp;Telegram</a>
        </div>
        <div class="social-three">
          <a href=""><i class="fa-brands fa-facebook-f"></i>&nbsp;&nbsp;&nbsp;Facebook</a>
          <a href=""><i class="fa-brands fa-instagram"></i>&nbsp;&nbsp;&nbsp;Instagram</a>
        </div>
       </div>
    </>
  );
}

export default Header
