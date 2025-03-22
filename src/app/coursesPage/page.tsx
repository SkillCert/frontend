"use client";

import Image from "next/image";
import Rectangle from "../../../public/Rectangle.png"

const courses = [
  {
    id: 1,
    name: "Course Name",
    completed: 2,
    total: 10,
    nextLesson: "Lesson Name",
  },
  {
    id: 2,
    name: "Course Name",
    completed: 2,
    total: 10,
    nextLesson: "Lesson Name",
  },
  {
    id: 3,
    name: "Course Name",
    completed: 2,
    total: 10,
    nextLesson: "Lesson Name",
  },
  {
    id: 4,
    name: "Course Name",
    completed: 2,
    total: 10,
    nextLesson: "Lesson Name",
  },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-900 p-6 text-white flex flex-col items-center justify-center font-poppins">
      <h2 className="text-xl font-semibold text-[#C084FC] mb-4 mr-[780px]">
        My courses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        {courses.map((course) => (
          <div
            key={course.id}
            className="flex overflow-hidden rounded-lg bg-gray-800 shadow-md w-full max-w-md mx-auto"
          >
            <div className="w-1/3 bg-gray-200 flex items-center justify-center">
              <Image
                src={Rectangle}
                alt="Course Thumbnail"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-2/3 p-3 flex flex-col justify-between">
              <h3 className="text-sm font-semibold">{course.name}</h3>
              <p className="text-xs text-gray-400">
                {course.completed}/{course.total} lessons completed
              </p>
              <p className="text-xs text-gray-300">
                <span className="font-semibold text-white">Next Lesson:</span>{" "}
                {course.nextLesson}
              </p>
              <div className="flex items-center justify-between mt-2">
                <span className="bg-gray-900 text-white text-[10px] font-bold py-1 px-2 rounded-full border border-cyan-400">
                  <span className="text-cyan-400 px-[2px]">Level</span>
                </span>
                <button className="w-8 h-8 pl-1 flex items-center justify-center bg-purple-600 rounded-full hover:bg-purple-700">
                  ▶
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
