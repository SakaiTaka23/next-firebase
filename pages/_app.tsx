import { AppProps } from 'next/app';
import '../styles/globals.css';
import AuthContext from '../src/lib/AuthContext';
import authReducer from '../src/lib/authReducer';
import { listenAuthState } from '../src/lib/firebase';
import { useEffect, useReducer } from 'react';

const App = ({ Component, pageProps }: AppProps) => {
  const [state, dispatch] = useReducer(authReducer.reducer, authReducer.initialState);
  useEffect(() => {
    return listenAuthState(dispatch);
  }, []);

  return (
    <AuthContext.Provider value={state}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
};

export default App;
