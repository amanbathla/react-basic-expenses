
import './NewExpense.css';
import ExpenseForm from  './ExpenseForm'
import { useState } from 'react/cjs/react.development';

const NewExpense = (props) => {

  const[expenseForm,showExpenseForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
          ...enteredExpenseData,
          id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
      };

      const toggleExpenseForm = () => { 
        console.log(expenseForm);
        showExpenseForm(current => !current);
        
      }
      // check for the expenseForm State i.e. True or false
        return (
          <div className='new-expense'>
            {!expenseForm &&  
            <button
             onClick={toggleExpenseForm}>Add New Expense</button> }
             {expenseForm &&
              <ExpenseForm 
              onToggleButtonAction ={toggleExpenseForm}
              onSaveExpenseData = {saveExpenseDataHandler} />
              }
          </div>
      );
      


}



export default NewExpense;