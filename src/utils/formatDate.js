export function formatDate(timestamp) {
  const indonesianMonths = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  const date = new Date(timestamp);
  return [
    String(date.getDate()).padStart(2, '0'),
    indonesianMonths[date.getMonth()],
    date.getFullYear(),
  ].join('-');
}
