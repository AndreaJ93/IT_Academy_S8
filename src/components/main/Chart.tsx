import {
  ArcElement,
  ChartData,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  Tooltip,
} from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useAppSelector } from "../../redux/hooks";
import { useTranslation } from "react-i18next";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
  const weekExpenses = useAppSelector((state) => state.expense.weekExpenses);
  const today = useAppSelector((state) => state.expense.today);
  const { t } = useTranslation();

  const days = weekExpenses.map((day) => day.day);
  const expense = weekExpenses.map((day) => day.expense);
  const colors = weekExpenses.map((day) =>
    day.day === today ? "#75B5BF" : "#ED755D"
  );

  const data: ChartData<"bar"> = {
    labels: days,
    datasets: [
      {
        label: "Expenses",
        data: expense,
        backgroundColor: colors,
        borderRadius: 6,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: true,
        },
      },
      y: {
        grid: {
          display: true,
          color: (context: any) =>
            context.tick.value === 500 ? "#E5E5E5" : "transparent",
          lineWidth: 2,
        },
        border: {
          display: false,
          dash: [3, 5],
        },
        max: 800,
        ticks: {
          callback: (value: string | number) =>
            value == 0 || value == 500 ? value : "",
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <h1 className="text-xl font-bold m-0" data-testid="chartTitle">
        {t("chartTitle")}
      </h1>
      <div className="w-full my-3">
        <Bar
          data-testid="chart"
          data={data}
          options={options}
          style={{ height: "195px" }}
        ></Bar>
      </div>
    </>
  );
};

export default Chart;
