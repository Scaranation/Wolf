import Toastify from "@/Components/Toastify";
import { PageProps } from "@/types";
import { usePage } from "@inertiajs/react";
import { PropsWithChildren, useEffect } from "react";
import { toast } from "react-toastify";

export default function RootLayout({ children }: PropsWithChildren) {
    const { flash } = usePage<PageProps>().props;

    useEffect(() => {
        if (flash && flash?.error) {
            toast.error(flash.error, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else if (flash && flash?.success) {
            toast.success(flash.success, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }, [flash]);

    return (
        <div>
            {flash?.success && <Toastify />}
            {flash?.error && <Toastify />}
            {children}
        </div>
    );
}
