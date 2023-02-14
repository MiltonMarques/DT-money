export const dateFormatter = new Intl.DateTimeFormat('pt-BR');

export const pricerFormatter = new Intl.NumberFormat('pt-BR',{
    style:'currency',
    currency:'BRL',
})