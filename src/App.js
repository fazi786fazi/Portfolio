import { useState } from "react";
import Home from "./layout/home/Home";
import { MdOutlineDarkMode,MdDarkMode } from 'react-icons/md';
import './components/StyleSheet/mixin.scss'
import './App.css';
import ToDoList from "./components/miniTasks/ToDoList/ToDoList";
import Calculator from "./components/miniTasks/calculator/Calculator";


function App() {
  const [icon, setIcon] = useState(false);
  const [mode, setMode] = useState(false);
  const DarkMode=()=>{
setMode(!mode)
setIcon(!icon)
  }

    
  return (
    <div className={mode?"dark":"light-mode"}>
      <div onClick={DarkMode} className="dark-light-mode">{icon?<MdDarkMode size={30} style={{color:"white"}}/>:<MdOutlineDarkMode size={30}  />}</div>
      <Home />
      {/* <ToDoList/> */}
     {/* <Calculator/> */}
    </div>
  );
}

export default App;
