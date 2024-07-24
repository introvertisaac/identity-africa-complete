import Head from 'next/head';
import Faq from './components/Faq/Faq';
import HeroSection from './components/Home/HeroSection';
import Features from './components/Home/Features';
import IndustriesServed from './components/Home/IndustriesServed';
import SecurityCompliance from './components/Home/Compliance';

export default function Home() {
  return (
    <div className='w-full py-4 md:px-20 bg-[#FFFBF8]'>
      <main className="min-h-screen w-full bg-[#FFFBF8] py-10 md:pt-32">
        <div className="w-full">
          <HeroSection />
          <Features />
          <IndustriesServed />
          <SecurityCompliance />
          <Faq />
        </div>
      </main>
    </div>
  );
}
