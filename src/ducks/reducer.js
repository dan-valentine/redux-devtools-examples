import axios from 'axios';
const initialState = {
    todos: []
};

// Actions
const GET_TODOS = 'GET_TODOS';
const ADD_TODOS = 'ADD_TODOS';
const DELETE_TODOS = 'DELETE_TODOS';

// Reducer
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TODOS + '_FULFILLED':
            return Object.assign({}, { todos: action.payload });
        case DELETE_TODOS + '_FULFILLED':
            return Object.assign({}, { todos: action.payload });
        case ADD_TODOS + '_FULFILLED':
            return Object.assign({}, { todos: action.payload });
        default: return state;
    }
};

// Action Creators
export function getTodos() {
    const todos = axios.get('/api/todos').then(res => res.data)

    return {
        type: GET_TODOS,
        payload: todos
    }
}

export function addTodos(todo) {
    const body = {
        todo: todo
    }
    const todos = axios.post('/api/todos', body).then(res => res.data)

    return {
        type: ADD_TODOS,
        payload: todos
    }
}

export function deleteTodos(index) {
    const todos = axios.delete(`/api/todos/${index}`).then(res => res.data)
    console.log(index)
    return {
        type: DELETE_TODOS,
        payload: todos
    }
}