import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { PageProps } from "@/types";
import AdminLayout from "@/Layouts/AdminLayout";
import { ChevronRight, GamepadIcon } from "lucide-react";

interface Props {
    games: number;
    topupProduct: number;
    jockeyProduct: number;
}
export default function Dashboard({
    games,
    topupProduct,
    jockeyProduct,
}: Props) {
    return (
        <>
            <div className="grid gap-3 mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="w-full flex gap-3 bg-white shadow-[0px_1px_3px_0px_rgba(0,_0,_0,_0.22)] rounded-md p-4">
                    <GamepadIcon
                        size={36}
                        className="p-2 w-10 text-white bg-blue-400 rounded-xl"
                    />
                    <div className="flex flex-col w-full mt-1 gap-1">
                        <span className="text-xl font-bold">{games}</span>
                        <span className="text-sm font-semibold text-gray-500">
                            Total Game
                        </span>
                        <div className="justify-end text-blue-500 flex w-full mt-8">
                            <Link
                                href="/admin/game"
                                className="text-xs hover:text-blue-700 hover:underline flex items-center gap-1"
                            >
                                <span>Lihat Detail</span>
                                <ChevronRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>{" "}
                <div className="w-full flex gap-3 bg-white shadow-[0px_1px_3px_0px_rgba(0,_0,_0,_0.22)] rounded-md p-4">
                    <GamepadIcon
                        size={36}
                        className="p-2 w-10 text-white bg-blue-400 rounded-xl"
                    />
                    <div className="flex flex-col w-full mt-1 gap-1">
                        <span className="text-xl font-bold">
                            {topupProduct}
                        </span>
                        <span className="text-sm font-semibold text-gray-500">
                            Total Toptup
                        </span>
                        <div className="justify-end text-blue-500 flex w-full mt-8">
                            <Link
                                href="/admin/game"
                                className="text-xs hover:text-blue-700 hover:underline flex items-center gap-1"
                            >
                                <span>Lihat Detail</span>
                                <ChevronRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>{" "}
                <div className="w-full flex gap-3 bg-white shadow-[0px_1px_3px_0px_rgba(0,_0,_0,_0.22)] rounded-md p-4">
                    <GamepadIcon
                        size={36}
                        className="p-2 w-10 text-white bg-blue-400 rounded-xl"
                    />
                    <div className="flex flex-col w-full mt-1 gap-1">
                        <span className="text-xl font-bold">
                            {jockeyProduct}
                        </span>
                        <span className="text-sm font-semibold text-gray-500">
                            Total Joki
                        </span>
                        <div className="justify-end text-blue-500 flex w-full mt-8">
                            <Link
                                href="/admin/game"
                                className="text-xs hover:text-blue-700 hover:underline flex items-center gap-1"
                            >
                                <span>Lihat Detail</span>
                                <ChevronRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Dashboard.layout = (page: React.ReactNode) => (
    <AdminLayout
        tittle="Manajemen Admin"
        description="Admin Control Panel"
        head="admin"
        children={page}
    />
);
