import axios from 'axios';
import React, { useEffect, useState } from 'react';

const publicfc = () => {
  const [message, setMessage] = useState('no messages');

  useEffect(() => {
    (async () => {
      const response = await axios('http://127.0.0.1:5000/public');
      if (response.status === 200) {
        const content = await response.data;
        console.log(content);
        setMessage(content.message);
      }
    })();
  }, []);

  return (
    <>
      <h1>Message</h1>
      <h2>{message}</h2>
    </>
  );
};

export default publicfc;
