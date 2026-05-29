import { useState } from 'react';
import { createComplaint as createComplaintService } from '../services/complaintService';

export const useCreateComplaint = ({ onSuccess = () => {} } = {}) => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const createComplaint = async (form) => {
    try {
      setLoading(true);
      setErrors({});
      const result = await createComplaintService({
        name: form.name,
        email: form.email,
        phone: form.phone,
        institute: form.institute,
        description: form.description,
      });

      onSuccess?.(result);
      // enqueueSnackbar(message, { variant: 'success' });

      return result;
    } catch (error) {
      setErrors(error?.response?.data?.errors ?? {});
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    errors,
    createComplaint,
  };
};
