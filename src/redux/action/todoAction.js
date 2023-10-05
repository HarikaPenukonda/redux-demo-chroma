
// complete todo
// update todo
// delete todo
// get todos

// an action is a function which returns a plain object
// payload - data i want to share with my store


// add todo
export const ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const GET_TODOS = 'GET_TODOS'

export const addTodoAction = (todo) => {
    return{    
        type : ADD_TODO,
        payload : todo
    }
}

export const completeTodoAction = (todo) => {
    return{
        type : COMPLETE_TODO,
        payload : todo
    }
}

export const updateTodoAction = (index,newTodo) => {
    return{
        type : UPDATE_TODO,
        payload : {index,newTodo}
    }
}

export const deleteTodoAction = (index) => {
    return{
        type : DELETE_TODO,
        payload : {index}
    }
    
}

export const getTodosAction = () => {
    return{
        type : GET_TODOS
    }
}