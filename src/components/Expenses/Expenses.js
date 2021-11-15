import ExpenseList from './ExpenseList';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';
import ExpensesChart from './ExpenseChart';

function Expenses(props) {
const [filterYear,selectedFilterYear] = useState('2020');
  const selectedFilterHanndler = selectedYear => {
     console.log("Selected Year " + selectedYear);
     selectedFilterYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div className="expenses">

     <ExpenseFilter selected={filterYear} onSelectFilterYear = {selectedFilterHanndler}/>
     <ExpensesChart expenses={filteredExpenses} />
     <ExpenseList items={filteredExpenses}/>

     // display the list element on the basis of props.items i.e. coming from parent component

     // conditional  returns of thr statement
      {/* {filteredExpenses.length === 0 ? <p>NO Data Found for selected year</p> :
      (
        filteredExpenses.map(expense => 
          <ExpenseItem
           key = {expense.id}
           title = {expense.title}
           amount = {expense.amount}
           date = {expense.date} />
        )
      )
      } */}

      
    
    </div>
  );
}

export default Expenses;