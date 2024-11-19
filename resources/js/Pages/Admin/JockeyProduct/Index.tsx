import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Game, JockeyProduct, PageProps, TopupProduct } from "@/types";
import AdminLayout from "@/Layouts/AdminLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { DataTableCustom } from "@/Components/DataTableCustom";
import Create from "./Create";
import { column } from "./column";

interface DashboardProps {
    jockeyProducts: JockeyProduct[];
}
export default function Dashboard({ jockeyProducts }: DashboardProps) {
    console.log(jockeyProducts);
    return (
        <>
            <Tabs defaultValue="table" className="w-full">
                <TabsList>
                    <TabsTrigger value="table">Data Joki</TabsTrigger>
                    <TabsTrigger value="add">Tambah Joki</TabsTrigger>
                </TabsList>
                <TabsContent value="table">
                    <DataTableCustom data={jockeyProducts} columns={column} />
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
        tittle="Manajemen Joki"
        description="Joki Product Control Panel"
        head="joki"
        children={page}
    />
);
