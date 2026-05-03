import { useState } from 'react';
import { createComplaint as createComplaintService } from '../services/complaintService';

export const useCreateComplaint = ({ onSuccess = () => {} } = {}) => {
  const [loading, setloading] = useState();
  const [errors, setErrors] = useState([]);

  const createComplaint = async (form) => {
    try {
      setloading(true);
      const result = await createComplaintService({
        name: form.name,
        email: form.email,
        phone: form.phone,
        institute: form.institute,
        description: form.description,
      });
      onSuccess?.call();

      const message = result.message ?? 'Pesan berhasil dikirim';
      // enqueueSnackbar(message, { variant: 'success' });
    } catch (error) {
    } finally {
      setloading(false);
    }
  };

  return {
    loading,
    errors,
    createComplaint,
  };
};
