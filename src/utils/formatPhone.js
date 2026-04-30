export function formatPhoneNumber(number) {
  return number.replace(/(\d{4})(\d{4})(\d{4})/, '$1-$2-$3');
}
