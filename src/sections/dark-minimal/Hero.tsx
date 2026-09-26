import CharacterScene from "../../components/3d/CharacterScene";

const Hero = () => {
    return (
       <section className="relative min-h-screen overflow-hidden">
    <div className="grid min-h-screen w-full grid-cols-1 items-end gap-12 pb-20 lg:grid-cols-12 lg:pb-24">

        {/* Main Content */}
                <div className="relative z-10 self-end lg:col-span-8">
                    {/* Eyebrow */}
                    <div className="mb-8 flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-(--color-accent)" />

                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-(--color-text-muted)">
                            Frontend Developer
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="max-w-5xl text-[clamp(4rem,10vw,9rem)] font-medium leading-[0.88] tracking-[-0.06em] text-(--color-text)">
                        I BUILD
                        <br />
                        <span className="text-(--color-text-secondary)">
                            DIGITAL
                        </span>
                        <br />
                        EXPERIENCES.
                    </h1>

                    {/* Bottom Content */}
                    <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

                        <p className="max-w-sm text-sm leading-relaxed text-(--color-text-secondary)">
                            Frontend developer focused on building
                            thoughtful interfaces, interactive experiences,
                            and modern web applications.
                        </p>

                        <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-(--color-accent)">
                            React · TypeScript · Node.js
                        </div>
                    </div>
                </div>

                {/* 3D Visual Placeholder */}
                 <div className="relative h-125 self-end lg:col-span-4 lg:h-[70vh]">
                    <CharacterScene />
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-0 w-full">
                <div className="container">
                    <div className="flex items-center gap-3">
                        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-(--color-accent)">
                            Scroll
                        </span>

                        <div className="h-px w-12 bg-(--color-accent)" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;