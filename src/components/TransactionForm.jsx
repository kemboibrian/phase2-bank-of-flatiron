import React from "react";

const TransactionForm = ({
  newTransaction, // State for storing new transaction data
  handleInputChange, // Function to handle input change in transaction form
  handleAddTransaction, // Function to add new transaction
}) => {
  return (
    <div>
      {/* Date input field */}
      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          placeholder="Date..."
          value={newTransaction.date}
          onChange={handleInputChange}
        />
      </div>
      {/* Description input field */}
      <div className="form-group">
        <label htmlFor="description"></label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Description..."
          value={newTransaction.description}
          onChange={handleInputChange}
        />
      </div>
      {/* Category input field */}
      <div className="form-group">
        <label htmlFor="category"></label>
        <input
          type="text"
          id="category"
          name="category"
          placeholder="Category..."
          value={newTransaction.category}
          onChange={handleInputChange}
        />
      </div>
      {/* Amount input field */}
      <div className="form-group">
        <label htmlFor="amount"></label>
        <input
          type="number"
          id="amount"
          placeholder="Amount..."
          name="amount"
          value={newTransaction.amount}
          onChange={handleInputChange}
        />
      </div>
      {/* Button to add transaction */}
      <div className="form-group">
        <button onClick={handleAddTransaction} className="search-button">
          Add Transaction
        </button>
      </div>
    </div>
  );
};

export default TransactionForm;
