import { useEffect, useRef } from 'react'
import './intro.scss'
import { init } from 'ityped';

// 1:16:23

const Intro = () => {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Designer"]
    });
  }, []);

  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="./assets/man.png" alt="profile" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Muzaffar Khan</h1>
          <h3>Web <span ref={textRef}></span></h3>
        </div>
        <a href="#services">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}

export default Intro