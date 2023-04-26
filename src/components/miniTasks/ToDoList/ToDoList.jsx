import React from 'react';
import { useState } from 'react';


const ToDoList = () => {
  const [additems, setAdditems]= useState(``);
  const [items, setItems]= useState([]);
  const handleChange=(e)=>{
   setAdditems(e.target.value);
  }

  const handleItemsAdd =()=>{

    if (!additems){
      alert("please add to do list");
      return;
    }

  //  setItems([...items, additems]);
  const item ={
    id:Math.floor(Math.random()*100),
    value:additems

  };
  setItems(oldList=>[...oldList, item]);
   setAdditems(``);
  }
  const handleRemove=(id)=>{
    // console.log(id)
 const newArray= items.filter(item=>item.id!==id);
 setItems(newArray);
 console.log(newArray)
  }
  return (
    <div>
      <h1>To Do List</h1>
      <input type="text" value={additems} onChange={handleChange}></input>
      <button onClick={handleItemsAdd}>Add</button>
      <ul>
        {
          items.map((data)=>{
            return(
              <>
        <li key={data.id}>{data.value}  <button onClick={()=>handleRemove(data.id)}>remove</button></li>
       
              </>
            )
          })
        }
     
      </ul>
    </div>
  )
}

export default ToDoList
