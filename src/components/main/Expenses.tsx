import { getTodayExpense } from "../../redux/slices/expenseSlice";
import { useEffect, useState } from "react";
import Variation from "./Variation";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useTranslation } from "react-i18next";

const Expenses = () => {
  const todayExpense = useAppSelector((state) => state.expense.todayExpense);
  const day = useAppSelector((state) => state.expense.today);
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTodayExpense(day));
  });

  return (
    <>
      <hr className="border-2"></hr>
      <div className="py-3 grid grid-cols-2">
        <div>
          <h1
            className="text-sm text-gray-400"
            data-testid="titleTodayExpenses"
          >
            {t("todayExpenses")}
          </h1>
          <h3 className="text-2xl font-bold">
            <span data-testid="totalTodayExpenses">{todayExpense}</span> €
          </h3>
        </div>
        <Variation></Variation>
      </div>
    </>
  );
};

export default Expenses;
