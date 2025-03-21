import Footer from "@/components/footer";
import Navbar from "@/components/nabvar";
import UserRegister from "./components/userRegister";

export default function page() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="mx-[200px]">
        <Navbar />
      </div>
      <UserRegister />
      <Footer />
    </div>
  );
}
