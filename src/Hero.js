import React from 'react';
import './Hero.css';
import {ReactComponent as HeroTitle} from './svg/HeroTitle.svg';



function Hero() {


    return (
        <div className="hero">
        <div class="centered">
        <div class="stranger-things">
        <hr/><div class="eighties line1">IAN JORDAN</div><hr class="bottom-line"/><hr class="bottom-line right"/><div class="eighties line2">FULLSTACK DEV</div>
          </div>
          </div>
          <HeroTitle />
          <div className="box">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="box2">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
    )
}

export default Hero