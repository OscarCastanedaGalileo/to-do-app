import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todoSlice";
import goalsReducer from "./reducers/goalsSlice";
import logger from "./middleware/logger";
import checker from "./middleware/checker";

const store = configureStore({
    reducer: {
        todos: todoReducer,
        goals: goalsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger, checker)
});

export default store;