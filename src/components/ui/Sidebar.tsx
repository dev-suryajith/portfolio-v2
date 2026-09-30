import {
    BarChart3,
    BriefcaseBusiness,
    FolderKanban,
    Image,
    LayoutDashboard,
    LogOut,
    MessageSquare,
    Settings,
    UserRound,
    X,
    type LucideIcon,
} from "lucide-react";

export type AdminScreen =
    | "dashboard"
    | "projects"
    | "experience"
    | "skills"
    | "about"
    | "messages"
    | "media"
    | "settings";

interface NavigationItem {
    id: AdminScreen;
    label: string;
    icon: LucideIcon;
}

interface AdminSidebarProps {
    activeScreen: AdminScreen;
    sidebarOpen: boolean;
    onNavigate: (screen: AdminScreen) => void;
    onClose: () => void;
}

const navigation: NavigationItem[] = [
    {
        id: "dashboard",
        label: "Dashboard",
        icon: LayoutDashboard,
    },
    {
        id: "projects",
        label: "Projects",
        icon: FolderKanban,
    },
    {
        id: "experience",
        label: "Experience",
        icon: BriefcaseBusiness,
    },
    {
        id: "skills",
        label: "Skills",
        icon: BarChart3,
    },
    {
        id: "about",
        label: "About",
        icon: UserRound,
    },
];

const secondaryNavigation: NavigationItem[] = [
    {
        id: "messages",
        label: "Messages",
        icon: MessageSquare,
    },
    {
        id: "media",
        label: "Media",
        icon: Image,
    },
    {
        id: "settings",
        label: "Settings",
        icon: Settings,
    },
];

function Sidebar({
    activeScreen,
    sidebarOpen,
    onNavigate,
    onClose,
}: AdminSidebarProps) {
    const handleNavigate = (screen: AdminScreen) => {
        onNavigate(screen);
        onClose();
    };

    return (
        <>
            {/* Mobile overlay */}
            {sidebarOpen && (
                <button
                    type="button"
                    aria-label="Close sidebar"
                    onClick={onClose}
                    className="
                        fixed inset-0 z-40
                        bg-black/30
                        lg:hidden
                    "
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
                    fixed inset-y-0 left-0 z-50
                    flex w-64 flex-col
                    border-r border-(--admin-border)
                    bg-(--admin-surface)
                    transition-transform duration-200
                    lg:translate-x-0
                    ${
                        sidebarOpen
                            ? "translate-x-0"
                            : "-translate-x-full"
                    }
                `}
            >
                {/* Header */}
                <div className="flex h-16 shrink-0 items-center justify-between border-b border-(--admin-border) px-5">
                    <div className="flex items-center gap-3">
                        <div
                            className="
                                flex h-8 w-8
                                items-center justify-center
                                rounded-(--admin-radius-md)
                                bg-(--admin-text)
                                text-xs font-semibold text-white
                            "
                        >
                            S
                        </div>

                        <div>
                            <p className="text-sm font-semibold">
                                Suryajith
                            </p>

                            <p className="text-[11px] text-(--admin-text-muted)">
                                Portfolio Admin
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="
                            flex h-8 w-8 items-center justify-center
                            rounded-(--admin-radius-md)
                            text-(--admin-text-muted)
                            transition
                            hover:bg-(--admin-surface-muted)
                            hover:text-(--admin-text)
                            lg:hidden
                        "
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto px-3 py-5">
                    <NavigationGroup
                        title="Overview"
                        items={navigation}
                        activeScreen={activeScreen}
                        onNavigate={handleNavigate}
                    />

                    <NavigationGroup
                        title="Management"
                        items={secondaryNavigation}
                        activeScreen={activeScreen}
                        onNavigate={handleNavigate}
                    />
                </nav>

                {/* User / Logout */}
                <div className="border-t border-(--admin-border) p-3">
                    <div className="mb-2 flex items-center gap-3 rounded-(--admin-radius-md) px-3 py-2.5">
                        <div
                            className="
                                flex h-8 w-8 shrink-0
                                items-center justify-center
                                rounded-full
                                bg-indigo-50
                                text-xs font-semibold
                                text-(--admin-primary)
                            "
                        >
                            SS
                        </div>

                        <div className="min-w-0">
                            <p className="truncate text-xs font-medium">
                                Suryajith S
                            </p>

                            <p className="truncate text-[11px] text-(--admin-text-muted)">
                                Administrator
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="
                            flex w-full items-center gap-3
                            rounded-(--admin-radius-md)
                            px-3 py-2.5
                            text-sm
                            text-(--admin-text-secondary)
                            transition
                            hover:bg-red-50
                            hover:text-red-600
                        "
                    >
                        <LogOut size={16} />
                        Logout
                    </button>
                </div>
            </aside>
        </>
    );
}

interface NavigationGroupProps {
    title: string;
    items: NavigationItem[];
    activeScreen: AdminScreen;
    onNavigate: (screen: AdminScreen) => void;
}

function NavigationGroup({
    title,
    items,
    activeScreen,
    onNavigate,
}: NavigationGroupProps) {
    return (
        <div className="mb-7 last:mb-0">
            <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-(--admin-text-muted)">
                {title}
            </p>

            <div className="space-y-1">
                {items.map((item) => {
                    const Icon = item.icon;
                    const active = activeScreen === item.id;

                    return (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => onNavigate(item.id)}
                            className={`
                                flex w-full items-center gap-3
                                rounded-(--admin-radius-md)
                                px-3 py-2.5
                                text-sm
                                transition
                                ${
                                    active
                                        ? "bg-indigo-50 font-medium text-(--admin-primary)"
                                        : "text-(--admin-text-secondary) hover:bg-(--admin-surface-muted) hover:text-(--admin-text)"
                                }
                            `}
                        >
                            <Icon
                                size={17}
                                strokeWidth={1.8}
                            />

                            <span>{item.label}</span>

                            {item.id === "messages" && (
                                <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-indigo-100 px-1.5 text-[10px] font-semibold text-indigo-600">
                                    5
                                </span>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default Sidebar;