import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./slices/expenseSlice";

const store = configureStore({
  reducer: { expense: expenseReducer },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
