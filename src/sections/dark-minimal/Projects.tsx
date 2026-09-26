const projects = [
    {
        number: "01",
        title: "WatchParty",
        year: "2026",
        description:
            "A shared watching experience for movies and TV shows with content discovery and synchronized party sessions.",
        stack: ["React", "Vite", "TMDB"],
        href: "#",
    },
    {
        number: "02",
        title: "Playvo",
        year: "2026",
        description:
            "A sports venue discovery and booking platform designed to make finding and booking playing spaces easier.",
        stack: ["React Native", "Expo", "Node.js"],
        href: "#",
    },
    {
        number: "03",
        title: "Trip Expense",
        year: "2026",
        description:
            "A collaborative expense management app for tracking and splitting expenses during trips.",
        stack: ["React Native", "TypeScript", "Expo"],
        href: "#",
    },
];

const Projects = () => {
    return (
        <section
            id="work"
            className="relative border-t border-(--color-border-subtle) py-16 lg:py-24"
        >
            <div className="container">
                {/* Section Header */}
                <div className="mb-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-(--color-accent)" />

                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-(--color-text-muted)">
                            02 / Selected Work
                        </span>
                    </div>

                    <span className="font-mono text-[10px] text-(--color-text-muted)">
                        {String(projects.length).padStart(2, "0")} Projects
                    </span>
                </div>

                {/* Projects List */}
                <div>
                    {projects.map((project) => (
                        <a
                            key={project.number}
                            href={project.href}
                            className="group grid grid-cols-[40px_1fr_auto_auto] items-center gap-6 border-t border-(--color-border-subtle) py-10 transition-colors duration-300 hover:bg-(--color-surface) last:border-b lg:grid-cols-[60px_1fr_120px_40px]"
                        >
                            {/* Project Number */}
                            <span
                                className="self-start pt-2 font-mono text-[10px] text-(--color-text-muted) transition-colors duration-300 group-hover:text-(--color-accent)"
                            >
                                {project.number}
                            </span>

                            {/* Project Content */}
                            <div className="min-w-0">
                                <h3
                                    className="text-3xl font-medium tracking-[-0.03em] text-(--color-text) transition-colors duration-300 group-hover:text-(--color-accent) sm:text-4xl lg:text-5xl"
                                >
                                    {project.title}
                                </h3>

                                <p className="mt-4 max-w-xl text-sm leading-relaxed text-(--color-text-secondary)">
                                    {project.description}
                                </p>

                                {/* Stack */}
                                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                                    {project.stack.map((technology) => (
                                        <span
                                            key={technology}
                                            className="font-mono text-[9px] uppercase tracking-[0.12em] text-(--color-text-muted)">
                                            {technology}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Year */}
                            <span
                                className="hidden self-start pt-2 text-right font-mono text-[10px] text-(--color-text-muted) sm:block"
                            >
                                {project.year}
                            </span>

                            {/* Arrow */}
                            <span
                                className="self-start pt-1 text-xl text-(--color-text-muted) transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-(--color-accent)"
                            >
                                ↗
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;