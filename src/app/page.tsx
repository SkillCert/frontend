import CoursesSection from '@/components/coursesSection';
import Footer from '@/components/footer';
import Navbar from '@/components/nabvar';
import StellarSection from '@/components/stellarSection';
import WelcomeSection from '@/components/WelcomeSection';
import AboutUs from '@/components/about-us';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className='mx-[200px]'>
        <Navbar />
        <WelcomeSection />
        <CoursesSection />
        <StellarSection />
        <AboutUs/>
      </div>
      <Footer />
    </div>
  );
}
