import Expenses from './components/Expense/Expenses';

import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses =[
    {
      id:'e1' ,tittle:'Toilet Paper',amount:94.12,date:new Date(2022,7,14)
    },
    {
      id:'e2' ,tittle:'Car Insurance',amount:76.12,date:new Date(2021,5,4)
    },
    {
      id:'e3' ,tittle:'TV',amount:294.12,date:new Date(2020,3,1)
    },
    {
      id:'e3' ,tittle:'Desk',amount:100,date:new Date(2023,2,1)
    }
  ]
  
  const addExpenseHandler=expenses=>{
    console.log(expenses)
  }
 
  return(
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
       <Expenses items={expenses}/>

    </div>
  );
}

export default App;