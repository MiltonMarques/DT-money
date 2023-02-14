import { ThemeProvider } from "styled-components";
import { TransactionsProvider } from "./Context/TransactionsContext";
import { Transactions } from "./pages/Transactions";
import { GlobalStyled } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme= {defaultTheme}>
    <GlobalStyled/>

    <TransactionsProvider>
      <Transactions/>
    </TransactionsProvider>
    </ThemeProvider>
  )
}
