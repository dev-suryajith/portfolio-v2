export type Project = {
    name: string;
    description: string;
    tech: string[];
    github?: string;
    live?: string;
};

import Tab from "./Tab";

function ProjectTab({onClose}) {

    const projects: Project[] = [
        {
            name: "Playvo",
            description:
                "A sports turf booking application for discovering and booking sports venues.",
            tech: [
                "React Native",
                "Expo",
                "Node.js",
                "Express",
                "MongoDB",
            ],
        },

        {
            name: "WatchParty",
            description:
                "A web application for watching content together with other users.",
            tech: [
                "React",
                "Vite",
                "Tailwind CSS",
                "TMDB API",
            ],
        },

        {
            name: "Trip Expense",
            description:
                "A collaborative expense tracking application for managing trip expenses.",
            tech: [
                "React Native",
                "TypeScript",
                "Expo",
            ],
        },
    ];
    return (
        <Tab title="suryajith@portfolio: ~/projects" onClose={onClose}>

            <div>
                <div className="text-(--color-accent)">
                    $ ls projects
                </div>

                <div className="mt-6 space-y-6">
                    {projects.map((project) => (
                        <div key={project.name}>

                            <div className="text-(--color-text)">
                                {project.name}
                            </div>

                            <div className="mt-1 text-(--color-text-secondary)">
                                {project.description}
                            </div>

                            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-(--color-text-muted)"
                                    >
                                        [{tech}]
                                    </span>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </Tab>
    );
}

export default ProjectTab;