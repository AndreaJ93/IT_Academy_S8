import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ExpenseItem {
  day: number;
  expense: number;
  week: number;
}

export interface Expenses {
  weekExpenses: ExpenseItem[];
  totalBalance: number;
  todayExpense?: number;
  actualWeek: number;
  variation: number;
  today: number;
}

const initialState: Expenses = {
  weekExpenses: [
    { week: 1, day: 1, expense: 320 },
    { week: 1, day: 2, expense: 460 },
    { week: 1, day: 3, expense: 520 },
    { week: 1, day: 4, expense: 400 },
    { week: 1, day: 5, expense: 330 },
    { week: 1, day: 6, expense: 470 },
    { week: 1, day: 0, expense: 580 },

    { week: 2, day: 1, expense: 480 },
    { week: 2, day: 2, expense: 237 },
    { week: 2, day: 3, expense: 560 },
    { week: 2, day: 4, expense: 410 },
    { week: 2, day: 5, expense: 230 },
    { week: 2, day: 6, expense: 270 },
    { week: 2, day: 0, expense: 540 },

    { week: 3, day: 1, expense: 620 },
    { week: 3, day: 2, expense: 260 },
    { week: 3, day: 3, expense: 310 },
    { week: 3, day: 4, expense: 300 },
    { week: 3, day: 5, expense: 530 },
    { week: 3, day: 6, expense: 740 },
    { week: 3, day: 0, expense: 380 },

    { week: 4, day: 1, expense: 390 },
    { week: 4, day: 2, expense: 760 },
    { week: 4, day: 3, expense: 510 },
    { week: 4, day: 4, expense: 410 },
    { week: 4, day: 5, expense: 230 },
    { week: 4, day: 6, expense: 470 },
    { week: 4, day: 0, expense: 780 },
  ],
  totalBalance: 0,
  todayExpense: 0,
  actualWeek: 4,
  variation: 0,
  today: new Date().getDay(),
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    getTodayExpense: (state, action: PayloadAction<number>) => {
      state.todayExpense = state.weekExpenses
        .filter((day) => day.week === state.actualWeek)
        .find((day) => day.day === action.payload)?.expense;
    },

    getWeek: (state, action: PayloadAction<number>) => {
      state.actualWeek = action.payload;
    },

    getVariationExpense: (state, action: PayloadAction<number>) => {
      const weekArray = state.weekExpenses.filter(
        (day) => day.week === state.actualWeek
      );

      const todayExpenses = weekArray.find(
        (day) => day.day === action.payload
      )?.expense;
      const yesterdayExpenses = weekArray.find(
        (day) => day.day === action.payload - 1
      )?.expense;

      const tE = todayExpenses ?? 0;
      const yE = yesterdayExpenses ?? 0;

      const gap = tE - yE;

      state.variation = todayExpenses ? (gap * 100) / todayExpenses : 0;
    },
    getTotalBalance: (state, action: PayloadAction<number>) => {
      getWeek(action.payload);
      state.totalBalance = state.weekExpenses
        .filter((day) => day.week === state.actualWeek)
        .reduce((total, day) => total + day.expense, 0);
    },
  },
});

export const {
  getTotalBalance,
  getTodayExpense,
  getVariationExpense,
  getWeek,
} = expenseSlice.actions;

export default expenseSlice.reducer;
