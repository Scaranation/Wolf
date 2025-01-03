import {
    DatabaseBackup,
    DollarSign,
    DollarSignIcon,
    Gamepad2,
    Headset,
    Image,
    LayoutDashboard,
    Notebook,
    NotepadText,
    Package,
    PackageOpen,
    Palette,
    PencilRuler,
    Users,
    Users2Icon,
    Shirt,
    Store,
    CalendarClock,
} from "lucide-react";
import SidebarItem from "../SidebarItem";

const SidebarAdmin = () => {
    let variantUrl = window.location.pathname;
    return (
        <aside className=" hidden lg:block bg-background w-64 left-0 h-screen top-0 fixed">
            <div className="pt-[88px] px-8 flex flex-col justify-between h-full">
                <ul className="mt-6 font-medium text-sm flex flex-col ">
                    <SidebarItem
                        href={route("admin.dashboard.index")}
                        icon={LayoutDashboard}
                        label="Dashboard"
                        isActive={variantUrl === "/admin/dashboard"}
                    />{" "}
                    <SidebarItem
                        href={route("admin.game.index")}
                        icon={Shirt}
                        label="Kostum"
                        isActive={variantUrl === "/admin/game"}
                    />{" "}
                    <SidebarItem
                        href={route("admin.topup-game.index")}
                        icon={Store}
                        label="Penjualan"
                        isActive={variantUrl === "/admin/TopupProduct"}
                    />{" "}
                    <SidebarItem
                        href={route("admin.jasa-joki.index")}
                        icon={CalendarClock}
                        label="Pre-Order"
                        isActive={variantUrl === "/admin/JockeyProduct"}
                    />{" "}
                    {/* <SidebarItem
                        href={route("admin.dashboard.index")}
                        icon={LayoutDashboard}
                        label="Dashboard"
                        isActive={variantUrl === "/admin/dashboard"}
                    />{" "} */}
                    {/* <SidebarItem
                        href={route("admin.transaction.index")}
                        icon={DollarSign}
                        label="Transaksi"
                        isActive={variantUrl === "/admin/transaksi"}
                    />
                    <SidebarItem
                        href={route("admin.resident.index")}
                        icon={Users2Icon}
                        label="Penghuni"
                        isActive={variantUrl === "/admin/penghuni"}
                    />
                    <SidebarItem
                        href={route("admin.bill.index")}
                        icon={DollarSignIcon}
                        label="Tagihan"
                        isActive={variantUrl === "/admin/tagihan"}
                    /> */}
                    {/* <SidebarItem
                        href={route("admin.transaction.index")}
                        icon={DollarSign}
                        label="Transaksi"
                        isActive={variantUrl === "/admin/transaksi"}
                    />
                    <SidebarItem
                        href={route("admin.product-category.index")}
                        icon={PackageOpen}
                        label="Kategori Produk"
                        isActive={variantUrl === "/admin/kategori-produk"}
                    />{" "}
                    <SidebarItem
                        href={route("admin.product.index")}
                        icon={Package}
                        label="Produk"
                        isActive={
                            variantUrl === "/admin/produk" ||
                            variantUrl.startsWith("/admin/produk/")
                        }
                    />
                    <div className="ml-6 flex flex-col">
                        <SidebarItem
                            href={route("admin.color.index")}
                            icon={Palette}
                            label="Warna"
                            isActive={variantUrl === "/admin/warna"}
                        />{" "}
                        <SidebarItem
                            href={route("admin.size.index")}
                            icon={PencilRuler}
                            label="Ukuran"
                            isActive={variantUrl === "/admin/ukuran"}
                        />
                    </div>
                    <SidebarItem
                        href={route("admin.contact-center.index")}
                        icon={Headset}
                        label="Kontak Center"
                        isActive={variantUrl === "/admin/kontak-center"}
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
                        isActive={variantUrl === "/admin/carousel"}
                    />{" "}
                    <SidebarItem
                        href={route("admin.backup.index")}
                        icon={DatabaseBackup}
                        label="Backup"
                        isActive={variantUrl === "/admin/backup"}
                    />{" "} */}
                </ul>
                <div className="mb-5 flex flex-col justify-center items-center">
                    <span className="text-xs font-semibold">
                        © 2024 - SCARAPLAY
                    </span>
                    <span className="text-xs text-zinc-600">
                        All rights reserved
                    </span>
                </div>
            </div>
        </aside>
    );
};

export default SidebarAdmin;
