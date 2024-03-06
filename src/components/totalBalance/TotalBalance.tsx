import {
  getTodayExpense,
  getTotalBalance,
  getVariationExpense,
  getWeek,
} from "../../redux/slices/expenseSlice";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useTranslation } from "react-i18next";

const TotalBalance = () => {
  const totalBalance = useAppSelector((state) => state.expense.totalBalance);
  const { t } = useTranslation();
  const week = useAppSelector((state) => state.expense.actualWeek);
  const day = useAppSelector((state) => state.expense.today);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTotalBalance(week));
  }, []);

  function lastWeek() {
    if (week === 1) {
      return;
    } else {
      dispatch(getWeek(week - 1));
      dispatch(getTotalBalance(week));
      dispatch(getVariationExpense(day));
      dispatch(getTodayExpense(day));
    }
  }

  function nextWeek() {
    if (week === 4) {
      return;
    } else {
      dispatch(getWeek(week + 1));
      dispatch(getTotalBalance(week));
      dispatch(getVariationExpense(day));
      dispatch(getTodayExpense(day));
    }
  }

  return (
    <div className="bg-[#EC765C] w-full sm:w-3/4 lg:w-2/5 mx-auto rounded-xl p-6 grid grid-cols-2 text-white">
      <div>
        <h1 data-testid="title">{t("totalBalance")}</h1>
        <h3 className="text-2xl font-bold">
          <span data-testid="total">{totalBalance}</span> €
        </h3>
      </div>
      <div className="text-end text-2xl self-center">
        <button data-testid="leftArrow" className="mx-3" onClick={lastWeek}>
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/windows/32/FFFFFF/long-arrow-left.png"
            alt="long-arrow-left"
          />
        </button>
        <button data-testid="rightArrow" onClick={nextWeek}>
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/windows/32/FFFFFF/long-arrow-right.png"
            alt="long-arrow-right"
          />
        </button>
      </div>
    </div>
  );
};

export default TotalBalance;
