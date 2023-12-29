// import Image from "next/image";
// import Logo from "../islam-tamil-dp.jpg";
import React from "react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
const Navbar = () => {
  return (
    <nav className="shadow-sm">
      <div className="w-full relative flex items-center justify-between max-w-7xl mx-auto px-4 py-5">
        <Link
          href="/"
          className="flex items-center font-bold text-base md:text-xl tracking-tighter gap-2"
        >
          {/* <Image
        src={Logo} // Provide the correct path
        alt="Description of the image"
        width={70} // Set the desired width
        height={70} // Set the desired height
    /> */}
          <div>இஸ்லாம் தமிழ்</div>
        </Link>
        <div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
