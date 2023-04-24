import React from 'react';

function TransactionTable({ transactions }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionTable;
