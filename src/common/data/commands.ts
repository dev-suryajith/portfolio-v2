export type TerminalCommand = {
    name: string;
    description: string;
    execute: () => string[];
};

export const commands: Record<string, TerminalCommand> = {
    help: {
        name: "help",
        description: "Show available commands",
        execute: () => [
            "Available commands:",
            "",
            "  help        Show available commands",
            "  about       About me",
            "  skills      View technical skills",
            "  projects    View projects",
            "  experience  View experience",
            "  contact     Contact information",
            "  clear       Clear terminal",
        ],
    },

    about: {
        name: "about",
        description: "About me",
        execute: () => [
            "Suryajith",
            "Frontend Developer",
            "",
            "I build modern web interfaces,",
            "interactive experiences, and web applications.",
        ],
    },

    skills: {
        name: "skills",
        description: "View technical skills",
        execute: () => [
            "Skills",
            "",
            "Frontend",
            "  React",
            "  TypeScript",
            "  JavaScript",
            "  Tailwind CSS",
            "",
            "Backend",
            "  Node.js",
            "  Express",
            "  MongoDB",
        ],
    },

    projects: {
        name: "projects",
        description: "View projects",
        execute: () => [
            "Projects",
            "",
            "  Portfolio",
            "  Playvo",
            "  WatchParty",
            "  Trip Expense",
        ],
    },

    experience: {
        name: "experience",
        description: "View experience",
        execute: () => [
            "Experience",
            "",
            "Frontend Developer",
            "Hestia Technologies",
        ],
    },

    contact: {
        name: "contact",
        description: "Contact information",
        execute: () => [
            "Contact",
            "",
            "Email: your@email.com",
            "GitHub: github.com/yourusername",
            "LinkedIn: linkedin.com/in/yourusername",
        ],
    },
};