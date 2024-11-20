import ApplicationLogo from "@/Components/ApplicationLogo";
import Footer from "@/Components/large-ui/Footer";
import Navbar from "@/Components/large-ui/Navbar";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
    return (
        <>
            <Navbar />
            <div className="min-h-screen flex justify-center p-2 sm:justify-center items-center">
                <div className="bg-primary/90 flex gap-4 h-full p-8 w-1/2 rounded-xl">
                    <div className="w-full sm:max-w-md flex justify-between flex-col">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-4xl text-white font-extrabold">
                                Scara Play
                            </h1>
                            <h2 className="text-zinc-300 text-base font-medium">
                            Apakah Anda mencari tempat untuk mewujudkan penampilan cosplay impian Anda? Selamat datang di 'Cosplay Hub', platform terbaik untuk kostum berkualitas dan aksesori cosplay yang siap memenuhi semua kebutuhan Anda!
                            </h2>
                        </div>
                    </div>
                    <div className="w-full sm:max-w-md px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                        {children}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
