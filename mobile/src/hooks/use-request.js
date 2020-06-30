import axios from 'axios';
import { useState } from 'react';

export default () => {
  const [errors, setErrors] = useState([]);
  const [data, setData] = useState({});

  const doRequest = async (url, method, body) => {
    setErrors(null);
    setData(null);

    try {
      const response = await axios[method](url, body);
      setData(response.data);
    } catch (error) {
      if (error.response.data.errors) setErrors(error.response.data.errors);
      else {
        setErrors([{ message: 'Network error' }]);
      }
    }
  };

  return { response: { data, errors }, doRequest };
};
