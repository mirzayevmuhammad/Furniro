import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Icon from "./ui/Icon";

const Header = () => {
  const [drawer, setDrawer] = useState<
    null | "menu" | "user" | "search" | "like" | "basket"
  >(null);

  const toggleDrawer = (name: "menu" | "user" | "search" | "like" | "basket") =>
    setDrawer(drawer === name ? null : name);
  const closeAll = () => setDrawer(null);
  const removeFromBasket = (id: number) => {
    setBasketItems(basketItems.filter((item) => item.id !== id));
  };
  const [basketItems, setBasketItems] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 25,
      quantity: 1,
      image: "https://via.placeholder.com/60",
    },
    {
      id: 2,
      name: "Product 2",
      price: 30,
      quantity: 2,
      image: "https://via.placeholder.com/60",
    },
  ]);

  const totalPrice = basketItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <header className="flex justify-between  px-[35px] sm:pl-[55px] sm:pr-[0px] sm:py-8 py-5 bg-white w-full fixed z-40 shadow-md">
        <div>
          <img src="logo.svg" alt="logo" />
        </div>

        <nav className="hidden sm:flex gap-x-15 items-center transition-all ml-43">
          {["/", "/shop", "/about", "/contact"].map((path, i) => {
            const names = ["Home", "Shop", "About", "Contact"];
            return (
              <NavLink
                key={i}
                to={path}
                className={({ isActive }) =>
                  `text-[17px] font-medium ${
                    isActive ? "text-[#bd973f]" : "text-black"
                  }`
                }
              >
                {names[i]}
              </NavLink>
            );
          })}
        </nav>

        <div className="hidden sm:flex gap-x-9 pr-5 items-center transition-all">
          <button
            onClick={() => toggleDrawer("user")}
            className="rounded-full p-[6px] flex justify-center hover:bg-gray-100 active:bg-gray-200"
          >
            <Icon.user />
          </button>
          <button
            onClick={() => toggleDrawer("search")}
            className="rounded-full p-[6px] flex justify-center hover:bg-gray-100 active:bg-gray-200"
          >
            <Icon.search />
          </button>
          <button
            onClick={() => toggleDrawer("like")}
            className="rounded-full p-[6px] flex justify-center hover:bg-gray-100 active:bg-gray-200"
          >
            <Icon.like />
          </button>
          <button
            onClick={() => toggleDrawer("basket")}
            className="rounded-full p-[6px] flex justify-center hover:bg-gray-100 active:bg-gray-200 relative"
          >
            <Icon.basket />
            {basketItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#bd973f] text-white text-[10px] font-bold rounded-full px-[5px]">
                {basketItems.length}
              </span>
            )}
          </button>
        </div>

        <div className="relative sm:hidden">
          <button
            onClick={() => toggleDrawer("menu")}
            className="block sm:hidden text-[21px] z-20 p-2"
          >
            <MenuOutlined />
          </button>
        </div>
      </header>

      {drawer && (
        <>
          <div
            className={`fixed top-1 right-1 h-[99%] w-[270px] border rounded-[19px] bg-white p-5 z-50 transform transition-transform duration-300 ease-in-out ${
              drawer ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-between pb-3 border-b-2 border-[#bd973f91]">
              <span className="text-[25px] font-medium capitalize text-[#bd973f]">
                {drawer === "menu"
                  ? "Menu"
                  : drawer === "user"
                  ? "User"
                  : drawer === "search"
                  ? "Search"
                  : drawer === "like"
                  ? "Favorites"
                  : "Basket"}
              </span>
              <button
                onClick={closeAll}
                className="text-[27px] text-[#BD973F] active:opacity-90"
              >
                ✖
              </button>
            </div>

            <div className="pt-3 flex flex-col gap-y-4">
              {drawer === "menu" && (
                <div className="flex flex-col gap-y-5">
                  <nav className="flex flex-col gap-y-3 pt-2">
                    {["/", "/shop", "/about", "/contact"].map((path, i) => {
                      const names = ["Home", "Shop", "About", "Contact"];
                      return (
                        <NavLink
                          key={i}
                          to={path}
                          onClick={closeAll}
                          className={({ isActive }) =>
                            `text-[19px] font-medium ${
                              isActive ? "text-[#bd973f]" : "text-black"
                            } hover:opacity-70`
                          }
                        >
                          {names[i]}
                        </NavLink>
                      );
                    })}
                  </nav>

                  <div className="flex justify-between pt-5 border-t mt-3">
                    <button onClick={() => toggleDrawer("user")}>
                      <Icon.user />
                    </button>
                    <button onClick={() => toggleDrawer("search")}>
                      <Icon.search />
                    </button>
                    <button onClick={() => toggleDrawer("like")}>
                      <Icon.like />
                    </button>
                    <button onClick={() => toggleDrawer("basket")}>
                      <Icon.basket />
                    </button>
                  </div>
                </div>
              )}

              {drawer === "user" && (
                <div className="flex flex-col gap-y-4">
                  <p className="text-gray-600">Welcome, Guest</p>
                  <button className="bg-[#bd973f] hover:bg-[#a58233] text-white py-2 rounded-[10px] font-medium">
                    Login / Register
                  </button>
                </div>
              )}

              {drawer === "search" && (
                <div className="flex flex-col gap-y-4">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="border border-gray-300 rounded-[10px] px-4 py-3 outline-none"
                  />
                  <button className="bg-[#bd973f] hover:bg-[#a58233] text-white py-2 rounded-[10px] font-medium">
                    Search
                  </button>
                </div>
              )}

              {drawer === "like" && (
                <div className="flex flex-col gap-y-5">
                  {[1, 2].map((i) => (
                    <div
                      key={i}
                      className="flex items-center gap-x-4 border-b pb-3"
                    >
                      <img
                        src={`https://via.placeholder.com/60`}
                        alt="liked"
                        className="rounded-lg"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-[15px]">
                          Favorite Product {i}
                        </p>
                        <span className="text-gray-500 text-[14px]">
                          $30.00
                        </span>
                      </div>
                      <button className="text-red-500 text-[20px] hover:opacity-70">
                        ✖
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {drawer === "basket" && (
                <div className="flex flex-col gap-y-5">
                  {basketItems.length > 0 ? (
                    <>
                      {basketItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center gap-x-4 border-b pb-3"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="rounded-lg w-[60px] h-[60px] object-cover"
                          />
                          <div className="flex-1">
                            <p className="font-medium text-[15px]">
                              {item.name}
                            </p>
                            <div className="flex justify-between text-gray-500 text-[14px]">
                              <span>${item.price.toFixed(2)}</span>
                              <span>× {item.quantity}</span>
                            </div>
                          </div>
                          <button
                            onClick={() => removeFromBasket(item.id)}
                            className="text-red-500 text-[20px] hover:opacity-70"
                          >
                            ✖
                          </button>
                        </div>
                      ))}

                      <div className="border-t pt-4 mt-3">
                        <div className="flex justify-between text-[18px] font-semibold">
                          <span>Total:</span>
                          <span>${totalPrice.toFixed(2)}</span>
                        </div>
                        <button className="mt-5 w-full bg-[#bd973f] hover:bg-[#a17e2f] text-white py-3 rounded-[10px] font-medium text-[17px]">
                          Checkout
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-10 text-gray-500">
                      <Icon.basket />
                      <p className="mt-3 text-[17px] font-medium">
                        Your basket is empty
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div
            onClick={closeAll}
            className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
          />
        </>
      )}
    </>
  );
};

export default Header;
