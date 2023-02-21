import ExpenseItem from './components/ExpenseItem';
function App() {
  const expenses =[
    {
      id:'e1' ,tittle:'toilet paper',amount:94.12,date:new Date(2020,7,14)
    },
    {
      id:'e2' ,tittle:'car insurance',amount:76.12,date:new Date(2020,7,4)
    },
    {
      id:'e3' ,tittle:'tv',amount:294.12,date:new Date(2020,7,1)
    }
  ]
  return(
    <div>
       <ExpenseItem tittle={expenses[0].tittle} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
       <ExpenseItem tittle={expenses[1].tittle} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
       <ExpenseItem tittle={expenses[2].tittle} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>

    </div>
  );
}

export default App;