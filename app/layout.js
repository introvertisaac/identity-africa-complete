// app/layout.js
import './globals.css';
import '@/app/styles/fonts.css'; // Import the custom fonts CSS
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

export const metadata = {
  title: 'Identity Africa',
  description: 'Empowering Afrika with Secure Identity Verification',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-[#FFFBF8]">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
