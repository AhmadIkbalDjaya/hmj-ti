import { useState } from 'react';
import { useCreateComplaint } from '../../../../hooks/useComplaint';

export const useFeedbackForm = () => {
  const [data, setData] = useState({});
  const { loading, errors, createComplaint } = useCreateComplaint({
    onSuccess: () => {
      document.getElementById('feedbackForm')?.reset();
      setData({});
    },
  });

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createComplaint(data);
  };

  return {
    data,
    loading,
    errors,
    handleChange,
    handleSubmit,
  };
};
