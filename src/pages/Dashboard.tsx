import { RiSearchLine } from "react-icons/ri";
import { VscBell } from "react-icons/vsc";

const Dashboard = () => {
  const userData = JSON.parse(localStorage.getItem("isAuthenticated") || "{}");
  return (
    <div className="p-6 w-[80vw] bg-slate-50">
      <header className="flex justify-between w-full">
        <div className="font-bold text-3xl">
          <p>Welcome Back</p>
          <p>{userData.retrievedUser.name}!</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 p-2 rounded-xl border-2 border-gray-300">
            <RiSearchLine className="text-gray-900 text-xl" />
            <input
              type="text"
              placeholder="Search"
              className="border-none outline-none bg-transparent"
            />
          </div>
          <div className="flex items-center gap-2 p-2 rounded-xl border-2 border-gray-300">
            <VscBell className="text-2xl" />
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-10 py-12 bg-purple-600 rounded-3xl backgroundWithImage">
          <p className="text-sm font-medium text-white">Total Clients</p>
          <p className="text-4xl font-semibold text-white">3,248</p>
        </div>
        <div className="p-10 py-12 bg-purple-600 rounded-3xl backgroundWithImage2">
          <p className="text-sm font-medium text-white">Total Orders</p>
          <p className="text-4xl font-semibold text-white">3,248</p>
        </div>
        <div className="p-10 py-12 bg-purple-600 rounded-3xl backgroundWithImage3">
          <p className="text-sm font-medium text-white">Total Revenue</p>
          <p className="text-4xl font-semibold text-white">3,248</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
