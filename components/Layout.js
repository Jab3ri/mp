// components/Layout.js
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('./Navbar'), { ssr: false });
const Footer = dynamic(() => import('./Footer'), { ssr: false });

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="bg-blue-50">{children}</main>
      <Footer />
    </div>
  );
}
