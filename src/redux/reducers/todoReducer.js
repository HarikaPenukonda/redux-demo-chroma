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
            //console.log(action.payload) // title
            return{
                ...state,
                // add a new todo to the existing todos
                todos : [{id : state.todos.length + 1, title : action.payload,completed:false},...state.todos]
                
            }

        case COMPLETE_TODO :
            return{
                ...state,
                completedTodos : [...state.completedTodos,action.payload]
            }

        case UPDATE_TODO :
            const {index,newTodo} = action.payload
            console.log(action.payload) // {index: 0, newTodo: 'Learn ReactJS'}
            state.todos[index].title = newTodo
            console.log(state) 
            /*
                {todos: Array(2), completedTodos: Array(1)}
                completedTodos: [{…}]
                todos: (2) [{…}, {…}]
                [[Prototype]]: Object
            */ 
           console.log(state.todos[index]) // {id: 1, title: 'Learn ReactJS', completed: false}
            return {
                ...state , 
                todos : [...state.todos,state.todos[index]]
            }

        case DELETE_TODO :
            // The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements
            state.todos.splice(action.payload.index,1)
            //console.log(state)
            return {
                ...state,
                todos : [...state.todos]
            }

        case GET_TODOS :
            return {...state}

        default :
            return state
    }
}