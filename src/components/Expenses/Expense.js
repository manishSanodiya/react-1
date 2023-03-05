import Card from "../ui/Card";
import ExpenseItem from "./ExpenseItem";
import './ExpenseItem';


const Expense = (props) => {
    return (
        <ul className="expenses">
         
        {/* <ExpenseItem
          title={props.title[0].title}
          amount={props.title[0].amount}
          date={props.title[0].date}
        />
        <ExpenseItem
          title={props.title[1].title}
          amount={props.title[1].amount}
          date={props.title[1].date}
        />
        <ExpenseItem
          title={props.title[2].title}
          amount={props.title[2].amount}
          date={props.title[2].date}
        />
        <ExpenseItem
          title={props.title[3].title}
          amount={props.title[3].amount}
          date={props.title[3].date}
        /> */}
        {props.item.map((expenses)=>(<li>
          <ExpenseItem
          key = {expenses.id}
          title= {expenses.title}
          amount = {expenses.amount}
          date = {expenses.date}
          />
          
          </li>) )}
      </ul>
    );
}

export default Expense;