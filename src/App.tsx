import React from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Header } from './components/Header';
import { BudgetOverview } from './components/BudgetOverview';
import { ExpenseForm } from './components/ExpenseForm';
import { ExpenseList } from './components/ExpenseList';
import { Footer } from './components/Footer';
import { Expense } from './types';

const DEFAULT_CATEGORIES = [
  'Food & Dining',
  'Transportation',
  'Shopping',
  'Entertainment',
  'Bills & Utilities',
  'Health & Fitness',
  'Travel',
  'Other',
];

function App() {
  const [expenses, setExpenses] = useLocalStorage<Expense[]>('budget-tracker-expenses', []);

  const addExpense = (expenseData: Omit<Expense, 'id' | 'createdAt'>) => {
    const newExpense: Expense = {
      ...expenseData,
      id: crypto.randomUUID(),
      createdAt: Date.now(),
    };
    setExpenses([newExpense, ...expenses]);
  };

  const deleteExpense = (id: string) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header totalExpenses={totalExpenses} expenseCount={expenses.length} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BudgetOverview expenses={expenses} />
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <ExpenseForm 
              onAddExpense={addExpense}
              categories={DEFAULT_CATEGORIES}
            />
          </div>
          
          <div className="lg:col-span-2">
            <ExpenseList 
              expenses={expenses}
              onDeleteExpense={deleteExpense}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;