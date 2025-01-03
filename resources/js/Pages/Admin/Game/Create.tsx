import FileInput from "@/Components/FileInput";
import InputError from "@/Components/InputError";
import Spinner from "@/Components/Spinner";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { PageProps } from "@/types";
import { router, useForm, usePage } from "@inertiajs/react";
import { Key, Settings } from "lucide-react";
import { useCallback, useState } from "react";

const Create: React.FC = () => {
    const { data, setData, errors, processing, reset, post, clearErrors } =
        useForm({
            name: "",
            description: "",
            image: "",
        });

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(route("admin.game.store"), {
            forceFormData: true,
            onSuccess: () => {
                reset("name", "image", "name");
            },
            preserveScroll: true,
            preserveState: true,
        });
    }

    const handleDrop = useCallback(
        (acceptedFiles: any) => {
            setData("image", acceptedFiles[0]);
        },
        [setData]
    );

    return (
        <form
            className="bg-white border relative mt-4 space-y-4 rounded-xl p-4"
            onSubmit={handleSubmit}
        >
            {processing && (
                <Spinner className="absolute -translate-x-1/2 top-1/2 left-1/2 -translate-y-1/2" />
            )}
            <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="name">Nama Kostum</Label>
                            <Input
                                type="text"
                                placeholder="Kazuha Costume"
                                id="name"
                                name="name"
                                value={data.name}
                                onChange={(e) => {
                                    setData("name", e.target.value);
                                    clearErrors("name");
                                }}
                            />
                            <InputError message={errors.name} />
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="description">Deskripsi</Label>
                            <Input
                                type="text"
                                placeholder="kostum ini adalah sebuah kostum yang ..."
                                id="description"
                                name="description"
                                value={data.description}
                                onChange={(e) => {
                                    setData("description", e.target.value);
                                    clearErrors("description");
                                }}
                            />
                            <InputError message={errors.description} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                            <Label>Upload Gambar</Label>
                        </div>
                        <FileInput onDrop={handleDrop} accept="image/*" />
                        <InputError message={errors.image} />
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
    );
};

export default Create;
