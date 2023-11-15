import React from "react";
import { CustomButton } from ".";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] flex mx-auto sm:px-16 px-6 py-4 bg-transparent justify-between items-center">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.png"
            alt="Car Hub Logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </Link>
        <CustomButton
          title="Sign In"
          type="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Navbar;
