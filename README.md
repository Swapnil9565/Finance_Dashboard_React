# Finance Dashboard

## Overview

The **Finance Dashboard** is a frontend application built to help users track their income and expenses in a clean and interactive interface. It provides a clear overview of financial data through summaries, charts, and transaction history.

---

##  Features

###  Dashboard & Insights

* Displays **total balance, total income, and total expenses**
* Real-time updates when transactions are added or deleted
* Quick financial overview at a glance

---

### Data Visualization

* Interactive charts for **income vs expenses comparison**
* Helps users understand spending patterns visually
* Dynamic updates based on transaction data

---

### Transaction Management

* View a list of all transactions
* Each transaction includes:

  * Date
  * Amount
  * Category
  * Type (Income/Expense)

---

### Advanced Filtering

* Filter transactions by:

  * Income / Expense
  * Category
* Helps users quickly find specific records

---

### Add Transactions

* Add new income or expense entries
* Form validation to prevent invalid inputs
* Instant UI update after adding

---

### Real-Time Calculations

* Automatically calculates:

  * Total Income
  * Total Expenses
  * Net Balance

---

### Modular Architecture

* Clean and reusable React components
* Easy to scale and maintain

---

### Responsive UI

* Clean, modern design
* Works across different screen sizes

---

### ⚙️ State Management

* Uses **Context API**
* Centralized state handling
* Avoids prop drilling

---

### Performance Optimized

* Efficient filtering and calculations
* Minimal re-renders using React best practices
---

## Tech Stack

* **Frontend:** React.js
* **State Management:** Context API
* **Styling:** CSS / Tailwind CSS


---

## 📂 Project Structure

```
src/
│── components/
│   ├── Dashboard/
│   │   ├──CategoryChart.jsx
│   │   ├── BalanceChart.jsx
│   │   ├── SummaryCard.jsx
│   ├── Transactions/
│   │   ├── TransactionList.jsx
│   │   ├── TransactionItem.jsx
│   │   ├── TransactionFilter.jsx
│   ├── Insights/
│   │   ├── Insight.jsx
│   ├── Role/
│   │   ├── RoleSwitcher.jsx
│── context/
│   ├── AppContext.jsx
│
│── data/
│   ├── transactionData.js
│── Pages/
│   ├── DashboardPage.jsx
│── App.jsx
│── Index.css
│── main.jsx
```

---

##  Setup Instructions

Follow these steps to run the project locally:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/finance-dashboard.git
cd finance-dashboard
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Start Development Server

```bash
npm run dev
```

---

### 4️⃣ Open in Browser

Visit:

```
http://localhost:5173
```

---

## Approach & Implementation

### 1. Component-Based Architecture

The application is divided into reusable components such as:

* Dashboard (summary + charts)
* Transactions (list + filters)
* Forms (add transaction)

This improves scalability and maintainability.

---

### 2. State Management (Context API)

* A global context (`AppContext`) is used to manage:

  * Transactions data
  * Add operation
* This avoids prop drilling and keeps state centralized.

---

### 4. Calculations

* **Income:** Sum of all transactions with type `income`
* **Expenses:** Sum of all transactions with type `expense`
* **Balance:**

  ```
  Balance = Income - Expenses
  ```

---

### 5. Filtering Logic

* Users can filter transactions based on:

  * Type (Income / Expense)
  * Category
* Implemented using array filtering methods

---

### 6. Chart Integration

* Displays income vs expense visually
* Helps users quickly understand financial distribution

---

##  Author

**Swapnil Mohite**
