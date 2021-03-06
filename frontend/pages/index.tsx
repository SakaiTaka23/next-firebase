// import Link from "next/link";
import Layout from '../components/Layout';
import { Login, Logout, auth } from '../src/lib/firebase';

const IndexPage = () => (
  <Layout title='Home | Next.js + TypeScript Example'>
    <h1>Hello Next.js π</h1>
    <div>
      <button onClick={() => Login()}>γ­γ°γ€γ³</button>
      <button onClick={() => Logout()}>γ­γ°γ’γ¦γ</button>
    </div>
    <div>
      <pre>{auth.currentUser ? auth.currentUser.displayName + 'γ§γ­γ°γ€γ³γγ¦γγΎγ' : 'γ­γ°γ€γ³γγ¦γγΎγγ'}</pre>
    </div>
  </Layout>
);

export default IndexPage;
