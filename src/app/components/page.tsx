import Navbar from './nabvar';

import Image from 'next/image';
import { FiCheckCircle } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1F1F2E] text-white">
      <Navbar />
      <main className="container mx-auto py-20 px-4">
        <h1 className="text-5xl font-bold text-center text-[#9F47F2] mb-8">
          Welcome to Skillcert
        </h1>
        <p className="text-center text-gray-300 text-lg mb-12">
          Learn new skills and earn certifications with the best online courses.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-10 mb-16">
          <Image
            src="/skillcert_logo.png"
            alt="Skillcert Logo"
            width={200}
            height={200}
            className="rounded-full shadow-lg"
          />
          <div className="max-w-md">
            <h2 className="text-3xl font-semibold text-[#9F47F2] mb-4">
              Why Choose Skillcert?
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center space-x-2">
                <FiCheckCircle className="text-green-400 text-xl" />
                <span>Globally recognized certifications.</span>
              </li>
              <li className="flex items-center space-x-2">
                <FiCheckCircle className="text-green-400 text-xl" />
                <span>Access to up-to-date and relevant content.</span>
              </li>
              <li className="flex items-center space-x-2">
                <FiCheckCircle className="text-green-400 text-xl" />
                <span>Personalized support and career guidance.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-block bg-[#9F47F2] text-white px-6 py-3 rounded-full hover:bg-[#7C3AB5] transition duration-300 shadow-lg"
          >
            Get Started Now
          </a>
        </div>
      </main>
    </div>
  );
}
