import { useContext, useState } from "react";
import Moon from "../assets/icons/moon.svg";
import Sun from "../assets/icons/sun.svg";
import Ring from "../assets/ring.svg";
import shoppingCart from "../assets/shopping-cart.svg";
import CartDetails from "./books/CartDetails";
import { BooksContext, ThemeContext } from "./context";

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const { state } = useContext(BooksContext);
  const { theme, setTheme } = useContext(ThemeContext);

  function handleCart() {
    setShowCart(true);
  }
  function handleCartClose() {
    setShowCart(false);
  }
  return (
    <>
      {showCart && <CartDetails onClose={handleCartClose} />}
      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a
            href="index.html"
            className="text-2xl font-bold text-[#00d991] h-full bg-green-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 py-2.5 px-7"
          >
            BookTrade
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={Ring} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={() => setTheme((theme) => !theme)}
              >
                <img src={theme ? Sun : Moon} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={handleCart}
              >
                <img src={shoppingCart} width="24" height="24" alt="" />
                {state.cartData.length > 0 && (
                  <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                    {state.cartData.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
