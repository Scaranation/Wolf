import GuestLayout from "@/Layouts/GuestLayout";
import BgHero from "../../../public/Bg/Hero.jpg";
import Joki from "../../../public/Bg/joki.jpg";
import Topup from "../../../public/Bg/topup.png";
import { Game } from "@/types";
import { Link } from "@inertiajs/react";

interface Props {
    games: Game[];
}
const Welcome = (props: Props) => {
    return (
        <GuestLayout head="dashboard">
            <div className="flex h-screen items-center justify-center flex-col mt-16">
                <section className="relatve">
                    <div className="mx-auto w-full gap-10 flex items-center max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
                        <div className="mx-auto mb-12 w-full max-w-3xl md:mb-16 lg:mb-20">
                            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
                                Situs Top Up Game yang Anda Inginkan Tanpa{" "}
                                <span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/6390526ac2a607693620c97b_Rectangle%2010.svg')] bg-cover bg-center px-4 text-white">
                                    Ribet
                                </span>
                                .
                            </h1>
                            <p className="mx-auto mb-5  text-xl text-[#636262] lg:mb-8">
                                Top up game favorit Anda dengan mudah dan cepat.
                                Dapatkan penawaran terbaik dan harga terjangkau
                                hanya di sini.
                            </p>

                            <div className="flex justify-start">
                                <a
                                    href="#"
                                    className="mr-5 inline-block rounded-md bg-black px-8 py-4 text-center font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px] md:mr-6"
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>

                        <img src={BgHero} alt="" className="h-4/5 w-4/5 max-w-lg"/>
                    </div>
                    <img
                        src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905b9f809b5c8180ce30c5_pattern-1.svg"
                        alt=""
                        className="absolute bottom-0 left-0 right-auto top-auto -z-10 inline-block md:bottom-1/2 md:left-0 md:right-auto md:top-auto"
                    />
                    {/* <img
                        src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905ba1538296b3f50a905e_pattern-2.svg"
                        alt=""
                        className="absolute bottom-auto left-auto right-0 top-28 -z-10 hidden sm:inline-block"
                    />{" "} */}
                    <img
                        src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905ba1538296b3f50a905e_pattern-2.svg"
                        alt=""
                        className="absolute  left-auto right-0 bottom-28 -z-10 hidden sm:inline-block"
                    />
                </section>
            </div>{" "}
            <div className="w-full px-40 flex-col mb-20 flex">
                {" "}
                <h2 className="text-4xl font-bold text-center">
                    {" "}
                    <span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/6390526ac2a607693620c97b_Rectangle%2010.svg')] bg-cover bg-center py-4 px-8 text-white">
                        Top Up dan Joki
                    </span>{" "}
                    Terbaik untuk Anda
                </h2>
                <div className="flex justify-center mt-20 items-center gap-16">
                    <div className=" flex flex-col gap-4 max-w-lg w-1/2">
                        <img src={Topup} className="rounded-xl h-96" alt="" />
                        <p className="text-gray-700 text-lg  dark:text-gray-300 mb-2">
                            Nikmati kemudahan dan kecepatan dalam melakukan top
                            up game favorit Anda dengan layanan terbaik dari
                            kami. Kami menyediakan berbagai pilihan pembayaran
                            yang aman dan cepat, memastikan Anda dapat segera
                            kembali bermain tanpa hambatan.
                        </p>
                    </div>{" "}
                    <div className=" flex flex-col gap-4 max-w-lg w-1/2">
                        <img src={Joki} className="rounded-xl h-96" alt="" />
                        <p className="text-gray-700 text-lg   dark:text-gray-300 mb-2">
                            Butuh bantuan untuk meningkatkan peringkat atau
                            mencapai target dalam game? Layanan joki profesional
                            kami siap membantu Anda mencapai tujuan dengan cepat
                            dan aman. Dengan tim yang berpengalaman dan
                            terpercaya, kami menjamin kepuasan dan hasil terbaik
                            untuk setiap pelanggan.
                        </p>
                    </div>
                </div>{" "}
                <div className="flex mt-20 items-center gap-10"></div>
            </div>
            <div className="w-full px-40 flex-col mb-20 flex">
                <h2 className="text-4xl font-bold text-center">
                    GAME YANG{" "}
                    <span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/6390526ac2a607693620c97b_Rectangle%2010.svg')] bg-cover bg-center py-2 px-4 text-white">
                        TERSEDIA
                    </span>{" "}
                </h2>
                <div className="mt-28 gap-10 grid grid-cols-4">
                    {props.games.map((game) => (
                        <Link
                            href={route("user.game.show", game.slug)}
                            key={game.id}
                            className="flex hover:bg-primary/10 cursor-pointer group transition-all p-4 rounded-xl  flex-col items-center justify-center"
                        >
                            <img
                                src={`/storage/${game.image}`}
                                alt="game"
                                className="h-64 w-full  rounded-lg object-cover"
                            />
                            <p className="mt-4 text-2xl uppercase font-semibold group-hover:text-primary">
                                {game.name}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </GuestLayout>
    );
};

export default Welcome;
