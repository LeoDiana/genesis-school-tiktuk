import React, { useCallback, useEffect, useState } from 'react';

import { AxiosError } from 'axios';

import { Alert, Snackbar } from '@mui/material';
import { instance } from '../../api/axiosConfig';

const isClientError = (error: AxiosError) => (
  error.response?.config?.method === 'get'
    && error.response?.status >= 400
    && error.response?.status < 500
);

const ErrorHandler = () => {
  const [message, setMessage] = useState('');

  const handleClose = useCallback(() => {
    setMessage('');
  }, []);

  useEffect(() => {
    instance.interceptors.response.use(undefined, (error) => {
      console.log(error);
      const errorMessage = isClientError(error)
        ? `Client error occurred: ${error.message}`
        : `Server error occurred ${error.message}`;
      setMessage(errorMessage);
      return Promise.reject(error);
    });
  }, []);

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={Boolean(message)}
      autoHideDuration={4000}
      onClose={handleClose}
    >
      <Alert severity="error" variant="filled">
        {message}
      </Alert>
    </Snackbar>
  );
};

export default ErrorHandler;
