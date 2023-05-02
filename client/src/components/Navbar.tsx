import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(true);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="flex  justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-orange-600 ">
            <h1 className="w-full text-3xl font-bold  ">My-Reddit</h1>
            <ul className="hidden md:flex">
                <li className="p-4">
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/SafeTorpedo/reddit-clone"
                    >
                        Github Repo
                    </a>
                </li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {!nav ? (
                    <AiOutlineClose size={20} />
                ) : (
                    <AiOutlineMenu size={25} />
                )}
            </div>
            <div
                className={
                    !nav
                        ? "fixed left-0 top-0 w-[63%] md:hidden lg:hidden h-full border-r border-r-gray-800 bg-white ease-in-out duration-500"
                        : "fixed left-[-100%]"
                }
            >
                <h1 className="w-full text-3xl font-bold text-orange-600 m-8 p-6">
                    My-Reddit
                </h1>
                <ul className="pt-12 uppercase p-4">
                    <li className="p-4">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/SafeTorpedo/reddit-clone"
                        >
                            Github Repo
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
