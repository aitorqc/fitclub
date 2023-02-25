import React from 'react'
import { motion } from 'framer-motion';

import Header from '../Header/Header';

import './Hero.css';

import heart from '../../assets/heart.png';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import calories from '../../assets/calories.png';

export default function Hero() {

  const transition = { type: 'spring', duration: 3 }

  return (
    <div className='hero'>

      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        <div className="the-best-ad">
          <motion.div
            initial={{ left: '200px' }}
            whileInView={{ left: '8px' }}
            transition={{ ...transition, type: 'tween' }}></motion.div>
          <span>the best fitness club in the town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and live up your life to fullest
            </span>
          </div>
        </div>

        <div className="figures">
          <div><span>140</span><span>expert coachs</span></div>
          <div><span>+978</span><span>memebers joined</span></div>
          <div><span>+50</span><span>fitness programs</span></div>
        </div>

        <div className="hero-buttons">
          <div className="btn">Get Started</div>
          <div className="btn">Learn More</div>
        </div>
      </div>
      <div className="right-h">
        <button className='btn'>Join Now</button>

        <motion.div
          initial={{ right: '-1rem' }}
          whileInView={{ right: '4rem' }}
          transition={{ transition }}
          className="heart-rate">
          <img src={heart} alt="heart" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        <img src={hero_image} alt="hero" className='hero-image' />
        <motion.img
          initial={{ right: 'llrem' }}
          whileInView={{ right: '22rem' }}
          transition={transition}
          src={hero_image_back} alt="hero back" className='hero-image-back' />

        <motion.div
          initial={{ right: '37rem' }}
          whileInView={{ right: '28rem' }}
          transition={{ transition }}
          className="calories">
          <img src={calories} alt="calories" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
