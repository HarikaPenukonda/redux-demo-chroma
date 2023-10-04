import { ADD_TODO } from "../action/todoAction";

// reducer is a function that takes initial state and an object
// initial state : if we do not pass any action or anything by default it takes the initial value of the state variable
const initialState = {
    todos : [
        {
            id : 1,
            title : 'Learn React',
            completed : false
        },
        {
            id : 2,
            title : 'Learn Redux',
            completed : false
        }
    ],
    completedTodos : [
        {
            id : 3,
            title : 'Learn JavaScript',
            completed : true
        }
    ]
}


function reducer (state = initialState,action){
    switch(action.type){
        case ADD_TODO :
            return{
                ...state,
                // add a new todo to the existing todos
                todos : [...state.todo,action.payload]
            }

        case COMPLETE_TODO :
            return{
                ...state,
                completedTodos : [...state.completedTodos,action.payload]
            }

        case UPDATE_TODO :
            state.todos[index] = action.payload
            return {...state}

        case DELTE_TODO :
            // The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements
            state.todos.splice(index,1)
            return {...state}

        case GET_TODO :
            return {...state}

        default :
            return state
    }
}