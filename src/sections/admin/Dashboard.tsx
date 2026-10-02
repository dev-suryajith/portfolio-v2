import { useEffect, useState } from "react";
import {
    ArrowUpRight,
    FolderKanban,
    Mail,
    Plus,
    UserRound,
} from "lucide-react";

import { getProjectsAPI } from "../../services/allAPI";
import SupaTable from "../../components/ui/SupaComponents/SupaTable";

interface Project {
    _id: string;
    title: string;
    year: number;
    description: string;
    stack: string[];
    href: string;
    status: boolean;
    createdAt: string;
    updatedAt: string;
}

const stats = [
    {
        label: "Projects",
        value: "12",
        change: "+2 this month",
        icon: FolderKanban,
    },
    {
        label: "Experience",
        value: "4",
        change: "Active",
        icon: UserRound,
    },
    {
        label: "Messages",
        value: "18",
        change: "5 unread",
        icon: Mail,
    },
    {
        label: "Profile Views",
        value: "2,481",
        change: "+18.4%",
        icon: ArrowUpRight,
    },
];

function Dashboard() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    const getProjects = async () => {
        try {
            const response = await getProjectsAPI();

            if (response.data.success) {
                setProjects(response.data.projects);
            }
        } catch (error) {
            console.error("Failed to fetch projects:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProjects();
    }, []);

    const projectColumns = [
        {
            key: "title" as keyof Project,
            label: "Project",
        },
        {
            key: "year" as keyof Project,
            label: "Year",
        },
        {
            key: "stack" as keyof Project,
            label: "Stack",
            render: (value: Project["stack"]) => (
                <div className="flex flex-wrap gap-1.5">
                    {value.map((technology) => (
                        <span
                            key={technology}
                            className="
                                rounded-full
                                bg-(--admin-surface-muted)
                                px-2
                                py-1
                                text-[11px]
                                text-(--admin-text-secondary)
                            "
                        >
                            {technology}
                        </span>
                    ))}
                </div>
            ),
        },
        {
            key: "status" as keyof Project,
            label: "Status",
        },
        {
            key: "href" as keyof Project,
            label: "Link",
            render: (value: Project["href"]) => (
                <a
                    href={value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-(--admin-primary) hover:underline"
                >
                    View
                </a>
            ),
        },
    ];

    return (
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">

            {/* Heading */}
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                <div>
                    <p className="text-sm text-(--admin-text-muted)">
                        Monday, September 28, 2026
                    </p>

                    <h1 className="mt-1 text-2xl font-semibold tracking-tight">
                        Good evening, Suryajith
                    </h1>

                    <p className="mt-1 text-sm text-(--admin-text-secondary)">
                        Here's what's happening with your portfolio.
                    </p>
                </div>

                <button
                    type="button"
                    className="
                        inline-flex h-10 items-center justify-center gap-2
                        rounded-(--admin-radius-md)
                        bg-(--admin-primary)
                        px-4 text-sm font-medium text-white
                        transition
                        hover:bg-(--admin-primary-hover)
                    "
                >
                    <Plus size={17} />
                    Add project
                </button>
            </div>

            {/* Stats */}
            <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat) => {
                    const Icon = stat.icon;

                    return (
                        <div
                            key={stat.label}
                            className="
                                rounded-(--admin-radius-lg)
                                border border-(--admin-border)
                                bg-(--admin-surface)
                                p-5
                            "
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-sm text-(--admin-text-secondary)">
                                        {stat.label}
                                    </p>

                                    <p className="mt-2 text-2xl font-semibold">
                                        {stat.value}
                                    </p>
                                </div>

                                <div
                                    className="
                                        flex h-9 w-9
                                        items-center justify-center
                                        rounded-(--admin-radius-md)
                                        bg-indigo-50
                                        text-(--admin-primary)
                                    "
                                >
                                    <Icon size={18} />
                                </div>
                            </div>

                            <p className="mt-4 text-xs text-(--admin-text-muted)">
                                {stat.change}
                            </p>
                        </div>
                    );
                })}
            </section>

            {/* Dashboard content */}
            <section className="mt-6 grid gap-6 xl:grid-cols-3">

                {/* Recent Projects */}
                <div className="xl:col-span-2">

                    <div className="mb-4">
                        <h2 className="text-sm font-semibold">
                            Recent projects
                        </h2>

                        <p className="mt-1 text-xs text-(--admin-text-muted)">
                            Your latest portfolio updates.
                        </p>
                    </div>

                    {loading ? (
                        <div
                            className="
                                rounded-(--admin-radius-lg)
                                border border-(--admin-border)
                                bg-(--admin-surface)
                                py-10
                                text-center
                                text-sm
                                text-(--admin-text-muted)
                            "
                        >
                            Loading projects...
                        </div>
                    ) : (
                        <SupaTable
                            columns={projectColumns}
                            data={projects}
                            emptyMessage="No projects found."
                        />
                    )}
                </div>

                {/* Quick Actions */}
                <div
                    className="
                        rounded-(--admin-radius-lg)
                        border border-(--admin-border)
                        bg-(--admin-surface)
                        p-5
                    "
                >
                    <h2 className="text-sm font-semibold">
                        Quick actions
                    </h2>

                    <p className="mt-1 text-xs text-(--admin-text-muted)">
                        Manage your portfolio content.
                    </p>

                    <div className="mt-5 space-y-2">
                        <button
                            type="button"
                            className="
                                flex w-full items-center justify-between
                                rounded-(--admin-radius-md)
                                border border-(--admin-border)
                                px-4 py-3
                                text-sm
                                text-(--admin-text-secondary)
                                transition-colors
                                hover:bg-(--admin-surface-muted)
                                hover:text-(--admin-text)
                            "
                        >
                            <span className="flex items-center gap-3">
                                <Plus size={16} />
                                Add project
                            </span>

                            <ArrowUpRight size={15} />
                        </button>

                        <button
                            type="button"
                            className="
                                flex w-full items-center justify-between
                                rounded-(--admin-radius-md)
                                border border-(--admin-border)
                                px-4 py-3
                                text-sm
                                text-(--admin-text-secondary)
                                transition-colors
                                hover:bg-(--admin-surface-muted)
                                hover:text-(--admin-text)
                            "
                        >
                            <span className="flex items-center gap-3">
                                <FolderKanban size={16} />
                                Manage projects
                            </span>

                            <ArrowUpRight size={15} />
                        </button>

                        <button
                            type="button"
                            className="
                                flex w-full items-center justify-between
                                rounded-(--admin-radius-md)
                                border border-(--admin-border)
                                px-4 py-3
                                text-sm
                                text-(--admin-text-secondary)
                                transition-colors
                                hover:bg-(--admin-surface-muted)
                                hover:text-(--admin-text)
                            "
                        >
                            <span className="flex items-center gap-3">
                                <Mail size={16} />
                                View messages
                            </span>

                            <ArrowUpRight size={15} />
                        </button>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Dashboard;