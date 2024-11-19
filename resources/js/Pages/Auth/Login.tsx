import { useEffect, FormEventHandler, useState } from "react";
import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import Spinner from "@/Components/Spinner";
import useLocalStorage from "use-local-storage";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import AuthLayout from "@/Layouts/AuthLayout";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const [email, setEmail] = useLocalStorage("email", "");
    const [password, setPassword] = useLocalStorage("password", "");
    const [rememberMe, setRememberMe] = useLocalStorage("rememberMe", false);
    const { data, setData, post, processing, errors, reset } = useForm({
        email: email || "",
        password: password || "",
        remember: rememberMe,
    });

    const [handleShowPassword, setShowPassword] = useState(false);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"), {
            onError: () => reset("password"),
        });
        const rememberMeCheckbox = document.getElementById(
            "terms"
        ) as HTMLInputElement;
        if (rememberMeCheckbox.checked) {
            setEmail(data.email);
            setPassword(data.password);
            setRememberMe(true);
        } else {
            setEmail("");
            setPassword("");
            setRememberMe(false);
        }
    };

    return (
        <AuthLayout>
            <Head title="login" />
            <div className="flex flex-col gap-2">
                <h1 className="text-xl font-bold">Login</h1>
                <p className="text-sm">
                    Masukkan alamat email dan password Anda yang sesuai dan
                    sudah di daftarkan di The Kost
                </p>
            </div>
            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit} className="relative mt-4">
                {processing && (
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Spinner />
                    </div>
                )}
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                        <Input
                            id="password"
                            type={handleShowPassword ? "text" : "password"}
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />{" "}
                        <button
                            type="button"
                            onClick={() => setShowPassword(!handleShowPassword)}
                            className="absolute right-2 top-1/2 -translate-y-1/2"
                        >
                            {handleShowPassword ? (
                                <EyeIcon size={20} />
                            ) : (
                                <EyeOffIcon size={20} />
                            )}
                        </button>
                    </div>

                    <InputError message={errors.password} className="mt-2" />
                </div>
                {canResetPassword && (
                    <Link
                        className="text-sm mt-3 text-end inline-block w-full text-zinc-500 decoration-2 hover:underline font-medium"
                        href={route("password.request")}
                    >
                        Lupa Password ?
                    </Link>
                )}
                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            id="terms"
                            checked={data.remember}
                            name="remember"
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <span className="ms-2 text-sm text-gray-600">
                            Ingat Saya
                        </span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-8">
                    <Button className=" w-full" disabled={processing}>
                        Log in
                    </Button>
                </div>
            </form>
        </AuthLayout>
    );
}
