import FileInput from "@/Components/FileInput";
import InputError from "@/Components/InputError";
import Spinner from "@/Components/Spinner";
import { Button } from "@/Components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Game, PageProps, User } from "@/types";
import { router, useForm, usePage } from "@inertiajs/react";
import { PenBoxIcon } from "lucide-react";
import {
    ChangeEvent,
    SyntheticEvent,
    useCallback,
    useEffect,
    useState,
} from "react";

interface EditProps {
    game: Game;
}

const Edit = ({ game }: EditProps) => {
    const [showModal, setShowModal] = useState(false);

    const { data, setData, errors, processing, reset, clearErrors } = useForm({
        name: game.name,
        description: game.description,
        image: null as File | null,
    });

    useEffect(() => {
        setData({
            name: game.name,
            description: game.description,
            image: null as File | null,
        });
    }, [game]);

    const submit = (e: SyntheticEvent) => {
        e.preventDefault();
        router.post(
            route("admin.game.update", game.id),
            {
                ...data,
                _method: "put",
            },
            {
                preserveScroll: true,
                onSuccess: () => {
                    setShowModal(false);
                },
                onError: () => alert("Failed to update data"),
            }
        );
    };
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreviewImage(imageUrl);

            setData({
                ...data,
                image: file,
            });
        }
    };
    return (
        <>
            <Dialog open={showModal} onOpenChange={setShowModal}>
                <DialogTrigger asChild>
                    <Button
                        variant={"outline"}
                        onClick={() => setShowModal(true)}
                        size={"sm"}
                        className="hover:bg-red-100 border-orange-500"
                    >
                        <PenBoxIcon className="h-4 w-4 text-orange-500" />
                    </Button>
                </DialogTrigger>
                <DialogContent className=" z-[120] sm:max-w-[1000px] h-auto rounded-lg overflow-auto bg-background">
                    <DialogHeader>
                        <DialogTitle className="py-3 text-xl">
                            Update data kostum
                        </DialogTitle>
                    </DialogHeader>
                    <div className="mt-2">
                        <form
                            className="bg-white border relative mt-4 space-y-4 rounded-xl p-4"
                            onSubmit={submit}
                        >
                            {processing && (
                                <Spinner className="absolute -translate-x-1/2 top-1/2 left-1/2 -translate-y-1/2" />
                            )}
                            <div className="flex flex-col gap-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex flex-col gap-3">
                                            <Label htmlFor="name">
                                                Nama Kostum
                                            </Label>
                                            <Input
                                                type="text"
                                                placeholder="Kazuha Costume"
                                                id="name"
                                                name="name"
                                                value={data.name}
                                                onChange={(e) => {
                                                    setData(
                                                        "name",
                                                        e.target.value
                                                    );
                                                    clearErrors("name");
                                                }}
                                            />
                                            <InputError message={errors.name} />
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <Label htmlFor="description">
                                                Deskripsi
                                            </Label>
                                            <Input
                                                type="text"
                                                placeholder="kostum ini adalah sebuah kostum yang ..."
                                                id="description"
                                                name="description"
                                                value={data.description}
                                                onChange={(e) => {
                                                    setData(
                                                        "description",
                                                        e.target.value
                                                    );
                                                    clearErrors("description");
                                                }}
                                            />
                                            <InputError
                                                message={errors.description}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <div className="flex items-center gap-2">
                                            <Label>Upload Image </Label>
                                        </div>
                                        <img
                                            className="w-full h-60 object-contain"
                                            src={`${
                                                previewImage
                                                    ? previewImage
                                                    : `/storage/${game.image}`
                                            }`}
                                            alt={game.image}
                                        />
                                        <div className="flex flex-col gap-3">
                                            <Input
                                                type="file"
                                                id="image"
                                                name="image"
                                                onChange={handleImageChange}
                                            />
                                            <InputError
                                                message={errors.image}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end w-full gap-3">
                                <Button
                                    type="reset"
                                    disabled={processing}
                                    size={"lg"}
                                    variant={"outline"}
                                    onClick={() => reset()}
                                    className="mt-5"
                                >
                                    Reset
                                </Button>
                                <Button
                                    type="submit"
                                    disabled={processing}
                                    size={"lg"}
                                    className="text-white mt-5"
                                >
                                    Simpan
                                </Button>
                            </div>
                        </form>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default Edit;
