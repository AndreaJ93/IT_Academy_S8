import { getTotalBalance } from "../../redux/slices/expenseSlice";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useTranslation } from "react-i18next";

const TotalBalance = () => {
  const totalBalance = useAppSelector((state) => state.expense.totalBalance);
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTotalBalance());
  }, []);

  return (
    <div className="bg-[#EC765C] w-full sm:w-3/4 lg:w-2/5 mx-auto rounded-xl p-6 grid grid-cols-2 text-white">
      <div>
        <h1 data-testid="title">{t("totalBalance")}</h1>
        <h3 className="text-2xl font-bold">
          <span data-testid="total">{totalBalance}</span> €
        </h3>
      </div>
      <div className="text-end text-2xl self-center">
        <button data-testid="leftArrow" className="mx-3">
          🡠
        </button>
        <button data-testid="rightArrow">🡢</button>
      </div>
    </div>
  );
};

export default TotalBalance;
