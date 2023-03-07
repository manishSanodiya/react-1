import Card from "../ui/Card";
import ExpenseItem from "./ExpenseItem";
import './ExpenseItem';
import './Expense.css';
import React,{ useState } from "react";
import ExpensesFilter from "./ExpensesFilter";


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
         
         {/* <ExpenseItem
           title={props.item[0].title}
           amount={props.item[0].amount}
           date={props.item[0].date}
         />
         <ExpenseItem
           title={props.item[1].title}
           amount={props.item[1].amount}
           date={props.item[1].date}
         />
         <ExpenseItem
           title={props.item[2].title}
           amount={props.item[2].amount}
           date={props.item[2].date}
         />
         <ExpenseItem
           title={props.item[3].title}
           amount={props.item[3].amount}
           date={props.item[3].date}
         /> */}
         {filteredExpenses.map((expenses)=>(
           <ExpenseItem
           key = {expenses.id}
           title= {expenses.title}
           amount = {expenses.amount}
           date = {expenses.date}
           />
           
           ) )}
       </Card>
      </div>
        

    );
}

export default Expense;