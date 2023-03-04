import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expense from "./components/Expenses/Expense";
const App = () => {
  const expenses = [
    { title: "car insurance", amount: 289.4, date: new Date() },
    { title: "toilet paper", amount: 444, date: new Date() },
    { title: "soap", amount: 44, date: new Date() },
    { title: "movie", amount: 800, date: new Date() },
  ];
  return (
    <div>
       <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
