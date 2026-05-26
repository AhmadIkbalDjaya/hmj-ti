export const PAGE_LIMIT = 10;
export const START_BATCH_YEAR = 2020;

export const STATUS_OPTIONS = [
  { value: 'active', label: 'Aktif', color: '#11845B', background: '#DFF9EC' },
  {
    value: 'inactive',
    label: 'Tidak Aktif',
    color: '#637381',
    background: '#F4F6F8',
  },
  {
    value: 'transferred',
    label: 'Pindah',
    color: '#B76E00',
    background: '#FFF1D6',
  },
  {
    value: 'graduated',
    label: 'Lulus',
    color: '#375DFB',
    background: '#DBE7FF',
  },
];

export const getStatusOption = (status) =>
  STATUS_OPTIONS.find((item) => item.value === status) ?? {
    value: status,
    label: status || '-',
    color: '#454F5B',
    background: '#F4F6F8',
  };

export const createBatchOptions = () => {
  const currentYear = new Date().getFullYear();
  const optionCount = Math.max(currentYear - START_BATCH_YEAR + 1, 1);

  return Array.from({ length: optionCount }, (_, index) =>
    String(currentYear - index),
  );
};
