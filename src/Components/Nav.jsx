import { LuShoppingCart, LuUser } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx"; 
import { Link } from "react-router";

function Nav() {
  return (
    <nav className="flex items-center justify-between max-w-329.5 w-full  mx-auto py-4">
      <div className="hidden md:flex gap-6">
        <Link to={"/"} className="border-b-2 border-transparent hover:border-[#001515]">Home</Link>
        <Link to={"/shop"} className="hover:border-b-2 border-[#001515]"> Shop</Link>
      </div>

      <div>
        <Link to="/" className="font-light text-2xl md:text-4xl text-[#001515]">
          thetotebagshop<sup>®</sup>
        </Link>
      </div>

      <div className="flex items-center gap-4 text-xl">
        <LuUser className="block" />
        <Link to={"/cart"}><LuShoppingCart /></Link>
        <RxHamburgerMenu className="md:hidden" />
      </div>
    </nav>
  );
}

export default Nav;