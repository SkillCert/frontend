import { FC } from "react";
import Button from "@/components/ui/button";

interface CourseCardProps {
  title: string;
  description: string;
  image?: string;
}

const CourseCard: FC<CourseCardProps> = ({ title, description, image }) => {
  const imageSrc = image || "/skillcert.svg"; 

  return (
    <div className="relative flex flex-col w-full max-w-[280px] min-h-[380px] border border-pink-900 rounded-[18px] p-2">
      <div className="bg-gray-800 rounded-[16px] shadow-md flex flex-col h-full overflow-hidden">
        <div className="flex-1 bg-gray-700 flex items-center justify-center rounded-t-[16px]">
          <img src={imageSrc} alt={title} className="w-full h-full object-cover rounded-t-[16px]" />
        </div>
        <div className="p-5 text-left flex-1 flex flex-col">
          <h3 className="text-2xl font-medium text-cyan-400">{title}</h3>
          <p className="text-gray-300 text-base mt-2 flex-grow">{description}</p>
          <div className="mt-auto flex justify-center">
            <Button text="Enroll Now" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;