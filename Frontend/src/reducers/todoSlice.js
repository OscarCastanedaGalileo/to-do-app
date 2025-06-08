import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await fetch('http://localhost:3001/getTasks');
    return await response.json();
});

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        value: [
            {
                'name':'Pasear al perro'
            }
        ],
    },
    reducers: {
        addTodo: (state, action) => {
            console.log(action.payload);
            state.value.push(action.payload)
        },
        initAddTodo: (state, action) => {
            console.log(action.payload);
            state.value.push(action.payload)
        },
        removeTodo: (state, action) => {
            console.log(action.payload);
            state.value = state.value.filter((todo) => todo.name !== action.payload);   
        }
    }
})

export const { addTodo, initAddTodo, removeTodo} =  todoSlice.actions
export const selectTodos = (state) => state.todos.value

export default todoSlice.reducer