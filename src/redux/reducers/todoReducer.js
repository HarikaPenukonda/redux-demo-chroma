import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, GET_TODOS, UPDATE_TODO } from "../action/todoAction";

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


export default function reducer (state = initialState,action){
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
            const newState = state
            const {index,title} = action.payload
            newState.todos[index].title = title
            console.log(newState)
            state = newState
            return {...state}

        case DELETE_TODO :
            // The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements
            state.todos.splice(index,1)
            return {...state}

        case GET_TODOS :
            return {...state}

        default :
            return state
    }
}