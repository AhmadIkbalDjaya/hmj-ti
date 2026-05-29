import { useState } from 'react';
import { useSnackbar } from 'notistack';
import { createComplaint as createComplaintService } from '../services/complaintService';

export const useCreateComplaint = ({ onSuccess = () => {} } = {}) => {
  const { enqueueSnackbar } = useSnackbar();
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
      const message = result.message ?? 'Pesan berhasil dikirim';
      enqueueSnackbar(message, { variant: 'success' });

      return result;
    } catch (error) {
      setErrors(error?.errors ?? {});

      if (error?.status !== 422) {
        const message = error?.message ?? 'Gagal mengirim pesan';
        enqueueSnackbar(message, { variant: 'error' });
      }
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
