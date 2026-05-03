import { useState } from 'react';
import { getOrganizationStructure } from '../services/organizationStructureService';

export const useGetOrganizationStructure = () => {
  const [structure, setStructure] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStructure = async () => {
    try {
      setLoading(true);
      const response = await getOrganizationStructure();
      setStructure(response.data);
      setLoading(false);
    } catch (error) {
      // handle error
    }
  };

  return { structure, loading, fetchStructure };
};
