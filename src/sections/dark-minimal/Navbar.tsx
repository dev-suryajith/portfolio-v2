import {
    ArrowUpRight,
    Moon,
    Sun,
} from "lucide-react";

import useTheme from "../../hooks/useTheme";

interface NavItem {
    label: string;
    href: string;
}

const navItems: NavItem[] = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="fixed top-0 px-10 left-0 z-(--z-navigation) w-full">
            <div className="container">
                <nav className="flex h-20 items-center justify-between border-b border-(--color-border-subtle)">
                    {/* Logo */}
                    <a
                        href="#"
                        className="font-mono text-sm tracking-tight text-(--color-text) transition-colors duration-300 hover:text-(--color-accent)"
                        aria-label="Suryajith - Home"
                    >
                        S/
                    </a>

                    {/* Navigation */}
                    <div className="hidden items-center gap-8 md:flex">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="font-mono text-xs uppercase tracking-[0.12em] text-(--color-text-secondary) transition-colors duration-300 hover:text-(--color-text)"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-5">
                        {/* Theme Toggle */}
                        <button
                            type="button"
                            onClick={()=>(toggleTheme(),console.log(theme))}
                            aria-label={
                                theme === "dark"
                                    ? "Switch to light mode"
                                    : "Switch to dark mode"
                            }
                            className="
                                flex
                                h-8
                                w-8
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-(--color-border-subtle)
                                text-(--color-text-secondary)
                                transition-all
                                duration-300
                                hover:border-(--color-accent)
                                hover:bg-(--color-accent)
                                hover:text-(--color-bg)
                            "
                        >
                            {theme === "dark" ? (
                                <Sun size={14} strokeWidth={1.5} />
                            ) : (
                                <Moon size={14} strokeWidth={1.5} />
                            )}
                        </button>

                        {/* Availability */}
                        <div className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-(--color-accent)" />

                            <span className="hidden font-mono text-[10px] uppercase tracking-[0.12em] text-(--color-text-muted) sm:block">
                                Available
                            </span>

                            <ArrowUpRight
                                size={14}
                                strokeWidth={1.5}
                                className="text-(--color-text-secondary)"
                            />
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;