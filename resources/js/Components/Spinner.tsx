import { cn } from "@/lib/utils";

interface Props {
    className?: string;
}

const Spinner = ({ className }: Props) => {
    return (
        <img
            className={cn("size-12", className)}
            src="https://i.gifer.com/ZKZg.gif"
            alt=""
        />
    );
};

export default Spinner;
