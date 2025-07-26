export interface Expense {
  id: string;
  amount: number;
  category: string;
  description: string;
  date: string;
  createdAt: number;
}

export interface BudgetState {
  expenses: Expense[];
  categories: string[];
}