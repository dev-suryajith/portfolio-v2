const About = () => {

    return (
        <section
            id="about"
            className="relative border-t border-(--color-border-subtle) py-16 lg:py-24"
        >
            <div className="container">

                {/* Section Header */}
                <div className="mb-16 flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-(--color-accent)" />

                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-(--color-text-muted)">
                        01 / About
                    </span>
                </div>

                <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">

                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        <h2 className="max-w-4xl text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[0.95] tracking-[-0.04em] text-(--color-text)">
                            I BUILD INTERFACES THAT FEEL AS GOOD AS THEY LOOK.
                        </h2>

                        <div className="mt-12 max-w-2xl space-y-6 text-sm leading-relaxed text-(--color-text-secondary)">
                            <p>
                                I like building things for the web — from polished
                                interfaces to interactive experiences that make
                                people stop and explore.
                            </p>

                            <p>
                                I'm particularly interested in frontend development,
                                creative interactions, and bringing 3D into the
                                browser.
                            </p>

                            <p>
                                Most of my work revolves around React and TypeScript,
                                while I also work with Node.js, Express, and MongoDB
                                when a project needs a complete backend.
                            </p>
                        </div>
                    </div>

                    {/* Details */}
                    <div className="lg:col-span-4">

                        {/* Focus */}
                        <div className="border-t border-(--color-border-subtle) py-6">
                            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-(--color-text-muted)">
                                Focus
                            </span>

                            <ul className="mt-5 space-y-2 text-sm text-(--color-text-secondary)">
                                <li>Frontend Development</li>
                                <li>Interactive Experiences</li>
                                <li>Responsive Interfaces</li>
                                {/* <li>3D on the Web</li> */}
                            </ul>
                        </div>

                        {/* Stack */}
                        <div className="border-t border-(--color-border-subtle) py-6">
                            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-(--color-text-muted)">
                                Stack
                            </span>

                            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-(--color-text-secondary)">
                                <span>React</span>
                                <span>TypeScript</span>
                                <span>JavaScript</span>
                                <span>Tailwind CSS</span>
                                <span>Node.js</span>
                                <span>Express</span>
                                <span>MongoDB</span>
                            </div>
                        </div>

                        {/* Currently */}
                        <div className="border-t border-(--color-border-subtle) py-6">
                            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-(--color-text-muted)">
                                Currently
                            </span>

                            <p className="mt-5 text-sm leading-relaxed text-(--color-text-secondary)">
                                Working as a Frontend Developer at{" "}
                                <a
                                    href="https://www.hestiatechnology.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hestia-link"
                                >
                                    Hestia Technology
                                </a>
                                .
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <style>
                {`
        .hestia-link {
            display: inline-block;
            color: #a1a1aa;
            transition: color 300ms ease, transform 300ms ease;
        }

        .hestia-link:hover {
            color: #b8ff3d;
            transform: translate(0px, -4px);
            text-decoration: underline;
        }
    `}
            </style>
        </section>
    );
};

export default About;