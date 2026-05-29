import { useState } from 'react';
import { useCreateComplaint } from '../../../../hooks/useComplaint';

export const useFeedbackForm = () => {
  const [data, setData] = useState({});
  const { loading, errors, createComplaint } = useCreateComplaint({
    onSuccess: () => {
      document.getElementById('feedbackForm')?.reset();
      setData({});
      alert('Pesan berhasil dikirim!');
    },
  });

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createComplaint(data);
    } catch (error) {
      console.error('Error submitting form:', error);
      const validationErrors = error?.response?.data?.errors ?? {};
      if (Object.keys(validationErrors).length === 0) {
        alert('Error submitting form. Please try again.');
      }
    }
  };

  return {
    data,
    loading,
    errors,
    handleChange,
    handleSubmit,
  };
};
