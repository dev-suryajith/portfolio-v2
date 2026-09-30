import { useState } from "react";
import { Eye, EyeOff, LockKeyhole } from "lucide-react";

import "../../constants/styles/admin.css"

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        console.log({
            email,
            password,
        });
    };

    return (
        <main className="admin-root min-h-screen bg-(--admin-bg) text-(--admin-text)">

            <div className="grid min-h-screen lg:grid-cols-2">

                {/* Left Side */}
                <div className="relative hidden overflow-hidden bg-[#111827] lg:flex">

                    {/* Decorative grid */}
                    <div
                        className="
                            absolute
                            inset-0
                            opacity-[0.06]
                            bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
                            bg-size-[48px_48px]
                        "
                    />

                    {/* Accent glow */}
                    <div
                        className="
                            absolute
                            -left-32
                            -top-32
                            h-96
                            w-96
                            rounded-full
                            bg-indigo-500/20
                            blur-3xl
                        "
                    />

                    <div className="relative z-10 flex w-full flex-col justify-between p-12">

                        {/* Logo */}
                        <div>
                            <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-sm font-semibold text-gray-900">
                                    S
                                </div>

                                <span className="text-sm font-medium text-white">
                                    Suryajith
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="max-w-md">
                            <div className="mb-5 flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-emerald-400" />

                                <span className="text-xs font-medium uppercase tracking-[0.18em] text-gray-400">
                                    Portfolio Admin
                                </span>
                            </div>

                            <h1 className="text-4xl font-semibold tracking-tight text-white xl:text-5xl">
                                Manage your
                                <br />
                                digital presence.
                            </h1>

                            <p className="mt-5 max-w-sm text-sm leading-6 text-gray-400">
                                Manage projects, experience, skills,
                                messages and everything displayed
                                across your portfolio.
                            </p>
                        </div>

                        {/* Footer */}
                        <p className="text-xs text-gray-500">
                            © {new Date().getFullYear()} Suryajith
                        </p>

                    </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center justify-center px-6 py-12 sm:px-10">

                    <div className="w-full max-w-md">

                        {/* Mobile Logo */}
                        <div className="mb-12 lg:hidden">
                            <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-(--admin-text) text-sm font-semibold text-white">
                                    S
                                </div>

                                <span className="text-sm font-medium">
                                    Suryajith
                                </span>
                            </div>
                        </div>

                        {/* Heading */}
                        <div>
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-(--admin-border) bg-(--admin-surface)">
                                <LockKeyhole
                                    size={18}
                                    strokeWidth={1.8}
                                    className="text-(--admin-text-secondary)"
                                />
                            </div>

                            <h2 className="text-2xl font-semibold tracking-tight">
                                Welcome back
                            </h2>

                            <p className="mt-2 text-sm text-(--admin-text-secondary)">
                                Sign in to manage your portfolio.
                            </p>
                        </div>

                        {/* Form */}
                        <form
                            onSubmit={handleSubmit}
                            className="mt-8 space-y-5"
                        >

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Email
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                    placeholder="you@example.com"
                                    autoComplete="email"
                                    className="
                                        h-11
                                        w-full
                                        rounded-(--admin-radius-md)
                                        border
                                        border-(--admin-border)
                                        bg-(--admin-surface)
                                        px-3
                                        text-sm
                                        text-(--admin-text)
                                        outline-none
                                        transition
                                        placeholder:text-(--admin-text-muted)
                                        focus:border-(--admin-border-focus)
                                        focus:ring-3
                                        focus:ring-indigo-500/10
                                    "
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <div className="mb-2 flex items-center justify-between">
                                    <label
                                        htmlFor="password"
                                        className="text-sm font-medium"
                                    >
                                        Password
                                    </label>

                                    <button
                                        type="button"
                                        className="text-xs font-medium text-(--admin-primary) hover:text-(--admin-primary-hover)"
                                    >
                                        Forgot password?
                                    </button>
                                </div>

                                <div className="relative">
                                    <input
                                        id="password"
                                        type={
                                            showPassword
                                                ? "text"
                                                : "password"
                                        }
                                        value={password}
                                        onChange={(event) =>
                                            setPassword(
                                                event.target.value
                                            )
                                        }
                                        placeholder="Enter your password"
                                        autoComplete="current-password"
                                        className="
                                            h-11
                                            w-full
                                            rounded-(--admin-radius-md)
                                            border
                                            border-(--admin-border)
                                            bg-(--admin-surface)
                                            px-3
                                            pr-11
                                            text-sm
                                            text-(--admin-text)
                                            outline-none
                                            transition
                                            placeholder:text-(--admin-text-muted)
                                            focus:border-(--admin-border-focus)
                                            focus:ring-3
                                            focus:ring-indigo-500/10
                                        "
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(
                                                (previous) =>
                                                    !previous
                                            )
                                        }
                                        aria-label={
                                            showPassword
                                                ? "Hide password"
                                                : "Show password"
                                        }
                                        className="
                                            absolute
                                            right-0
                                            top-0
                                            flex
                                            h-11
                                            w-11
                                            items-center
                                            justify-center
                                            text-(--admin-text-muted)
                                            transition
                                            hover:text-(--admin-text)
                                        "
                                    >
                                        {showPassword ? (
                                            <EyeOff size={17} />
                                        ) : (
                                            <Eye size={17} />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="
                                    flex
                                    h-11
                                    w-full
                                    items-center
                                    justify-center
                                    rounded-(--admin-radius-md)
                                    bg-(--admin-primary)
                                    px-4
                                    text-sm
                                    font-medium
                                    text-white
                                    transition
                                    hover:bg-(--admin-primary-hover)
                                    focus:outline-none
                                    focus:ring-3
                                    focus:ring-indigo-500/20
                                "
                            >
                                Sign in
                            </button>

                        </form>

                        {/* Footer */}
                        <p className="mt-8 text-center text-xs text-(--admin-text-muted)">
                            This area is restricted to administrators.
                        </p>

                    </div>
                </div>

            </div>
        </main>
    );
}

export default Login;