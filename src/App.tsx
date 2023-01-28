import { ThemeProvider } from 'styled-components'
import { TransactionProvide } from './contexts/TransactionContext'
import { Transaction } from './pages/transaction'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <TransactionProvide>
        <Transaction />
      </TransactionProvide>
    </ThemeProvider>
  )
}
