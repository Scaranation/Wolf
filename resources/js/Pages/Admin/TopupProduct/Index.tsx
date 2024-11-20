import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Game, PageProps, TopupProduct } from "@/types";
import AdminLayout from "@/Layouts/AdminLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { DataTableCustom } from "@/Components/DataTableCustom";
import Create from "./Create";
import { column } from "./column";

interface DashboardProps {
    topupGame: TopupProduct[];
}
export default function Dashboard({ topupGame }: DashboardProps) {
    return (
        <>
            <Tabs defaultValue="table" className="w-full">
                <TabsList>
                    <TabsTrigger value="table">Data Penjualan</TabsTrigger>
                    <TabsTrigger value="add">Tambah Data Penjualan</TabsTrigger>
                </TabsList>
                <TabsContent value="table">
                    <DataTableCustom data={topupGame} columns={column} />
                </TabsContent>
                <TabsContent value="add">
                    <Create />
                </TabsContent>
            </Tabs>
        </>
    );
}

Dashboard.layout = (page: React.ReactNode) => (
    <AdminLayout
        tittle="Manajemen Penjualan Kostum"
        description="Costume Product Control Panel"
        head="admin"
        children={page}
    />
);
