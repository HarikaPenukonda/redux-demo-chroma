import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector } from 'react-redux'

/*
  `useSelector` is a hook provided by the React-Redux library for "accessing the Redux store's state in a functional component". 
  It allows you to select and retrieve specific pieces of state from the Redux store without the need for connecting your component using the `connect` higher-order component.
*/ 
/*
  `useState` is a built-in hook in React, a popular JavaScript library for building user interfaces. 
  It is used to manage state within functional components. 
  State refers to data that can change over time and affect how a component renders.

  In your functional component, call useState to declare a state variable and its initial value. 
  useState returns an array with two elements: the current state value and a function to update it.
*/ 

function App() {
  const [todo,setTodo] = useState('')
  const [todoId,setTodoId] = useState(-1)
  const todos = useSelector(state => state.todos)
  const completedTodos = useSelector(state => state.completedTodos)
  

  return (
    <>
      <div>
        <input value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <button>{todoId >= 0 ? "Update" : "Add"} todo </button>
        <h1>Pending</h1>
        {todos.map((todo,index)=>(
          <div key={index}>
            <h3>{todo.title}</h3>
            <button onClick={() => {setTodo(todo.title);setTodoId(index)}}>update todo</button>
            <button>delete todo</button>
            <button>Mark as completed todo</button>
          </div>
        ))}
      </div>
      <div>
        <h1>Completed</h1>
        {completedTodos.map((todo,index)=>(
          <div key={index}>
            <h3>{todo.title}</h3>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
