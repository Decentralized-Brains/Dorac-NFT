import Logo from "../assets/images/logo.png";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full absolute">
      <div className="wrapper">
        <div className="flex items-center justify-between py-4">
          <Link to="/">
            <img src={Logo} className="w-[65px] md:w-[75px]" alt="" />
          </Link>
          <div className="flex items-center gap-6">
            <div className="text-violet-500 text-3xl">
              <BsPersonCircle />
            </div>
            <button className="font-semibold text-lg">Connect</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
