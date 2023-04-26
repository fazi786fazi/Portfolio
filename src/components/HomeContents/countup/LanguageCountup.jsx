import React, { useState } from "react";
import CountUp, { startAnimation } from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import { Countup } from "../../Constant/constant";
import "./languageCountup.scss";

const LanguageCountup = () => {
  // const [ state, setState] = useState(true);
  // const onVisibilityChange = isVisible => {
  //     if (isVisible) {
  //         if (state.scrollStatus) {
  //             startAnimation(this.myCountUp);
  //             setState({ scrollStatus: false });
  //         }
  //     }}
  return (
    <>
      {/* <ReactVisibilitySensor onChange={this.onVisibilityChange} offset = {{ top: 
              10}} delayedCall>
             <CountUp  decimals={1} start={0} end={25} 
             suffix=" %" duration={3} ref={countUp => { this.myCountUp= countUp;}}/>
             </ReactVisibilitySensor> */}
      <div>{/* <CountUp start={0} end={1000}/> */}</div>
      <div className="inner-skills">
        <div className="skills">
          {Countup.map((item) => (
            <div className="cards">
              <img src={item.image} alt="/" />
              <h1>{item.percentage}</h1>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LanguageCountup;
