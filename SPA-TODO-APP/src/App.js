import React, { useState } from "react";

import AddTodo from "./components/AddTodo";
import "./App.css";


function App () {
  const [state, setState] = useState( 
  { todos:[
      {
      
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
      },
      {
      
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
      },
      {
      
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
      }
      ]}
)
  
    //marke add
   const markComplete = id => {
    setState({
   todos : state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };
  //Delete todo
  const delTodo = id => {

      setState({
        todos: [...state.todos.filter(todo => todo.id !== id)]
      })
    
  };

  //Add Todo
  const  addTodo = title => {
   
       setState({ todos: [...state.todos,{
         title,
         completed:false,
         id:state.todos.length+1
       }] });
  };
 
    return (
     
        <div className="App">
          <div className="container">
                  <AddTodo addTodo={addTodo}/>
                 {state.todos.map(item => (
      <div key={item.id} className='getStyle' style={{textDecoration: item.completed ? "line-through" : "none"}}>
      <p>
        <input
          type="checkbox"
          onChange={()=>markComplete(item.id)}
        />
        {item.title}
        <button className='btnStyle' onClick={()=>delTodo(item.id)}>
          x
        </button>
      </p>
    </div>
    ))}
          </div>
        </div>
    
    );
  
}



export default App;


