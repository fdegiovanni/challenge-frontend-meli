const REGIONS = {
  ARS: 'es-AR',
  USD: 'en-US'
};

export default function formatMoney (amount, options) {
  options.minimumFractionDigits = (amount % 100 == 0) ? options.minimumFractionDigits : 0;
  var n = amount.toLocaleString(REGIONS[options.currency], options);
  var p = n.indexOf(',');
  return n.replace(
    /\d(?=(?:\d{3})+(?:\,|$))/g,
    (m, i) => p < 0 || i < p ? `${m}.` : m
  );
}