import axios from 'axios';
import React, { useEffect, useState } from 'react';

const privatefc = () => {
  const [message, setMessage] = useState('no messages');

  useEffect(() => {
    (async () => {
      await axios('http://127.0.0.1:5000/private', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
        .then((response) => {
          const content = response.data;
          console.log(content);
          setMessage(content.message);
        })
        .catch((error) => {
          if (error.response.status === 401) {
            setMessage('Login to see private message');
          }
        });
    })();
  }, []);

  return (
    <>
      <h1>Message</h1>
      <h2>{message}</h2>
    </>
  );
};

export default privatefc;
