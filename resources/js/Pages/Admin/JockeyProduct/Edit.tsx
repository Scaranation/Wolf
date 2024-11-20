import FileInput from "@/Components/FileInput";
import InputError from "@/Components/InputError";
import SelectOptionCustom from "@/Components/SelectOptionCustom";
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
import { Game, JockeyProduct, PageProps, TopupProduct, User } from "@/types";
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
    joki: JockeyProduct;
}

const Edit = ({ joki }: EditProps) => {
    const [showModal, setShowModal] = useState(false);

    const { data, setData, errors, processing, reset, clearErrors } = useForm({
        product_name: joki.product_name,
        price: joki.price,
        details: joki.details,
        game_id: joki.game_id,
    });

    useEffect(() => {
        setData({
            product_name: joki.product_name,
            price: joki.price,
            details: joki.details,
            game_id: joki.game_id,
        });
    }, [joki]);

    const submit = (e: SyntheticEvent) => {
        e.preventDefault();
        router.post(
            route("admin.jasa-joki.update", joki.id),
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
    const { games } = usePage<PageProps>().props;
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
                            Update data Kostum Pre-Order
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
                                            <Label htmlFor="product_name">
                                                Size
                                            </Label>
                                            <Input
                                                type="text"
                                                placeholder="Valorant"
                                                id="product_name"
                                                name="product_name"
                                                value={data.product_name}
                                                onChange={(e) => {
                                                    setData(
                                                        "product_name",
                                                        e.target.value
                                                    );
                                                    clearErrors("product_name");
                                                }}
                                            />
                                            <InputError
                                                message={errors.product_name}
                                            />
                                        </div>{" "}
                                        <SelectOptionCustom
                                            optionName="Pilih Kostum Pre-Order"
                                            htmlFor="game_id"
                                            labelName="Kostum"
                                            optionMap={games.map(
                                                (item, index) => {
                                                    return (
                                                        <option
                                                            value={item.id}
                                                            key={index}
                                                        >
                                                            {item.name}
                                                        </option>
                                                    );
                                                }
                                            )}
                                            errors={errors.game_id}
                                            selectOptionProps={{
                                                name: "game_id",
                                                value: data.game_id,
                                                onChange: (e: any) => {
                                                    setData({
                                                        ...data,
                                                        game_id: e.target.value,
                                                    });
                                                },
                                            }}
                                        />{" "}
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <div className="flex flex-col gap-3">
                                            <Label htmlFor="details">
                                                Detail
                                            </Label>
                                            <Input
                                                type="text"
                                                placeholder="Top up Rp 10.000"
                                                id="details"
                                                name="details"
                                                value={data.details}
                                                onChange={(e) => {
                                                    setData(
                                                        "details",
                                                        e.target.value
                                                    );
                                                    clearErrors("details");
                                                }}
                                            />
                                            <InputError
                                                message={errors.details}
                                            />
                                        </div>{" "}
                                        <div className="flex flex-col gap-3">
                                            <Label htmlFor="price">Harga</Label>
                                            <Input
                                                type="number"
                                                placeholder="Rp 10.000"
                                                id="price"
                                                name="price"
                                                value={data.price}
                                                onChange={(e: any) => {
                                                    setData(
                                                        "price",
                                                        e.target.value
                                                    );
                                                    clearErrors("price");
                                                }}
                                            />
                                            <InputError
                                                message={errors.price}
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
