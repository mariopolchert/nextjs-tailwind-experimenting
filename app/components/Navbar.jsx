import Image from "next/image";

const Navbar = () => {
    return (
        <div className="navbar-container fixed bg-gray-600 h-[10vh] w-screen flex justify-between align-middle opacity-80">
            <div className="logo p-10">
                <a
                    className="cursor-pointer"
                    href="#"
                    target="_top"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        className="dark:invert"
                        width={100}
                        height={24}
                    />
                </a>
            </div>
            <div className="menu">
                <ul className="links-container flex p-8 pr-16 space-x-5 text-[1.5rem] cursor-pointer">
                    <a href="#hero">
                        <li>Hero</li>
                    </a>
                    <a href="#about">
                        <li>About</li>
                    </a>
                    <a href="#tools">
                        <li>Tools</li>
                    </a>
                    <a href="#work">
                        <li>Work</li>
                    </a>
                    <a href="#contact">
                        <li>Contact</li>
                    </a>
                    {/* <a
                        href="#contact"
                        className="transform transition-all duration-700"
                    >
                        <li>Contact</li>
                    </a> */}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
