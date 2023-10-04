import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector } from 'react-redux'

/*
  `useSelector` is a hook provided by the React-Redux library for "accessing the Redux store's state in a functional component". 
  It allows you to select and retrieve specific pieces of state from the Redux store without the need for connecting your component using the `connect` higher-order component.
*/ 

function App() {

  const todos = useSelector(state => state.todos)
  const completedTodos = useSelector(state => state.completedTodos)
  

  return (
    <>
      <div>
        <h1>Pending</h1>
        {todos.map((todo,index)=>(
          <div key={index}>
            <h3>{todo.title}</h3>
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
