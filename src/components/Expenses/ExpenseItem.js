import Card from "../ui/Card";
import React,{useState} from "react";
import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css'


const ExpenseItem=(props) => {
  const [title,setTitle] = useState(props.title);

  
  const [amount,setAmount] = useState(props.amount);
  const amountHandler = ()  => {
      setAmount('100');
  }

  const clickHandler = () => {
    setTitle('updated!');
  
   console.log(title);
  };


  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
      <h2>{title}</h2>
      <div className="expense-item__price">${amount}</div>
    </div>

     <button onClick={clickHandler}>change title</button>
     <button onClick={amountHandler}>change amount</button>
     
    </Card>
  );
}
export default ExpenseItem;
