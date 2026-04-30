import { useState } from 'react';
import { api } from '../../../../lib/api';

export const useFeedbackForm = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post('/message', data);
      document.getElementById('feedbackForm').reset();
      setData({});
      setLoading(false);
      alert('Pesan berhasil dikirim!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    handleChange,
    handleSubmit,
  };
};
