const Footer = () => {
    return (
        <footer className="border-t border-(--color-border-subtle)">
            <div className="container py-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    {/* Copyright */}
                    <div className="flex items-center gap-3">
                        <span className="font-mono text-[10px] text-(--color-text-muted)">
                            © {new Date().getFullYear()}
                        </span>

                        <span className="h-1 w-1 rounded-full bg-(--color-border)" />

                        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-(--color-text-muted)">
                            Suryajith
                        </span>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-6">
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-[10px] uppercase tracking-[0.15em] text-(--color-text-muted) transition-colors duration-300 hover:text-(--color-accent)"
                        >
                            GitHub
                        </a>

                        <a
                            href="https://linkedin.com/in/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-[10px] uppercase tracking-[0.15em] text-(--color-text-muted) transition-colors duration-300 hover:text-(--color-accent)"
                        >
                            LinkedIn
                        </a>

                        <a
                            href="mailto:your@email.com"
                            className="font-mono text-[10px] uppercase tracking-[0.15em] text-(--color-text-muted) transition-colors duration-300 hover:text-(--color-accent)"
                        >
                            Email
                        </a>
                    </div>

                    {/* Back to Top */}
                    <button
                        type="button"
                        onClick={() =>
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            })
                        }
                        className="group inline-flex items-center gap-2 self-start font-mono text-[10px] uppercase tracking-[0.15em] text-(--color-text-muted) transition-colors duration-300 hover:text-(--color-accent) sm:self-auto"
                    >
                        Back to top

                        <span className="transition-transform duration-300 group-hover:-translate-y-1">
                            ↑
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;