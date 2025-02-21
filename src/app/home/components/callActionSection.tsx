import React from "react";

const staticData = {
	heading: "Ready to Start Learning?",
	subText: "Join thousands of students and instructors in our growing community.",
	actionButtons: ["Create an Account", "Become an instructor"],
};

const CallActionSection = () => {
	return (
		<section className="flex flex-col items-center gap-5  justify-center p-7 bg-gray-900">
			<h2 className=" text-purple-700 text-2xl md:text-3xl font-medium">
				{staticData.heading}
			</h2>
			<p className=" text-gray-400 md:text-xl text-center">{staticData.subText}</p>
			<div className=" flex items-center gap-[50px] gap-y-5 flex-wrap justify-center">
				{staticData.actionButtons.map((action, idx) => (
					<button
						key={action}
						className={` py-[10px] px-5 w-[220px] md:w-[300px] rounded-[25px] cursor-pointer text-sm md:text-base ${
							idx === 0 ? "bg-purple-600" : " bg-pink-800"
						}`}
					>
						{action}
					</button>
				))}
			</div>
		</section>
	);
};

export default CallActionSection;
