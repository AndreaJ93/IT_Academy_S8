import Chart from "./Chart";
import Expenses from "./Expenses";

const Main = () => {
  return (
    <div className="w-full sm:w-3/4 lg:w-2/5 mx-auto bg-white rounded-xl p-8 my-4">
      <Chart></Chart>
      <Expenses></Expenses>
    </div>
  );
};

export default Main;
