import Logo from "../assets/images/logo.png";
import { BsPersonCircle } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="w-full absolute">
      <div className="wrapper">
        <div className="flex items-center justify-between py-4">
          <a href="#">
            <img src={Logo} className="w-[65px] md:w-[75px]" alt="" />
          </a>
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
