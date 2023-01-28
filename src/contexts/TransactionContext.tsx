import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lip/axios'

interface Transactions {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}
interface CreateTransanctioninputs {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface TransactionContextType {
  transactions: Transactions[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransanctioninputs) => Promise<void>
}

interface TransactionProvideProps {
  children: ReactNode
}

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionProvide({ children }: TransactionProvideProps) {
  const [transactions, setTransactions] = useState<Transactions[]>([])

  const fetchTransactions = useCallback(async (query?: string) => {
    const reponse = await api.get('Transaction', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(reponse.data)
  }, [])

  const createTransaction = useCallback(
    async (data: CreateTransanctioninputs) => {
      const { description, price, category, type } = data
      const response = await api.post('Transaction', {
        description,
        price,
        category,
        type,
        createdAt: new Date(),
      })
      setTransactions((state) => [response.data, ...state])
    },
    [],
  )
  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  return (
    <TransactionContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
