import Link from 'next/link';
import '../styles/globals.css';
import Footer from '../components/footer.js'

export default function App({ Component, pageProps }) {
  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
        <Link href="/">Home</Link> | <Link href="/about">About</Link>
      </nav>
      <Component {...pageProps} />
      <Footer />
      </div>
    </>
  );
}