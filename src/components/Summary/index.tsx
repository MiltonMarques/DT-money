import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { useSummary } from "../../hooks/useSummary";
import { pricerFormatter } from "../../utils/formatter";
import { SummaryCard, SummaryContainer } from "./styles";

export function Summary(){
    const summary= useSummary();
    return(
        
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entrada</span>
                    <ArrowCircleUp size={34} color="#00b37e"/>
                </header>
                <strong>{pricerFormatter.format(summary.income)}</strong>
            </SummaryCard>
            <SummaryCard>
                <header>
                    <span>Saidas</span>
                    <ArrowCircleDown size={34} color="#f75a68"/>
                </header>
                <strong>{pricerFormatter.format(summary.outcome)}</strong>
            </SummaryCard>

            <SummaryCard varient="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={34} color="#fff"/>
                </header>
                <strong>{pricerFormatter.format(summary.total)}</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}