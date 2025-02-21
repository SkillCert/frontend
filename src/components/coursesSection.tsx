import CourseCard from "@/components/ui/courseCard";
import { mockCourses } from "@/lib/constants/mockData/courses";

const CoursesSection = () => {
  return (
    <section className="py-10 bg-gray-900 text-center">
      <h2 className="text-3xl font-light text-purple-600 mb-6">Featured Courses</h2>
      <div className="flex justify-center gap-6 flex-wrap">
        {mockCourses.map((course) => (
          <CourseCard key={course.id} title={course.title} description={course.description} image={course.image} />
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
