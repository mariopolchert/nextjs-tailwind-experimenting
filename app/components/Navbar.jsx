import Image from "next/image";

const Navbar = () => {
    return (
        <nav>
            {/* Mobile navigation */}
            <div className="md:hidden flex fixed navbar-container  bg-darkText h-[10vh] w-screen justify-between align-middle opacity-80 ">
                <div className="logo p-10">
                    <a
                        className="cursor-pointer"
                        href="#"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/logo_green.svg"
                            alt="Mario Polchert - MP Logo"
                            className=""
                            width={100}
                            height={24}
                        />
                    </a>
                </div>
                TODO implement the way active section is marked as active
                <div className="menu">
                    <ul className="links-container flex p-8 pr-16 space-x-5 text-[1.5rem] cursor-pointer text-lightText ">
                        <a
                            href="#hero"
                            className="hover:text-accent duration-500"
                        >
                            <li className="">Hero</li>
                        </a>
                        <a
                            href="#about"
                            className="hover:text-accent duration-500"
                        >
                            <li className="">About</li>
                        </a>
                        <a
                            href="#tools"
                            className="hover:text-accent duration-500"
                        >
                            <li className="">Tools</li>
                        </a>
                        <a
                            href="#work"
                            className="hover:text-accent duration-500"
                        >
                            <li className="">Work</li>
                        </a>
                        <a
                            href="#contact"
                            className="hover:text-accent duration-500"
                        >
                            <li className="">Contact</li>
                        </a>
                    </ul>
                </div>
            </div>
            {/* End of Mobile navigation */}
            {/* Desktop navigation */}
            <div className="hidden md:flex fixed navbar-container  bg-darkText h-[10vh] w-screen justify-between align-middle opacity-80 ">
                <div className="logo p-10">
                    <a
                        className="cursor-pointer"
                        href="#"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/logo_green.svg"
                            alt="Mario Polchert - MP Logo"
                            className=""
                            width={100}
                            height={24}
                        />
                    </a>
                </div>
                TODO implement the way active section is marked as active
                <div className="menu">
                    <ul className="links-container flex p-8 pr-16 space-x-5 text-[1.5rem] cursor-pointer text-lightText ">
                        <a
                            href="#hero"
                            className="hover:text-accent duration-500"
                        >
                            <li className="">Hero</li>
                        </a>
                        <a
                            href="#about"
                            className="hover:text-accent duration-500"
                        >
                            <li className="">About</li>
                        </a>
                        <a
                            href="#tools"
                            className="hover:text-accent duration-500"
                        >
                            <li className="">Tools</li>
                        </a>
                        <a
                            href="#work"
                            className="hover:text-accent duration-500"
                        >
                            <li className="">Work</li>
                        </a>
                        <a
                            href="#contact"
                            className="hover:text-accent duration-500"
                        >
                            <li className="">Contact</li>
                        </a>
                    </ul>
                </div>
            </div>
            {/* End of Desktop navigation */}
        </nav>
    );
};

export default Navbar;
