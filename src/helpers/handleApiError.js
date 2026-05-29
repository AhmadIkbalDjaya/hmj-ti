class ApiError extends Error {
  constructor(message, errors = null, status = null) {
    super(message);
    this.name = 'ApiError';
    this.errors = errors;
    this.status = status;
  }
}

const handleApiError = (
  error,
  defaultMessage = 'Terjadi kesalahan. Silakan coba lagi',
) => {
  let message = defaultMessage;
  let errors = null;
  let status = null;

  if (error.response) {
    const { data } = error.response;
    status = error.response.status;

    if (status >= 500) {
      message = 'Terjadi kesalahan pada server. Silakan coba lagi';
    } else if (status >= 400 && status < 500) {
      if (status === 422 && data?.errors) {
        errors = data.errors;
      }
      message = data?.message || 'Permintaan gagal. Periksa kembali input Anda';
    }
  } else if (error.request) {
    message = 'Terjadi gangguan jaringan. Silakan coba lagi';
  }

  throw new ApiError(message, errors, status);
};

export default handleApiError;
