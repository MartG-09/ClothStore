import { Link } from "react-router";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        
        {/* Left: Mobile Menu + Logo */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Menu"
            className="md:hidden text-black"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          <Link
            to="/"
            className="text-2xl font-black tracking-tight text-black sm:text-3xl"
          >
            SHOP.CO
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden items-center gap-6 md:flex text-base">
          <Link to="/" className="flex items-center gap-1 hover:text-gray-600">
            Shop 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </Link>
          <Link to="/" className="hover:text-gray-600">On Sale</Link>
          <Link to="/" className="hover:text-gray-600">New Arrivals</Link>
          <Link to="/" className="hover:text-gray-600">Brands</Link>
        </nav>

        {/* Search Bar (Desktop) */}
        <div className="hidden lg:flex items-center flex-1 max-w-md mx-10 bg-[#F0EEED] rounded-full px-4 py-2.5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 text-gray-400 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
          </svg>
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full bg-transparent text-sm outline-none placeholder-gray-500"
          />
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-5">
          {/* Mobile search toggle */}
          <button type="button" aria-label="Search" className="lg:hidden text-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
            </svg>
          </button>

          {/* Cart Icon */}
          <Link to="/cart" className="relative text-black" aria-label="Shopping cart">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835L5.7 6.75m0 0h13.05c.716 0 1.283.659 1.171 1.366l-1.2 7.5a1.125 1.125 0 0 1-1.11.947H8.02a1.125 1.125 0 0 1-1.11-.947L5.7 6.75Zm2.32 11.813a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm9.75 0a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" />
            </svg>

            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          {/* User Account Icon */}
          <button type="button" aria-label="Account" className="text-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a8.25 8.25 0 0 1 15 0" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;