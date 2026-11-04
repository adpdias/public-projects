export type TransactionStatus = 'pending' | 'completed';

export type Transaction = {
  id: string;
  title: string;
  amount: number;
  created_at: number;
  status: TransactionStatus;
  user_id: number;
};

export type TransactionDashBoard = Omit<Transaction, 'id' | 'title' | 'status' | 'user_id'>;

export type ApiGetTransactions = {
  transactions: {
    itemsReceived: number,
    curPage: number,
    nextPage: number,
    prevPage: number,
    offset: number,
    itemsTotal: number,
    pageTotal: number,
    items: Transaction[];
  }
};

export type ApiGetTransaction = {
    transaction: Transaction;
}

export type ApiGetDashboard = {
    transactions: TransactionDashBoard[],
    pending_transactions: number,
    completed_transactions: number,
}

export type ApiNewTransaction = {
    transaction: Transaction;
}

export type ApiUpdateTransaction = {
    transaction: Transaction;
}

export type ApiDeleteTransaction = {
    success: boolean;
}