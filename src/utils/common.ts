export function convertToCurrency(input: string | number) {
  const numericValue = parseFloat(String(input));

  if (isNaN(numericValue)) {
    return 'Invalid input';
  }

  const formattedValue = numericValue.toLocaleString('en-US', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0,
    maximumFractionDigits: numericValue % 1 === 0 ? 0 : 3,
  });

  return formattedValue;
}
