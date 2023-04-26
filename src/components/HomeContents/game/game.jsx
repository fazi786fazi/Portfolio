import React from 'react';

import './game.scss'
import TargetArea from './targetArea';

const GameArea = () => {
  return (
    <div  className='game-area-container'>
      <div className='game-details'>
        <h1>Good development requires not just talkers but doers.</h1>
        <h3>services</h3>
        <div className='percentage-section'>
          Mobile development
          <div className='bar'>
            <div>50%</div>

          </div>
        </div>
        <div className='percentage-section'>
          Mobile development
          <div className='bar'>
            <div>50%</div>

          </div>
        </div>
        <div className='percentage-section'>
          Mobile development
          <div className='bar'>
            <div style={{  width: "60%"}}>60%</div>

          </div>
        </div>
        <div className='percentage-section'>
          Mobile development
          <div className='bar'>
            <div>50%</div>

          </div>
        </div>
        <div className='percentage-section'>
          Mobile development
          <div className='bar'>
            <div>50%</div>

          </div>
        </div>
       

      </div>
      <div className='game'>
      <TargetArea/>
      </div>
    </div>
  )
}

export default GameArea
