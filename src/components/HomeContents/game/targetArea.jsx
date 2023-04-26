import React, { useRef, useEffect } from "react";
import { useState } from "react";
import ballImage from "../../../assets/game/ball-removebg-preview.png";
import ballImage1 from "../../../assets/game/AaMb.gif";
import runing from "../../../assets/game/1616347105_321052.gif";
import runingWin from "../../../assets/game/4a6002b4a290e725515a30db4e1076cf (1).gif";





import "./targetArea.scss";


const TargetArea = () => {
  const [ball, setBall] = useState(ballImage);
  const [left, setLeft] = useState("");
  const [top, setTop] = useState("");
  const[ score , setScore ] = useState(0);
  const[ clickScore , setClickScore ] = useState(false);
  const[ runingGol , setRuningGol ] = useState(runing);
  
  useEffect(() => {
   
   setInterval(() => {
      // const spaceW = window.innerWidth - 0;
      // const spaceH = window.innerHeight - 0;
      const minleft= 1;
      const maxleft=500;
      const mintop= 15;
      const maxtop=200;
      const leftValue = minleft+(Math.random() *(maxleft-minleft)) + "px";
      const topValue = mintop+ (Math.random() * (maxtop-mintop)) + "px";
      let leftValueString = String(leftValue);
      let topValueString = String(topValue);
      setLeft(leftValueString);
      setTop(topValueString);
   
      //         console.log('This will run every second!');
      //         console.log( leftValueString)
      //  console.log(window.innerWidth-100)
      //  console.log(ball.naturalWidth)
    }, 1000);
  
  }, []);

  const ChipStyles = {
    position: "absolute",
    left: `${left}`,
    top: `${top}`,

    // left: "500px",
  };

   const result=()=>{
    console.log("button")
      
      setBall(ballImage1)
      setRuningGol(runingWin)
      if(clickScore===false){
        setScore(score+1)
        setClickScore(true)
      }else{
        setScore(score)
        setClickScore(false)
      }
    
      setInterval(() => {
        setBall(ballImage)
        setRuningGol(runing)
       
      }, 800);
     
   
    

     
    
      
   
   }

  return (
    <div className="gamer-wrapper">
    <div className="target"  >
      <div ><span>Your score: {score}</span></div>
      <img src={ball} style={ChipStyles} alt="" id="image" onClick={result} />
    </div>
    <div className="target-bottom">
        <img src={runingGol} alt="" />
      </div>
    </div>
  );
};

export default TargetArea;
