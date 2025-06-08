import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Obtener metas del backend
export const fetchGoals = createAsyncThunk('goals/fetchGoals', async () => {
  const response = await fetch('http://localhost:3001/getGoals');
  return await response.json();
});

// Crear meta en el backend
export const createGoal = createAsyncThunk('goals/addGoal', async (goal) => {
  const response = await fetch('http://localhost:3001/addGoal', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(goal)
  });
  const data = await response.json();
  return data.goal;
});

// Eliminar meta del backend
export const deleteGoal = createAsyncThunk('goals/removeGoal', async (id) => {
  await fetch(`http://localhost:3001/removeGoal/${id}`, {
    method: 'DELETE'
  });
  return id;
});

export const goalsSlice = createSlice({
  name: "goals",
  initialState: {
    value: [],
    status: 'idle'
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGoals.fulfilled, (state, action) => {
        state.value = action.payload;
      })
      .addCase(createGoal.fulfilled, (state, action) => {
        state.value.push(action.payload);
      })
      .addCase(deleteGoal.fulfilled, (state, action) => {
        state.value = state.value.filter(goal => goal._id !== action.payload);
      });
  }
});

export const selectGoals = (state) => state.goals.value;
export default goalsSlice.reducer;
