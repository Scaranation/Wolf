import { Link } from "@inertiajs/react";
import React from "react";

interface SidebarItemProps {
    href: string;
    icon: React.FC;
    label: string;
    isActive: boolean;
}
const SidebarItem = ({
    href,
    icon: Icon,
    label,
    isActive,
}: SidebarItemProps) => (
    <Link
        as="button"
        method="get"
        href={href}
        className={`p-2 flex items-center justify-between ${
            isActive ? " bg-brandy-rose-100" : ""
        }`}
    >
        <div
            className={`flex items-center gap-2 ${
                isActive ? "text-black" : "text-zinc-700"
            }`}
        >
            <Icon />
            {label}
        </div>
        {isActive && (
            <span className="h-6 w-[3px] bg-black rounded-l-md"></span>
        )}
    </Link>
);

export default SidebarItem;
