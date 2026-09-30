import {
    ArrowUpRight,
    FolderKanban,
    Mail,
    Plus,
    UserRound,
} from "lucide-react";

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

                <div
                    className="
                        rounded-(--admin-radius-lg)
                        border border-(--admin-border)
                        bg-(--admin-surface)
                        p-5
                        xl:col-span-2
                    "
                >
                    <h2 className="text-sm font-semibold">
                        Recent projects
                    </h2>

                    <p className="mt-1 text-xs text-(--admin-text-muted)">
                        Your latest portfolio updates.
                    </p>

                    {/* Project table/list goes here */}
                </div>

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

                    {/* Quick actions */}
                </div>

            </section>
        </div>
    );
}

export default Dashboard;