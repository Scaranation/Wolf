import { Link, usePage } from "@inertiajs/react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { PageProps } from "@/types";
import {
    DollarSign,
    Image,
    LogOut,
    MenuIcon,
    Palette,
    PencilRuler,
    User,
    UserCog2Icon,
    Users,
    UserRoundCog,
} from "lucide-react";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/Components/ui/sheet";

import {
    DatabaseBackup,
    Headset,
    LayoutDashboard,
    Package,
    PackageOpen,
} from "lucide-react";
import ApplicationLogo from "../ApplicationLogo";
import SidebarItem from "../SidebarItem";

const NavbarAdmin = () => {
    const { auth } = usePage<PageProps>().props;
    let variantUrl = window.location.pathname;

    return (
        <nav className="w-full bg-background flex px-4 justify-between py-3 lg:px-10 items-center z-10 top-0 fixed">
            <ApplicationLogo
                href="/admin/dashboard"
                className="w-20 lg:ml-5 hidden lg:block"
            />
            <div className="flex items-center gap-3 lg:hidden">
                <Sheet>
                    <SheetTrigger>
                        <MenuIcon />
                    </SheetTrigger>
                    <SheetContent side={"left"}>
                        <SheetHeader>
                            <SheetDescription className="flex flex-col justify-between">
                                {" "}
                                <div className="flex justify-center mt-3">
                                    <ApplicationLogo className=" w-40 lg:ml-10" />
                                </div>
                                <ul className="mt-6 font-medium text-sm flex flex-col gap-2">
                                    <SidebarItem
                                        href={route("admin.dashboard.index")}
                                        icon={LayoutDashboard}
                                        label="Dashboard"
                                        isActive={
                                            variantUrl === "/admin/dashboard"
                                        }
                                    />
                                    {/* <SidebarItem
                                        href={route("admin.transaction.index")}
                                        icon={DollarSign}
                                        label="Transaksi"
                                        isActive={
                                            variantUrl === "/admin/transaksi"
                                        }
                                    />
                                    <SidebarItem
                                        href={route(
                                            "admin.product-category.index"
                                        )}
                                        icon={PackageOpen}
                                        label="Kategori Produk"
                                        isActive={
                                            variantUrl ===
                                            "/admin/kategori-produk"
                                        }
                                    />{" "}
                                    <SidebarItem
                                        href={route("admin.product.index")}
                                        icon={Package}
                                        label="Produk"
                                        isActive={
                                            variantUrl === "/admin/produk" ||
                                            variantUrl.startsWith(
                                                "/admin/produk/"
                                            )
                                        }
                                    />
                                    <div className="ml-6 flex flex-col">
                                        <SidebarItem
                                            href={route("admin.color.index")}
                                            icon={Palette}
                                            label="Warna"
                                            isActive={
                                                variantUrl === "/admin/warna"
                                            }
                                        />{" "}
                                        <SidebarItem
                                            href={route("admin.size.index")}
                                            icon={PencilRuler}
                                            label="Ukuran"
                                            isActive={
                                                variantUrl === "/admin/ukuran"
                                            }
                                        />
                                    </div>
                                    <SidebarItem
                                        href={route(
                                            "admin.contact-center.index"
                                        )}
                                        icon={Headset}
                                        label="Kontak Center"
                                        isActive={
                                            variantUrl ===
                                            "/admin/kontak-center"
                                        }
                                    />{" "}
                                    <SidebarItem
                                        href={route("admin.admin.index")}
                                        icon={Users}
                                        label="Admin"
                                        isActive={variantUrl === "/admin/admin"}
                                    />{" "}
                                    <SidebarItem
                                        href={route("admin.carousel.index")}
                                        icon={Image}
                                        label="Carousel"
                                        isActive={
                                            variantUrl === "/admin/carousel"
                                        }
                                    />{" "}
                                    <SidebarItem
                                        href={route("admin.backup.index")}
                                        icon={DatabaseBackup}
                                        label="Backup"
                                        isActive={
                                            variantUrl === "/admin/backup"
                                        }
                                    />{" "} */}
                                </ul>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className=" items-center gap-3  cursor-pointer flex">
                        <UserRoundCog
                            className="p-1 border rounded-full bg-brandy-rose-500 text-white"
                            size={44}
                            color="black"
                        />
                        <div className=" flex-col w-auto hidden md:flex">
                            <span className=" text-sm font-semibold  text-black">
                                {auth.user.name}
                            </span>
                            <span className="text-xs font-medium text-gray-400 ">
                                {auth.user.email}
                            </span>
                        </div>
                        <svg
                            className="hidden md:block ml-2 text-black"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                        >
                            <path 
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m7 10l5 5m0 0l5-5"
                            ></path>
                        </svg>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 mt-2 bg-white z-[110]">
                    <DropdownMenuLabel>Profil Saya</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {/* <DropdownMenuGroup>
                        <Link href={route("admin.profile.edit")} preserveState>
                            <DropdownMenuItem className=" cursor-pointer">
                                <User className="mr-2 h-4 w-4" />
                                <span>Profile</span>
                            </DropdownMenuItem>
                        </Link>
                    </DropdownMenuGroup> */}
                    <DropdownMenuSeparator />
                    <Link href={route("logout")} method="post">
                        <DropdownMenuItem className=" cursor-pointer">
                            <LogOut className="mr-2 h-4 w-4" />
                            <span>Log out</span>
                        </DropdownMenuItem>
                    </Link>
                </DropdownMenuContent>
            </DropdownMenu>
        </nav>
    );
};

export default NavbarAdmin;
