import NavbarAdmin from "@/Components/large-ui/NavbarAdmin";
import React from "react";
import RootLayout from "./RootLayout";
import { Head } from "@inertiajs/react";
import SidebarAdmin from "@/Components/large-ui/SidebarAdmin";

interface AdminLayoutProps {
    children: React.ReactNode;
    head: string;
    tittle: string;
    description: string;
}
export default function AdminLayout({
    children,
    head,
    tittle,
    description,
}: AdminLayoutProps) {
    return (
        <RootLayout>
            <Head title={head} />
            <NavbarAdmin />
            <SidebarAdmin />
            <div className="my-24 px-4 lg:ml-64 lg:mr-4">
                {" "}
                <div className="flex flex-col">
                    <span className="text-xl md:text-3xl font-bold">
                        {tittle}
                    </span>
                    <span className="text-sm md:text-base font-medium text-zinc-400">
                        {description}
                    </span>
                </div>
                <div className="mt-5">{children}</div>
            </div>
        </RootLayout>
    );
}
