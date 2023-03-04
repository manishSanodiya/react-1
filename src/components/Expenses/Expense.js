import card from "../ui/card";
import ExpenseItem from "./ExpenseItem";
import './ExpenseItem';


const Expense = (props) => {
    return (
        <card className="expenses">
       
        <ExpenseItem
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
        />
      </card>
    );
}

export default Expense;