import { Button } from "@/components/Button";

export default function UserRegister() {
  return (
    <div className="flex justify-center items-center py-12 lg:py-36">
      <div className="w-full max-w-xs md:max-w-3xl lg:max-w-5xl">
        <form className="space-y-12">
          <div className="space-y-5 md:space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20 lg:gap-40">
              <div>
                <label
                  htmlFor="name"
                  className="block text-purple-400 text-2xl md:text-3xl lg:text-4xl pl-7 mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="w-full bg-gray-800 border border-purple-600 h-12 md:h-[71px] rounded-full px-7 py-5 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lastname"
                  className="block text-purple-400 text-2xl md:text-3xl lg:text-4xl pl-7 mb-2"
                >
                  Lastname
                </label>
                <input
                  id="lastname"
                  name="lastname"
                  type="text"
                  placeholder="Lastname"
                  className="w-full bg-gray-800 border border-purple-600 h-12 md:h-[71px] rounded-full px-7 py-5 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-purple-400 text-2xl md:text-3xl lg:text-4xl pl-7 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                className="w-full bg-gray-800 border border-purple-600 h-12 md:h-[71px] rounded-full px-7 py-5 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20 lg:gap-40">
              <div>
                <label
                  htmlFor="password"
                  className="block text-purple-400 text-2xl md:text-3xl lg:text-4xl pl-7 mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="w-full bg-gray-800 border border-purple-600 h-12 md:h-[71px] rounded-full px-7 py-5 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block text-purple-400 text-2xl md:text-3xl lg:text-4xl pl-7 mb-2"
                >
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full bg-gray-800 border border-purple-600 h-12 md:h-[71px] rounded-full px-7 py-5 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Button type="submit" className="bg-purple-600">
              Register
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
