export const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  currencyDisplay: 'narrowSymbol',
  maximumFractionDigits: 2,    
});