import React from "react";
import RootLayout from "./RootLayout";
import Navbar from "@/Components/large-ui/Navbar";
import { Head } from "@inertiajs/react";
import Footer from "@/Components/large-ui/Footer";

interface Props {
    children: React.ReactNode;
    head: string;
}
const GuestLayout = (props: Props) => {
    return (
        <RootLayout>
            <Head title={props.head} />
            <Navbar />
            <section className="w-full px-20">{props.children}</section>
            <Footer />
        </RootLayout>
    );
};

export default GuestLayout;
