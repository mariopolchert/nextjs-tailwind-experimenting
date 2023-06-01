"use client";
import Image from "next/image";
import React from "react";

const Mobile = () => {
    // let ham = "flex";
    let ham = true;
    const hamburgerMenu = () => {
        // ham === "flex" ? (ham = "hidden") : (ham = "flex");
        ham = !ham;
    };

    return (
        <div className="relative">
            {ham ? (
                <div className="flex md:hidden fixed z-30 flex-col bg-darkText h-[10vh] w-screen justify-between align-middle opacity-90 overflow-hidden">
                    <div className="logo_and_hamburger_closed flex flex-row justify-between">
                        <div className="logo">
                            <a
                                className="cursor-pointer"
                                href="#"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="/logo_green.svg"
                                    alt="Mario Polchert - MP Logo"
                                    className="p-4"
                                    width={100}
                                    height={24}
                                />
                            </a>
                        </div>
                        <button
                            onClick={() => hamburgerMenu()}
                            className="text-3xl text-lightText p-8 bg-blue-700"
                        >
                            H
                        </button>
                    </div>
                </div>
            ) : (
                <div className="flex md:hidden flex-col absolute bg-darkText h-[100vh] w-screen justify-between align-middle opacity-90 overflow-hidden ">
                    <div className="logo_and_x_open flex flex-row justify-between">
                        <div className="logo">
                            <a
                                className="cursor-pointer"
                                href="#"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="/logo_green.svg"
                                    alt="Mario Polchert - MP Logo"
                                    className="p-4"
                                    width={100}
                                    height={24}
                                />
                            </a>
                        </div>
                        <button
                            onClick={() => hamburgerMenu()}
                            className="text-3xl text-lightText p-4 bg-green-500"
                        >
                            X
                        </button>
                    </div>
                    <div className="menu flex justify-center h-[90vh] ">
                        <ul className="flex flex-col mx-auto text-[2rem] text-center cursor-pointer text-lightText">
                            <a
                                href="#hero"
                                className="hover:text-accent duration-500 pb-5 pt-24"
                            >
                                <li className="">Hero</li>
                            </a>
                            <a
                                href="#about"
                                className="hover:text-accent duration-500 py-5"
                            >
                                <li className="">About</li>
                            </a>
                            <a
                                href="#tools"
                                className="hover:text-accent duration-500 py-5"
                            >
                                <li className="">Tools</li>
                            </a>
                            <a
                                href="#work"
                                className="hover:text-accent duration-500 py-5"
                            >
                                <li className="">Work</li>
                            </a>
                            <a
                                href="#contact"
                                className="hover:text-accent duration-500 py-5"
                            >
                                <li className="">Contact</li>
                            </a>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Mobile;

// return (
//   <div>
//     {isDiv1Visible ? (
//       <div className="bg-blue-500">Div 1</div>
//     ) : (
//       <div className="bg-red-500">Div 2</div>
//     )}

//     <button onClick={() => setIsDiv1Visible(!isDiv1Visible)}>
//       Toggle Div
//     </button>
//   </div>
// );
