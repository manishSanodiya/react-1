
import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";

const ExpenseItem=(props) => {
  return (
    <card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetail title={props.title} amount={props.amount} />
     
     
    </card>
  );
}
export default ExpenseItem;
