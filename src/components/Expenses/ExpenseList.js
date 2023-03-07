import './ExpenseList.css'
import ExpenseItem from "./ExpenseItem";


const ExpenseList = props => {
    
  
    
     if(props.item.length===0){
        return <h2 className='expenses-list__fallback'>Fount No Expenses</h2>
     }
     else if(props.item.length===1){
        return (
           <p>
             <h2 className='expenses-list__fallback'>only one expense found add more</h2>
            <ul className='expenses-list'>
        {props.item.map((expenses)=>(
        <ExpenseItem
        key = {expenses.id}
        title= {expenses.title}
        amount = {expenses.amount}
        date = {expenses.date}
        />
        
        ) )}

      </ul>
           </p>
        )
     }
    
     return(
      <ul className='expenses-list'>
        {props.item.map((expenses)=>(
        <ExpenseItem
        key = {expenses.id}
        title= {expenses.title}
        amount = {expenses.amount}
        date = {expenses.date}
        />
        
        ) )}

      </ul>
     )
}


export default ExpenseList;