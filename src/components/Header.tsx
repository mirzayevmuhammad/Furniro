import { MenuOutlined } from "@ant-design/icons";
import Icon from "./ui/Icon";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="flex justify-between px-[35px] sm:pl-[55px]  sm:pr-[0px] sm:py-8 py-5 bg-white  w-full fixed  z-40 shadow-md">
        <div>
          <img src="logo.svg" alt="logo" />
        </div>
        <nav className="hidden sm:flex gap-x-15 items-center transition-all ml-43">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-[17px] font-medium ${
                isActive ? "text-[#bd973f]" : "text-black"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `text-[17px] font-medium ${
                isActive ? "text-[#bd973f]" : "text-black"
              }`
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-[17px] font-medium ${
                isActive ? "text-[#bd973f]" : "text-black"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-[17px] font-medium ${
                isActive ? "text-[#bd973f]" : "text-black"
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        <div className="hidden sm:flex gap-x-9 items-center transition-all">
          <button className="rounded-full p-[6px]  flex justify-center  hover:bg-gray-100 active:bg-gray-200 ">
            <Icon.user />
          </button>
          <button className="rounded-full p-[6px]  flex justify-center  hover:bg-gray-100 active:bg-gray-200 ">
            <Icon.search />
          </button>
          <button className="rounded-full p-[6px]  flex justify-center  hover:bg-gray-100 active:bg-gray-200 ">
            <Icon.like />
          </button>
          <button className="rounded-full p-[6px]  flex justify-center  hover:bg-gray-100 active:bg-gray-200 ">
            <Icon.basket />
          </button>
        </div>
        <div className="relative">
          <button
            onClick={() => setOpen(true)}
            className="block sm:hidden text-[21px] z-20 p-2"
          >
            <MenuOutlined />
          </button>

          <div
            className={`fixed top-1 right-1 h-[99%] w-[270px] border rounded-[19px] bg-white p-5 z-20 transition-transform duration-300 sm:hidden ${
              open ? "translate-x-0" : "translate-x-full right-1 "
            }`}
          >
            <div className="flex justify-between pb-3 border-b-2 border-[#bd973f91]">
              <span className="text-[25px] font-medium">Menu</span>
              <button
                onClick={() => setOpen(false)}
                className="text-[27px] text-[#BD973F] active:opacity-90"
              >
                ✖
              </button>
            </div>

            <nav className="flex flex-col gap-y-3 pt-3">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-[19px] font-medium ${
                    isActive ? "text-[#bd973f]" : "text-black"
                  } hover:opacity-70`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `text-[19px] font-medium ${
                    isActive ? "text-[#bd973f]" : "text-black"
                  } hover:opacity-70`
                }
              >
                Shop
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-[19px] font-medium ${
                    isActive ? "text-[#bd973f]" : "text-black"
                  } hover:opacity-70`
                }
              >
                About
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-[19px] font-medium ${
                    isActive ? "text-[#bd973f]" : "text-black"
                  } hover:opacity-70`
                }
              >
                Contact
              </NavLink>
            </nav>

            <div className="flex flex-col gap-y-3 pt-3">
              <button className="rounded-[31px] p-[6px] px-3 bg-[#d8b461] active:bg-[#bd973f91] flex gap-x-3 text-[19px] font-medium">
                <Icon.user /> User
              </button>
              <button className="rounded-[31px] p-[6px] px-3 bg-[#d8b461] active:bg-[#bd973f91] flex gap-x-3 text-[19px] font-medium">
                <Icon.search /> Search
              </button>
              <button className="rounded-[31px] p-[6px] px-3 bg-[#d8b461] active:bg-[#bd973f91] flex gap-x-3 text-[19px] font-medium">
                <Icon.like /> Like
              </button>
              <button className="rounded-[31px] p-[6px] px-3 bg-[#d8b461] active:bg-[#bd973f91] flex gap-x-3 text-[19px] font-medium">
                <Icon.basket /> Basket
              </button>
            </div>
          </div>

          {open && (
            <div
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/40 z-10 sm:hidden"
            />
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
