import { React, useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/logo-2-ml-blank.jpeg";
import { isDragActive } from "framer-motion";
import Chat from "../Chat/Chat";
import { FaComments } from "react-icons/fa";

function Navbar() {
  let Links = [
    { name: "Home", link: "/" }, //links de ejemplo
    { name: "About us", link: "/aboutus" },
    //añadir más links aquí
  ];

  let [open, setOpen] = useState(false); //estado para el menú hamburguesa
  const [chatOpen, setChatOpen] = useState(false);
  const [role, setRole] = useState(null);

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  const roleMapping = {
    1: "Visitante",
    2: "Freelancer",
    3: "Cliente",
    4: "Administrador",
  };

  useEffect(() => {
    const storedRoleId = localStorage.getItem("typeRole") || "visitante";
    setRole(storedRoleId);
  }, []);
  // const role = roleMapping[role_id] || 'Visitante';

  const navOptions = {
    freelancer: [
      { name: "Home", link: "/" },
      { name: "Dashboard", link: "freelancer/dashboard" },
    ],
    client: [
      { name: "Home", link: "/" },
      { name: "About us", link: "/aboutus" },
      { name: "My profile", link: "/profile" },
    ],
    visitante: [
      { name: "Home", link: "/" },
      { name: "About us", link: "/aboutus" },
    ],
  };

  return (
    <>
      <nav className="border shadow-sm w-full z-20 top-0 left-0 sticky">
        <div className="bg-white w-full top-0 sticky left-0">
          <div className=" space-x-2 flex flex-row items-center justify-end md:px-24 px-4 py-2">
            <img
              src={logo}
              alt="logo"
              className="flex items-start justify-start mr-auto w-12 h-12 md:flex md:justify-end"
            />{" "}
            {/* //añadir logo */}
            <div
              onClick={() => setOpen(!open)}
              className=" z-30 text-3xl absolute right-5 top-[25px] -m-2 cursor-pointer md:hidden text-[#19A463]"
            >
              {open ? <IoClose /> : <RxHamburgerMenu />}
            </div>
            <ul
              className={`-mt-4 md:flex md:items-center md:pb-0 pb-5 -mb-[15px] absolute md:static bg-white md:z-auto z-[-1] -left-[8px] w-full md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in ${
                open ? "top-20" : "top-[-490px]"
              } md:opacity-100`}
            >
              {role &&
                navOptions[role]?.map((link) => (
                  <li key={link.link}>
                    <NavLink
                      to={link.link}
                      className={({ isActive }) =>
                        `flex p-2 items-center text-[#19A463] hover:text-[#19A463] ${
                          isActive
                            ? "text-[#19A463] font-bold border-b-2 md:w-24 md: flex md:justify-center w-24 border-[#19A463]"
                            : "text-[#404145]"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              {(role === "freelancer" || role === "client") && (
                <button onClick={toggleChat} className="flex md:flex-row">
                  <FaComments className="text-[#404145] text-xl hover:text-[#19A463] ml-3" />
                </button>
              )}
              {!role && (
                <>
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `flex p-2 items-center text-[#19A463] hover:text-[#19A463] ${
                          isActive
                            ? "text-[#19A463] font-bold border-b-2 md:w-24 md: flex md:justify-center w-24 border-[#19A463]"
                            : "text-[#404145]"
                        }`
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/aboutus"
                      className={({ isActive }) =>
                        `flex p-2 items-center text-[#19A463] hover:text-[#19A463] ${
                          isActive
                            ? "text-[#19A463] font-bold border-b-2 md:w-24 md: flex md:justify-center w-24 border-[#19A463]"
                            : "text-[#404145]"
                        }`
                      }
                    >
                      About us
                    </NavLink>
                  </li>
                  <button
                    onClick={() => (window.location.href = "/LoginRegister")}
                    className="items-center border border-[#19A463] text-[#19A463] rounded-[5px_5px_5px_5px] md:ml-8 w-16 hover:bg-[#19A463] hover:text-white hover:scale-110 p-1 mt-3 md:mt-0"
                  >
                    Login
                  </button>
                </>
              )}
              {role === "client" && (
                <button
                  onClick={() =>
                    (window.location.href = "/seller_onboarding/overview")
                  }
                  className="items-center border border-[#19A463] text-[#19A463] rounded-[5px_5px_5px_5px] md:ml-8 w-16 hover:bg-[#19A463] hover:text-white hover:scale-110 p-1 mt-3 md:mt-0"
                >
                  {" "}
                  Join{" "}
                </button>
              )}
            </ul>
          </div>
          <div className="w-full h-[2px] bg-[#19A463]"></div>
        </div>
      </nav>
      <Chat isOpen={chatOpen} onClose={toggleChat} />
    </>
  );
}

export default Navbar;
