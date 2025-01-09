import GuestLayout from "@/Layouts/GuestLayout";
import BgHero from "../../../public/Bg/Hero.jpg";
import Joki from "../../../public/Bg/joki.jpg";
import Topup from "../../../public/Bg/topup.png";
import { Game } from "@/types";
import { Link } from "@inertiajs/react";
import { Bolt, Globe, Headset, Zap } from "lucide-react";
import { FormatRupiah } from "@arismun/format-rupiah";
import { Button } from "@/Components/ui/button";
import { Inertia } from "@inertiajs/inertia";

interface Props {
games: Game;
}

const handleOrder = (price: number, productName: string, details: string) => {
// Kirim data harga dan nama produk ke halaman pembayaran
Inertia.post('/stripe', { price, productName, details }, {
onSuccess: (response) => {
console.log('Data sent successfully:', response);
},
preserveState: true,
});
};


const Welcome = ({ games }: Props) => {
return (
<GuestLayout head="dashboard">
    <section className="mt-36 flex-col mb-32 flex  px-60">
        <div className="flex items-center gap-10">
            <img src={`/storage/${games.image}`} className="size-80 object-cover rounded-xl" alt="" />
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold uppercase">
                    {games.name}
                </h1>
                <h2>{games.description}</h2>
                <div className="flex mt-4 text-primary font-semibold items-center gap-2">
                    <Zap />
                    <p>Proses Cepat</p>
                </div>{" "}
                <div className="flex mt-2  text-primary font-semibold items-center gap-2">
                    <Headset />
                    <p>Layanan Chat 24/7</p>
                </div>{" "}
                <div className="flex mt-2  text-primary font-semibold items-center gap-2">
                    <Globe />
                    <p>Tidak ribet</p>
                </div>
            </div>
        </div>

        <div className="mt-10">
            <p className="text-4xl font-bold">Kostum</p>
            <hr className="my-4" />
            <ul className="mt-4 space-y-2 ">
                {games.topup_products.map((topup) => (
                <li className="flex font-semibold text-xl justify-between items-center">
                    <div className="flex flex-col gap-2">
                        <p>{topup.product_name}</p>
                        <p className="text-sm text-zinc-400">
                            {topup.details}
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <p>
                            <FormatRupiah value={topup.price} />
                        </p>
                        <Button>
                            <a
                                href={`/stripe?product_name=${encodeURIComponent(topup.product_name)}&details=${encodeURIComponent(topup.details)}&price=${topup.price}&jockey_product_id=${encodeURIComponent(games.jockey_products[0].id)}`}>
                                Pesan Sekarang!
                            </a>
                        </Button>

                    </div>
                </li>
                ))}
            </ul>
        </div>
        <div className="mt-10">
            <p className="text-4xl font-bold">Kostum (Pre-Order) </p>
            <hr className="my-4" />
            <ul className="mt-4 space-y-2 ">
                {games.jockey_products.map((topup) => (
                <li className="flex font-semibold text-xl justify-between items-center">
                    <div className="flex flex-col gap-2">
                        <p>{topup.product_name}</p>
                        <p className="text-sm text-zinc-400">
                            {topup.details}
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <p>
                            <FormatRupiah value={topup.price} />
                        </p>
                        <Button>
                            <a
                                href={`/stripe?product_name=${encodeURIComponent(topup.product_name)}&details=${encodeURIComponent(topup.details)}&price=${topup.price}&jockey_product_id=${encodeURIComponent(games.jockey_products[0].id)}`}>
                                Pre Order!
                            </a>
                        </Button>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    </section>
</GuestLayout>
);
};

export default Welcome;
