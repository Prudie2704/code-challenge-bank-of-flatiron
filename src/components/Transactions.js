import TransactionItem from './TransactionItem';

function Transactions({ transactions }) {
  return (
    <table className='transactionTable'>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
      {transactions.map(transaction => (
          <TransactionItem
            date={transaction.date}
            description={transaction.description}
            category={transaction.category}
            amount={transaction.amount}
            key={transaction.id}
          />
        ))}
        
      </tbody>
    </table>
  );
}

export default Transactions