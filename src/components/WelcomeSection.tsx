import React from "react";
import Link from "next/link";


const WelcomeSection: React.FC = () => {
  return (
    <section className="bg-dark text-white py-20 px-8 text-center font-poppins">
      <h1 className="text-7xl font-extrabold text-purple-500">
        Welcome to Skillcert
      </h1>
      <p className="text-base mt-3 text-gray-300">
        Empowering learners with cutting-edge online courses
      </p>
      <div className="flex justify-center gap-12 mt-10 max-w-5xl mx-auto">
        <div className="bg-gray-800 p-8 rounded-2xl w-96 text-left">
          <div className="flex items-center gap-3">
            <img src="/users.svg" alt="Users Icon" className="w-12 h-12" />
            <h2 className="text-3xl font-bold text-purple-500">1000+</h2>
          </div>
          <p className="text-gray-400 text-lg mt-2 pl-2">Active users</p>
        </div>
          <Link
            href="/coursesPage"
            className="bg-gray-800 p-8 rounded-2xl w-96 text-left"
          >
            <div className="flex items-center gap-3">
              <img
                src="/courses.svg"
                alt="Courses Icon"
                className="w-12 h-12"
              />
              <h2 className="text-3xl font-bold text-purple-500">200+</h2>
            </div>
            <p className="text-gray-400 text-lg mt-2 pl-2">Courses</p>
          </Link>
        <div className="bg-gray-800 p-8 rounded-2xl w-96 text-left">
          <div className="flex items-center gap-3">
            <img src="/users.svg" alt="Users Icon" className="w-12 h-12" />
            <h2 className="text-3xl font-bold text-purple-500">1000+</h2>
          </div>
          <p className="text-gray-400 text-lg mt-2 pl-2">Active users</p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
