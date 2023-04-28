import React,{useState, useEffect} from 'react';
import './App.css';
import Transactions from './components/Transactions';
import { Form } from './components/Form';
import SearchForm from './components/SearchForm';

function App() {
  function handleUpdateOnSubmission(newTransaction){

    const serverOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTransaction)
    }
    fetch("http://localhost:3000/transactions", serverOptions)
      .then(r => r.json())
      .then(newTransaction => setTransactions(transactions => [...transactions, newTransaction]))
      .catch(error=>alert(error))
  }
  const [transactions, setTransactions] = useState([]);
  const [searchFilter, setSearchFilter] =useState("")

  useEffect(() => {
    
    fetch("http://localhost:3000/transactions")
      .then((r) => r.json())
      .then((transactions) => setTransactions(transactions));
  }, []); 
  const filterTransactions=transactions.filter(transaction => searchFilter === ""? true: transaction.description.includes(searchFilter))
    function handleOnSearch (search) {
      setSearchFilter(search)
    }


  return (
    <div>
    <h2>The Royal BanK Of Flatiron</h2>
    <SearchForm onSearching={handleOnSearch}/>
    <Form onSubmission={handleUpdateOnSubmission}/>
    <Transactions transactions={filterTransactions} />
    
    </div>
  );
}

export default App;
