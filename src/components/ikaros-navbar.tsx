"use client"
import { usePathname } from "next/navigation"
import { Menubar, MenubarMenu } from "./ui/menubar"
import { ThemeModeToggle } from "./thememodetoggle"

import Link from "next/link"
import { useEffect, useState } from "react"
import { MenuIcon, X } from "lucide-react"
import { useTheme } from 'next-themes';
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Image from "next/image"

interface NavItems {
    title: string,
    icon: JSX.Element,
    link: string,
    isScroll?: boolean
}
const navItems = [
    { title: "Home", icon: <IconHome fontWeight={"2px"} className=" text-neutral-500  dark:text-white" />, link: "/" },
    { title: "Why Ikaros?", icon: <IconUser className="text-neutral-500 dark:text-white" />, link: "#whyIkaros", isScroll: true },
    { title: "Contact Us", icon: <IconMessage className="text-neutral-500 dark:text-white" />, link: "/contact-us" }]

const NavbarMenu = ({ menuItems }: { menuItems: NavItems[] }) => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const { theme } = useTheme();
    const [atTop, setAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 150;
            if (window.scrollY > scrollThreshold) {
                setAtTop(false);
            } else {
                setAtTop(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const menubar = ({ rounded, margin }: { rounded: string, margin: string }) => {
        return (
            <Menubar id="navbar" className={`md:${margin} h-[3.5rem] flex justify-between shadow-lg ${rounded}`}>
                <div className="flex justify-center mx-5 gap-2">
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                        <MenuIcon />
                    </button>

                    <MenubarMenu key={"logo"}>
                        <Image src={`${theme === "dark" ? "/ikaros.svg" : "/ikaros-black.svg"}`} width={100} height={100} alt="Ikaros" className="w-[7rem] h-fit cursor-pointer" />
                    </MenubarMenu>
                </div>

                <div className="hidden md:flex md:gap-5">
                    {menuItems.map((value, index) => {
                        return (
                            <Link href={`${value.link}`} key={index} className="cursor-pointer" onClick={(e) => {
                                if (value.isScroll) {
                                    e.preventDefault();
                                    const element = document.querySelector(`${value.link}`);
                                    if (element) {
                                        window.scrollTo({
                                            top: element.getBoundingClientRect().top,
                                            behavior: 'smooth'
                                        });
                                    } else {
                                        window.location.href = '/';
                                    }
                                }
                            }}>
                                <div className={`whitespace-nowrap flex items-center gap-1 text-lg font-semibold ${pathname === value.link ? "underline" : ""}`}>
                                    {value.icon}
                                    {value.title}
                                </div>
                            </Link>
                        )
                    })}
                </div>

                <div className="flex content-center">
                    <MenubarMenu>
                        <Link href={"/contact-us"} className="flex whitespace-nowrap content-center flex-wrap rounded-2xl text-sm my-1 py-2 px-3 cursor-pointer bg-white primary-button font-semibold text-white ">
                            <span>Join Us</span>
                        </Link>
                    </MenubarMenu>

                    <ThemeModeToggle />
                </div>
            </Menubar>
        );
    }

    return (
        <>
            {atTop ?
                menubar({ rounded: "rounded-none", margin: "mx-0" }) :
                menubar({ rounded: "rounded-none md:rounded-3xl", margin: "mx-5" })
            }

            <div className={`${isOpen ? "flex" : "hidden"} sidebar shadow-lg sticky top-0 left-0 transform transition-transform duration-200 ease-in-out w-3/4 h-full flex flex-col justify-start gap-5`}>
                <div className="flex justify-between px-5 py-2">
                    <Image src={`${theme === "dark" ? "/ikaros.svg" : "/ikaros-black.svg"}`} width={100} height={100} className="w-[7rem] h-fit" alt="Ikaros" />
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <X />
                    </button>
                </div>
                <div className="flex flex-col p-5 gap-5">
                    {menuItems.map((value, index) => {
                        return (
                            <Link key={index + 1} href={`${value.link}`} onClick={() => setIsOpen(!isOpen)}>
                                <div className="flex gap-2 items-center">
                                    <div>{value.icon}</div>
                                    <div className={`${pathname === value.link ? "underline" : ""}`}>
                                        {value.title}
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export const Navbar = () => {
    const [atTop, setAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 150;
            if (window.scrollY > scrollThreshold) {
                setAtTop(false);
            } else {
                setAtTop(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header id="navbarHeader" className={`sticky ${atTop ? "top-0" : "top-0 md:top-5"} z-50 transition-all duration-300`}>
            <NavbarMenu menuItems={navItems} />
        </header>
    )
}
