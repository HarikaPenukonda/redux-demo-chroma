import { createStore } from "redux"
import reducer from "../redux/reducers/todoReducer"
// createStore - holds the data about the state
/*
    In Redux, createStore is a function provided by the Redux library that is used to create a Redux store. A Redux store is a central repository for managing the state of an application. It holds the entire state tree of your application and provides methods for dispatching actions to update the state and for subscribing to changes in the state.

    1. import `createStore` from redux library

    2. You typically have a root reducer that combines all of your application's reducers. The reducer is a function that takes the current state and an action, and returns the new state based on that action.

    3. The createStore function takes your root reducer as an argument and returns a Redux store. You can then use this store to:
        - Dispatch actions: You dispatch actions to make changes to the state. When an action is dispatched, it flows through the reducers, and the state is updated accordingly.
        - Subscribe to state changes: You can subscribe to the store to receive notifications whenever the state changes. This allows your application to react to changes in the state and update the UI accordingly.
*/ 
// calls the initial state of the reducer
const store = createStore(reducer)

// get the state of the store
console.log(store.getState())
export default store