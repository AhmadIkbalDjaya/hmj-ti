import { useState } from 'react';
import { useSnackbar } from 'notistack';
import { getOrganizationStructure } from '../services/organizationStructureService';

export const useGetOrganizationStructure = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [structure, setStructure] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStructure = async () => {
    try {
      setLoading(true);
      const response = await getOrganizationStructure();
      setStructure(response.data);
      setLoading(false);
    } catch (error) {
      const message = error?.message ?? 'Gagal mengambil data';
      enqueueSnackbar(message, { variant: 'error' });
    }
  };

  return { structure, loading, fetchStructure };
};
