import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpenses/NewExpense";


const App = () => {
  const expenses = [
    {id:'e1', title: "car insurance", amount: 289.4, date: new Date() },
    {id:'e2', title: "toilet paper", amount: 444, date: new Date() },
    {id:'e3', title: "soap", amount: 44, date: new Date() },
    {id:'e4', title: "movie", amount: 800, date: new Date() },
  ];
  return (
    <div>
       <NewExpense />
       
      <Expense item = {expenses}/>
      
      
    </div>
  );
}

export default App;
