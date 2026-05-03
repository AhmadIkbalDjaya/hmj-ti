import { api } from '../lib/api';

export const getOrganizationStructure = async () => {
  try {
    const response = await api.get('/organizational-structure');

    return response.data;
  } catch (error) {
    // handle error
  }
};
