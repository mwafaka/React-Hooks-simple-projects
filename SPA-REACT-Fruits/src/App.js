import React, {useState} from 'react'
import './App.css';
import Fruit from './components/Fruit' ;
function App() {
  const [fruits, setFruits ] = useState(['Orange','Lemon','Apple']);
  const colors = ['red','green','magenta','lightgreen','lightblue'];
  const deleteFruit = (index)=> {
    setFruits(  fruits.filter((item,i)=> i !== index ) )
   
  }
  return (
    <div className="App">
       <h1> React Fruits</h1> 
       {fruits.map((item,index) =>  <Fruit key={index} type={item} del={ ()=> deleteFruit(index)}  colors ={colors} /> )}
       
       
    </div>
  );
}

export default App;
