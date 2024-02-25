import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { MdOutlinePercent } from "react-icons/md";
import {
  RiBarChart2Line,
  RiBarChartBoxLine,
  RiHandbagLine,
  RiUserLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { TbHexagonMinus } from "react-icons/tb";
import { PiChats } from "react-icons/pi";

const navArray = [
  {
    icons: <RxDashboard />,
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    icons: <MdOutlinePercent />,
    name: "Sales",
    path: "/sales",
  },
  {
    icons: <RiHandbagLine />,
    name: "Products",
    path: "/products",
  },
  {
    icons: <RiBarChartBoxLine />,
    name: "Reports",
    path: "/reports",
  },
  {
    icons: <RiUserLine />,
    name: "Customers",
    path: "/customer",
  },
  {
    icons: <RiBarChart2Line />,
    name: "Statists",
    path: "/statics",
  },
];

type childrenProps = {
  children: React.ReactNode;
};

const Sidebar = ({ children }: childrenProps) => {
  const userData = JSON.parse(localStorage.getItem("isAuthenticated") || "{}");
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);

  //console.log(userData);

  const handleToggle = (index: number) => {
    setOpenItemIndex((prevOpenItemIndex) =>
      prevOpenItemIndex === index ? null : index
    );
  };
  return (
    <main className="flex gap-2">
      <div className="w-[300px] h-[100vh] border-r-2 p-10 flex flex-col gap-4 bg-gray-50">
        <div className="flex gap-3 items-center">
          <img
            className="w-[50px] h-[45px] rounded-xl"
            src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"
            alt=""
          />
          <div>
            <p className="font-bold text-lg text-gray-500">
              {" "}
              {userData.retrievedUser.name}
            </p>
            <p className="font-medium text-gray-400">
              {" "}
              {userData.retrievedUser.email}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="mt-5 flex flex-col gap-4">
            {navArray.map((item, index) => (
              <Link to={item.path} key={index}>
                <div
                  //className="flex items-center gap-2 font-medium  py-2 rounded"
                  className={`flex items-center gap-2 font-medium  py-2 rounded ${
                    openItemIndex === index
                      ? "bg-gray-100 rounded-xl p-2"
                      : "bg-white"
                  }`}
                  onClick={() => handleToggle(index)}
                >
                  <p
                    className="
                  text-2xl
                  text-gray-600
                  "
                  >
                    {item.icons}
                  </p>
                  <p className="text-lg text-gray-600">{item.name}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mb-4">
            <Link to="#">
              <div className="flex items-center gap-1 font-medium p-3 rounded">
                <p className="text-2xl text-gray-600">
                  <TbHexagonMinus />
                </p>
                <p className="text-lg  text-gray-600">Settings</p>
              </div>
            </Link>

            <Link to="#">
              <div className="flex items-center gap-2 font-medium p-3 rounded">
                <p className="text-2xl text-gray-600">
                  <PiChats />
                </p>
                <p className="text-lg text-gray-600">Support</p>
              </div>
            </Link>
            <button
              className="bg-blue-500 w-full text-white px-3 py-2 rounded-md mt-5"
              onClick={() => {
                localStorage.removeItem("isAuthenticated");
                window.location.href = "/login";
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <main>{children}</main>
    </main>
  );
};

export default Sidebar;
