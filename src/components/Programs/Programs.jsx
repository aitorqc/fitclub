import React from 'react'

import rightArrow from '../../assets/rightArrow.png';

import './Programs.css';

import { programsData } from '../../data/programsData';

export default function Programs() {
  return (
    <div className='programs' id='programs'>
      <div className="programs-header">
        <span className='stroke-text'>Explore our</span>
        <span>Programs</span>
        <span className='stroke-text'>to shape you</span>
      </div>

      <div className="program-categories">
        {
          programsData.map((program, i) => (
            <div key={'program'+i} className="category">
              {program.image}
              <span>{program.heading}</span>
              <span>{program.details}</span>
              <div className="join-now"><span>Join Now</span><img src={rightArrow} alt="RightArrow"/></div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
