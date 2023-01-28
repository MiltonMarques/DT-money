import { useContextSelector } from 'use-context-selector'
import { TransactionContext } from '../contexts/TransactionContext'

export function UseSummary() {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions
  })
  const Summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price
        acc.total += transaction.price
      } else {
        acc.outcome += transaction.price
        acc.total -= transaction.price
      }
      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )
  return Summary
}
