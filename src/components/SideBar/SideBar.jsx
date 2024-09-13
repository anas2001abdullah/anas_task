import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/TrendLogo.png";
const navigation = [
  { name: "HomePage", href: "#" },
  { name: "Trading", href: "/products" },
  { name: "About us", href: "#" },
  { name: "Contact us", href: "#" },
];

const SideBar = ({ user, onLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-purple-600 border-b border-purple-400 px-10">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="flex ms-2 md:me-24">
                <img src={logo} className="h-20 me-3" alt="Logo" />
              </Link>
            </div>

            <div className="flex items-center ms-3 text-purple-950">
              {user ? (
                <Link
                  to="/login"
                  className="text-base font-semibold leading-6 text-purple-950 hover:text-purple-300"
                >
                  Log in
                </Link>
              ) : (
                <button
                  onClick={onLogout}
                  className="text-base font-semibold leading-6 text-purple-950 hover:text-purple-300"
                >
                  Sign Out
                </button>
              )}
              <button
                type="button"
                className="ms-2 inline-flex items-center p-2 text-sm text-purple-500 rounded-lg sm:hidden hover:bg-purple-100 dark:text-purple-400 dark:hover:bg-purple-700"
                onClick={toggleSidebar}
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <aside
        className={`fixed top-0 right-0 z-40 w-64 h-screen pt-28 transition-transform bg-purple-600 border-l border-purple-400  ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } sm:translate-x-0`}
      >
        <div className="h-full px-3 pb-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={toggleSidebar}
                className="text-lg flex items-center p-2 text-purple-200 rounded-lg hover:bg-purple-900"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
