import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ExpenseItem {
  day: string;
  expense: number;
}

export interface Expenses {
  weekExpenses: ExpenseItem[];
  totalBalance: number;
  todayExpense?: number;
  today: string;
  variation: number;
}

const initialState: Expenses = {
  weekExpenses: [
    { day: "Mon", expense: 320 },
    { day: "Tues", expense: 460 },
    { day: "Wed", expense: 510 },
    { day: "Thurs", expense: 400 },
    { day: "Fri", expense: 330 },
    { day: "Sat", expense: 470 },
    { day: "Sun", expense: 580 },
  ],
  totalBalance: 0,
  todayExpense: 0,
  today: "Sun",
  variation: 0,
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    getTotalBalance: (state) => {
      state.totalBalance = state.weekExpenses.reduce(
        (total, day) => total + day.expense,
        0
      );
    },
    getTodayExpense: (state, action: PayloadAction<string>) => {
      state.todayExpense = state.weekExpenses.find(
        (day) => day.day === action.payload
      )?.expense;
    },

    getToday: (state, action: PayloadAction<string>) => {
      state.today = action.payload;
    },

    getVariationExpense: (state, action: PayloadAction<string>) => {
      const indexToday = state.weekExpenses.findIndex(
        (day) => day.day === action.payload
      );

      const gap =
        state.weekExpenses[indexToday].expense -
        state.weekExpenses[indexToday - 1].expense;

      state.variation = (gap * 100) / state.weekExpenses[indexToday].expense;
    },
  },
});

export const {
  getTotalBalance,
  getTodayExpense,
  getVariationExpense,
  getToday,
} = expenseSlice.actions;

export default expenseSlice.reducer;
