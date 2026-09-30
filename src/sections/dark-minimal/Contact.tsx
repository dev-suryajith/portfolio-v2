import { MapPin } from "lucide-react";

const details = [
    {
        key: "email",
        label: "Email",
        value: "suryajithss2608@gmail.com",
        href: undefined
    },
    {
        key: "linkedIn",
        label: "LinkedIn",
        value: "Suryajith S S",
        href: "https://www.linkedin.com/in/suryajith-ss"
    },
    {
        key: "github",
        label: "GitHub",
        value: "dev-suryajith",
        href: "https://github.com/dev-suryajith"
    },
];

const Contact = () => {
    return (
        <section
            id="contact"
            className="relative border-t border-(--color-border-subtle) py-32 lg:py-48"
        >
            <div className="container">
                {/* Section Header */}
                <div className="mb-20 flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-(--color-accent)" />

                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-(--color-text-muted)">
                        03 / Contact
                    </span>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
                    {/* Heading */}
                    <div className="lg:col-span-8">
                        <h2 className="max-w-5xl text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.9] tracking-tighter text-(--color-text)">
                            HAVE A PROJECT
                            <br />
                            <span className="text-(--color-text-secondary)">
                                IN MIND?
                            </span>
                        </h2>

                        <p className="mt-10 max-w-lg text-sm leading-relaxed text-(--color-text-secondary)">
                            I'm always open to discussing new projects,
                            creative ideas, or opportunities to build something
                            interesting together.
                        </p>
                    </div>

                    {/* Contact Details */}
                    <div className="lg:col-span-4">
                        <div className="border-t border-(--color-border-subtle)">

                            {details.map((detail) => (
                                <div
                                    key={detail.label}
                                    className="flex items-center justify-between gap-6 border-b border-(--color-border-subtle) py-6"
                                >
                                    <span className="shrink-0 font-mono text-[9px] uppercase tracking-[0.2em] text-(--color-text-muted)">
                                        {detail.label}
                                    </span>

                                    <a
                                        href={detail.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group inline-flex items-center gap-2 text-right text-sm text-(--color-text-secondary) transition-colors duration-300 hover:text-(--color-accent)"
                                    >
                                        <span>{detail.value}</span>

                                        {
                                            detail.href && (
                                                <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                                                    ↗
                                                </span>
                                            )
                                        }
                                    </a>
                                </div>
                            ))}

                            {/* Location */}
                            <div className="py-6">
                                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-(--color-text-muted)">
                                    Location
                                </span>

                                <p className="mt-4 flex gap-1 items-center text-sm text-(--color-text-secondary)">
                                    <MapPin size={15} /> Kerala, India
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-24 border-t border-(--color-border-subtle) pt-8">
                    <a
                        href="mailto:your@email.com"
                        className="group flex items-center justify-between"
                    >
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-(--color-text-muted)">
                            Start a conversation
                        </span>

                        <span className="text-2xl text-(--color-text-muted) transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-(--color-accent)">
                            ↗
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;