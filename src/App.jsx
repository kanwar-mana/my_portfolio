import './index.css'
import Header from './header'
import About from './About'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lottie from 'lottie-react';
import Anim from './assets/Anim.json'

import { useEffect } from 'react';


function App() {
    
    useEffect(() => {
        AOS.init({
          duration: 1000, // animation duration (in ms)
          once: true, // whether animation should happen only once
        });
      }, []);
      

  return (
    <>
    <div className="container">
    <Lottie class='anim' animationData={Anim}/>
    <div className="main">
    <Header/>
    <About/>    
    </div>
    </div>
    

    </>
  )
}

export default App
