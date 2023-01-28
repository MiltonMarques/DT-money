export const dateFormatter = new Intl.DateTimeFormat('PT-BR')

export const priceFomatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})
