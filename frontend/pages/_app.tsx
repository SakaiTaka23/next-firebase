import { AppProps } from 'next/app';
import '../styles/globals.css';
import AuthContext from '../src/lib/AuthContext';
import authReducer from '../src/lib/authReducer';
import { Firebase, firebaseUser, listenAuthState } from '../src/lib/firebase';
import { useEffect, useReducer } from 'react';

const App = ({ Component, pageProps }: AppProps) => {
  const [state, dispatch] = useReducer(authReducer.reducer, authReducer.initialState);
  useEffect(() => {
    return listenAuthState(dispatch);
  }, []);

  useEffect(() => {
    const setToken = async () => {
      const token = await firebaseUser()?.getIdToken();
      localStorage.setItem('token', token);
    };
    setToken();
  }, []);

  return (
    <AuthContext.Provider value={state}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
};

export default App;
