import React from 'react';
import { TrendingUp, DollarSign, Calendar, PieChart } from 'lucide-react';
import { Expense } from '../types';

interface BudgetOverviewProps {
  expenses: Expense[];
}

export function BudgetOverview({ expenses }: BudgetOverviewProps) {
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  
  const monthlyExpenses = expenses.filter(expense => {
    const expenseDate = new Date(expense.date);
    return expenseDate.getMonth() === currentMonth && expenseDate.getFullYear() === currentYear;
  }).reduce((sum, expense) => sum + expense.amount, 0);

  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {} as Record<string, number>);

  const topCategory = Object.entries(categoryTotals)
    .sort(([, a], [, b]) => b - a)[0];

  const averageExpense = expenses.length > 0 ? totalExpenses / expenses.length : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Spent</p>
            <p className="text-2xl font-bold text-gray-900">₹{totalExpenses.toFixed(2)}</p>
          </div>
          <div className="bg-blue-100 p-3 rounded-lg">
            <DollarSign className="h-6 w-6 text-blue-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">This Month</p>
            <p className="text-2xl font-bold text-gray-900">₹{monthlyExpenses.toFixed(2)}</p>
          </div>
          <div className="bg-green-100 p-3 rounded-lg">
            <Calendar className="h-6 w-6 text-green-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Average</p>
            <p className="text-2xl font-bold text-gray-900">₹{averageExpense.toFixed(2)}</p>
          </div>
          <div className="bg-purple-100 p-3 rounded-lg">
            <TrendingUp className="h-6 w-6 text-purple-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Top Category</p>
            <p className="text-lg font-bold text-gray-900">
              {topCategory ? topCategory[0] : 'None'}
            </p>
            <p className="text-sm text-gray-500">
              ₹{topCategory ? topCategory[1].toFixed(2) : '0.00'}
            </p>
          </div>
          <div className="bg-orange-100 p-3 rounded-lg">
            <PieChart className="h-6 w-6 text-orange-600" />
          </div>
        </div>
      </div>
    </div>
  );
}
