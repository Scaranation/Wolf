import { cn } from "@/lib/utils";
import Logo from "../../../public/Logo/Logo.png";
import { Link } from "@inertiajs/react";
interface Props {
    className?: string;
    href?: string;
}

export default function ApplicationLogo(props: Props) {
    return (
        <Link href={`${props.href}`}>
            <img
                src={Logo}
                className={cn("h-20 w-auto", props.className)}
                alt=""
            />
        </Link>
    );
}
