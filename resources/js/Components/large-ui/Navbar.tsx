import React from "react";
import ApplicationLogo from "../ApplicationLogo";
import { Button } from "../ui/button";
import { Link, usePage } from "@inertiajs/react";
import { PageProps } from "@/types";
import Dropdown from "@/Components/Dropdown";
const Navbar = () => {
    const { auth } = usePage<PageProps>().props;
    return (
        <nav className="absolute  py-5 top-0 w-full flex items-center justify-between px-20">
            <h1 className="flex items-center gap-4">
                <ApplicationLogo href="/" />
                <div className="flex flex-col text-2xl font-bold">
                    <span className=" text-primary">KAZUSCARA</span>
                    <span className="">STORE. </span>
                </div>
            </h1>
            <div className="flex items-center gap-10">
                {auth.user ? (
                    <div className="hidden sm:flex sm:items-center sm:ms-6">
                        <div className="ms-3 relative">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                        >
                                            {auth.user.name}

                                            <svg
                                                className="ms-2 -me-0.5 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    <Dropdown.Link
                                        href={route("user.profile.edit")}
                                    >
                                        Profile
                                    </Dropdown.Link>
                                    <Dropdown.Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                    >
                                        Log Out
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center gap-2.5">
                        <Button asChild size={"lg"}>
                            <Link href={route("login")}>Login</Link>
                        </Button>{" "}
                        <Button asChild size={"lg"} variant={"outline"}>
                            <Link href={route("register")}>Register</Link>
                        </Button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
