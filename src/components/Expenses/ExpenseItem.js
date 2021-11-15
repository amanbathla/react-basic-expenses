import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card';

//import react,{useState} from 'react';

function ExpenseItem(props) {

  /* state will always return an array os size 2
   1. current state value
   array that returns that value */

  // const [title,setTitle] = useState(props.title);
    
    // add data dynamically to HTML element 
    // const expenseDate = new Date(2021, 2, 28);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.67;
    // use : <div>{expenseDate.toISOString()}</div>


    // use state to change the title on button click 


  // const changeTitle = () => {
  //    // setTitle('Updated Title!');
  //     console.log("Title updated!");
  // }
  
  return (

    <Card>
    <div className="expense-item">
        <ExpenseDate date = {props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={changeTitle}>Change Title!</button> */}
    </div>

    </Card>
  );
}

export default ExpenseItem;