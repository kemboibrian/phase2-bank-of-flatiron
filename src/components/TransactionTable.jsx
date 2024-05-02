import React from "react";

const TransactionTable = ({ transactions }) => {
  return (
    <table>
      {/* Table header */}
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      {/* Table body */}
      <tbody>
        {/* Mapping over transactions to create table rows */}
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
