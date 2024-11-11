import { React, useState } from "react";
import { IoCarSportOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar() {
  let Links = [
    { name: "Home", link: "/" }, //links de ejemplo
    { name: "Nosotros", link: "/aboutus" },
    //añadir más links aquí
  ];

  let [open, setOpen] = useState(false); //estado para el menú hamburguesa

  return (
    <nav className="border shadow-sm w-full top-0 left-0 sticky">
      <div className="bg-white w-full top-0 sticky left-0">
        <div className=" space-x-2 flex flex-row items-center justify-end px-24 py-2">
          <img
            src=""
            alt="logo"
            className="flex items-start justify-start mr-auto"
          />{" "}
          {/* //añadir logo */}
          <ul className="text-[#1DBF73] flex flex-row gap-3 p-2 left-0 z-auto font-medium">
            {Links.map((link) => (
              <li key={link.link} className="">
                <Link
                  to={link.link}
                  className="flex p-2 items-center text-[#404145] hover:rounded hover:text-[#19A463]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <button
              onClick={() =>
                (window.location.href = "/seller_onboarding/overview")
              }
              className="items-center border border-[#19A463] text-[#19A463] rounded-[5px_5px_5px_5px] md:ml-8 w-16 hover:bg-[#19A463] hover:text-white"
            >
              {" "}
              Join{" "}
            </button>
          </ul>
        </div>
        <div className="w-full h-[2px] bg-[#19A463]"></div>
      </div>
    </nav>
  );
}

export default Navbar;
