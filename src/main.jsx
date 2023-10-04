import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './redux/index.js'
import { Provider } from 'react-redux'

/*
  The <Provider> component is a higher-order component (HOC) provided by the React-Redux library. 
  It serves as a wrapper for your React application and is used to make the Redux store available to all components in your application without explicitly passing it down as a prop through multiple levels of your component tree.
  The <Provider> component simplifies the process of connecting React components to the Redux store.

  1. First, you create a Redux store using the createStore function from the Redux library,

  2. Then, you wrap your entire application with the <Provider> component and pass your Redux store as a prop to it.
*/ 

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
