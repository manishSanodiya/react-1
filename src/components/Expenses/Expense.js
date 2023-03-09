import Card from "../ui/Card";
import ExpenseItem from "./ExpenseItem";
import './ExpenseItem';
import './Expense.css';
import React,{ useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";


const Expense = (props) => {
  const [filteredYear,setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) =>{
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.item.filter(expense =>{
    return expense.date.getFullYear().toString()===filteredYear;
})
 


    return (
      <div>
        <Card className="expenses">
          <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
         <ExpensesChart expenses={filteredExpenses}/>
        
         
         <ExpenseList item ={filteredExpenses}/>
       </Card>
      </div>
        

    );
}

export default Expense;