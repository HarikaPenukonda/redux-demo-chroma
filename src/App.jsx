import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addTodoAction, deleteTodoAction, updateTodoAction } from './redux/action/todoAction'

function App() {
  const [todo,setTodo] = useState('')
  const [todoId,setTodoId] = useState(-1)
  const todos = useSelector(state => state.todos)
  const completedTodos = useSelector(state => state.completedTodos)
  const dispatch = useDispatch()
  

  return (
    <>
      <div>
        <input value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <button onClick={() => {dispatch(todoId >=0 ? updateTodoAction(todoId,todo) : addTodoAction(todo));setTodo('');setTodoId(-1)}}>{todoId >= 0 ? "Update" : "Add"} todo </button>
        <h1>Pending</h1>
        {todos.map((todo,index)=>(
          <div key={index}>
            <h3>{todo.title}</h3>
            <button onClick={() => {setTodo(todo.title);setTodoId(index)}}>update todo</button>
            <button onClick={() => {dispatch(deleteTodoAction(index))}}>delete todo</button>
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
/*
  `useDispatch` is a tool/hook in React-Redux that allows "functional components to communicate with and 
  make changes to the central data storage (the Redux store) of a React application".

    - Imagine your application's data is like a big shared storage room, and this room is guarded by a dispatcher. 
      The dispatcher listens for requests and actions and knows how to make changes to the stuff in the room.
    
    - useDispatch is like a magic phone that you can use inside your component. 
      When you pick up this phone and call useDispatch(), it connects you to the dispatcher (the Redux store).

    - Once you're connected, you can tell the dispatcher what you want to do. 
      For example, you can say, "Hey dispatcher, I want to change something in the room. 
      Please update it." You do this by using the dispatch function you get from useDispatch.

    - You tell the dispatcher what you want to do by sending it a message, which we call an "action." 
      Actions are like notes you pass to the dispatcher. 
      Each action has a type that tells the dispatcher what kind of change you want to make.

    - The dispatcher, after receiving your action, knows how to handle it. 
      It looks at the action's type and decides what to do with the data in the storage room. 
      It might add, remove, or modify something based on your instructions.

    - Finally, the dispatcher makes the necessary changes in the storage room, 
      and if anyone is watching for changes (like your React components), they get updated automatically. 
      It's like the dispatcher broadcasts the changes to anyone interested.
*/ 