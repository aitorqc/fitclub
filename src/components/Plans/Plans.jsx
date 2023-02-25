import React from 'react'

import './Plans.css';

import { plansData } from '../../data/plansData';

import whiteTick from '../../assets/whiteTick.png';

export default function Plans() {
    return (
        <div className='plans-container'>
            <div className='programs-header' style={{ gap: "2rem" }}>
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>NOW WITH US</span>
            </div>

            <div className="plans">
                {
                    plansData.map((plan, i) => (
                        <div key={'plan_'+i} className='plan'>
                            {plan.icon}
                            <span>{plan.name}</span>
                            <span>$ {plan.price}</span>

                            <div className='features'>
                                {plan.features.map((feature, i) => (
                                    <div key={'feature'+i} className='feature'>
                                        <img src={whiteTick} alt="white tick" />
                                        <span key={i}>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div><span>See more benefits -></span></div>
                            <button className='btn'>Join Now</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
