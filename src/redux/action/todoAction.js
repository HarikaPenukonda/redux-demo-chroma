
// complete todo
// update todo
// delete todo
// get todos

// an action is a function which returns a plain object
// payload - data i want to share with my store


// add todo
export const ADD_TODO = 'ADD_TODO'
export const addTodoAction = (todo) =>{
    return{
        type : ADD_TODO,
        payload : todo
    }
}