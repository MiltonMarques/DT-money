import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { UseSummary } from '../../hooks/useSummary'
import { priceFomatter } from '../../utilis/formatis'
import { SummaryCard, SummaryContainer } from './styles'

export function Summary() {
  const Summary = UseSummary()
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span> Entradas </span>
          <ArrowCircleUp size={34} color="#00b37e" />
        </header>
        <strong>{priceFomatter.format(Summary.income)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span> Saidas </span>
          <ArrowCircleDown size={34} color="#f75a68" />
        </header>
        <strong>{priceFomatter.format(Summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span> Total </span>
          <CurrencyDollar size={34} color="#00b37e" />
        </header>
        <strong>{priceFomatter.format(Summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
