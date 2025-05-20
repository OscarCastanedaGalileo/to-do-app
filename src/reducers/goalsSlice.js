import { createSlice } from "@reduxjs/toolkit";
//import { todoSlice } from "./todoSlice";
export const goalsSlice = createSlice({
  name: "goals",
  initialState: {
    value: [
      {
        name: "Pasear al perro",
      },
    ],
  },
  reducers: {
    addGoal: (state, action) => {
       state.value.push(action.payload);
    },
  },
});

export const { addGoal } = goalsSlice.actions;
export const selectGoals = (state) => state.goals.value;
export default goalsSlice.reducer;