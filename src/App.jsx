import React, { useState } from "react";
import TransactionTable from "./components/TransactionTable";
import TransactionForm from "./components/TransactionForm";
import SearchBar from "./components/SearchBar";
import "./App.css";

const App = () => {
  // State for storing transactions
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: "2023-04-02",
      description: "Groceries",
      category: "Expenses",
      amount: 1200,
    },
    {
      id: 2,
      date: "2023-04-05",
      description: "Salary",
      category: "Income",
      amount: 55000,
    },
    {
      id: 3,
      date: "2023-04-10",
      description: "Rent",
      category: "Expenses",
      amount: 15000,
    },
    {
      id: 4,
      date: "2023-04-15",
      description: "Dining Out",
      category: "Expenses",
      amount: 4500,
    },
    {
      id: 5,
      date: "2023-04-20",
      description: "Savings",
      category: "Income",
      amount: 5000,
    },
  ]);

  // State for storing new transaction data
  const [newTransaction, setNewTransaction] = useState({
    date: "",
    description: "",
    category: "",
    amount: 0,
  });

  // State for storing search term
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle input change in transaction form
  const handleInputChange = (e) => {
    setNewTransaction({
      ...newTransaction,
      [e.target.name]: e.target.value,
    });
  };

  // Function to add new transaction
  const handleAddTransaction = () => {
    const newTransactionId = transactions.length + 1;
    const newTransactionData = {
      id: newTransactionId,
      ...newTransaction,
    };
    setTransactions([...transactions, newTransactionData]);
    // Reset form fields after adding transaction
    setNewTransaction({
      date: "",
      description: "",
      category: "",
      amount: 0,
    });
  };

  // Function to handle search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter transactions based on search term
  const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.description
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      transaction.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      {/* Title */}
      <h1>The Royal Bank of Flatiron</h1>
      {/* Search bar component */}
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
      {/* Transaction form component */}
      <TransactionForm
        newTransaction={newTransaction}
        handleInputChange={handleInputChange}
        handleAddTransaction={handleAddTransaction}
      />
      {/* Transaction table component */}
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
};

export default App;
