import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/header'
import { Summary } from '../../components/summary'
import { TransactionContext } from '../../contexts/TransactionContext'
import { dateFormatter, priceFomatter } from '../../utilis/formatis'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighLight,
  TransactionContainer,
  TransactionTable,
} from './styles'

export function Transaction() {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions
  })

  return (
    <div>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighLight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFomatter.format(transaction.price)}
                    </PriceHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  )
}
