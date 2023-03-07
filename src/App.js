import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpenses/NewExpense";
import React,{ useState } from "react";


const DUMMY_EXPENSES = [
  {id:'e1', title: "car insurance", amount: 289.4, date: new Date() },
  {id:'e2', title: "toilet paper", amount: 444, date: new Date() },
  {id:'e3', title: "soap", amount: 44, date: new Date() },
  {id:'e4', title: "movie", amount: 800, date: new Date() },
];

const App = () => {
  
const [expenses,setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = expense =>{
   setExpenses((prevExpenses) => {
    return[expense,...prevExpenses]
   })
   
  }

  return (
    <div>
       <NewExpense onAddExpense={addExpenseHandler} />
       
      <Expense item = {expenses}/>
      
      
    </div>
  );
}

export default App;
