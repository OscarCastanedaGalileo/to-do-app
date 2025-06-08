import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await fetch('http://localhost:3001/getTasks');
    return await response.json();
});

export const createTodo = createAsyncThunk('todos/createTodo', async (todo) => {
    const response = await fetch('http://localhost:3001/addTask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo)
    });
    const data = await response.json();
    return data.task;
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
    await fetch(`http://localhost:3001/removeTask/${id}`, {
        method: 'DELETE'
    });
    return id;
});

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        value: [],
        status: 'idle'
    },
    reducers: {
        addTodo: (state, action) => {
            state.value.push(action.payload);
        },
        initAddTodo: (state, action) => {
            state.value.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.value = state.value.filter((todo) => todo._id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.value = action.payload;
            })
            .addCase(createTodo.fulfilled, (state, action) => {
                state.value.push(action.payload);
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                state.value = state.value.filter((todo) => todo._id !== action.payload);
            });
    }
});

export const { addTodo, initAddTodo, removeTodo } = todoSlice.actions;
export const selectTodos = (state) => state.todos.value;

export default todoSlice.reducer;