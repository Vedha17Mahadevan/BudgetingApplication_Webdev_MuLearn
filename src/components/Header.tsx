import React from 'react';
import { Wallet, TrendingUp } from 'lucide-react';

interface HeaderProps {
  totalExpenses: number;
  expenseCount: number;
}

export function Header({ totalExpenses, expenseCount }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Wallet className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Budget Tracker</h1>
              <p className="text-gray-600">Manage your finances with ease</p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-right">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-600">Total Spent</span>
              </div>
              <p className="text-2xl font-bold text-gray-900">₹{totalExpenses.toFixed(2)}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-600">Transactions</p>
              <p className="text-2xl font-bold text-gray-900">{expenseCount}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}