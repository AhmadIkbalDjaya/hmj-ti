import { useEffect } from 'react';
import { useGetOrganizationStructure } from '../../../../hooks/useOraganizationStructure';

export const useOrganizationBoard = () => {
  const { structure, loading, fetchStructure } = useGetOrganizationStructure();

  useEffect(() => {
    fetchStructure();
  }, []);

  const executive_board = [];
  const deputies = [];

  structure.forEach((item) => {
    if (item.level == 0) {
      const member = item.assigned_members?.[0];
      executive_board.push(member);
    }
    if (item.level == 1) {
      deputies.push(item);
    }
  });

  return { executive_board, deputies, loading };
};
