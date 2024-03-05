import { getVariationExpense } from "../../redux/slices/expenseSlice";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useTranslation } from "react-i18next";

const Variation = () => {
  const variation = useAppSelector((state) => state.expense.variation);
  const day = useAppSelector((state) => state.expense.today);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getVariationExpense(day));
  }, []);

  return (
    <div className="text-end">
      <h1 className="font-semibold">
        {variation >= 0 ? "+" : null}
        <span data-testid="variation">{variation.toFixed(1)}</span>%
      </h1>
      <h3 className="text-sm font-semibold" data-testid="variationText">
        {t("variation")}
      </h3>
    </div>
  );
};

export default Variation;
