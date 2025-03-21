
"use client"

export default function SidebarSettings() {
  return (
    <div className="top-[239px] left-[4369px] w-[288px] h-[909px] bg-[#1E2A3B] rounded-lg">
      <div className="flex flex-col items-center pt-[40px]">
        <div className="w-[140px] h-[140px] rounded-full bg-white"></div>

        <p className="mt-4 font-poppins font-medium text-[29px] leading-[100%] text-center text-[#9333EA]">User name</p>
      </div>

      <div className="w-[80%] h-[1px] bg-[#9333EA] mx-auto mt-6"></div>

      <div className="w-[239px] mx-auto mt-6 flex flex-col gap-[20px] font-poppins font-medium">
        <button className="text-[#9333EA] text-[29px] font-medium text-center font-poppins">My Profile</button>
        <button className="text-[#9333EA] text-[29px] font-medium text-center font-poppins">Password</button>
        <button className="text-[#9333EA] text-[29px] font-medium text-center font-poppins">Settings</button>
        <button className="text-[#9333EA] text-[29px] font-medium text-center font-poppins">Settings</button>
      </div>
    </div>
  )
}

