import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/globals.css';
import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default App;
