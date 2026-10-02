import { Menu, Plus } from "lucide-react";
import { useState } from "react";

import AdminSidebar, {
    type AdminScreen,
} from "../../components/ui/Sidebar";

import Dashboard from "./Dashboard";
import AddProjectModal from "./projects/create";
import ProjectList from "./projects/list";

function Admin() {
    const [activeScreen, setActiveScreen] =
        useState<AdminScreen>("dashboard");

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isAddProjectOpen, setIsAddProjectOpen] =
        useState(false);

    const renderScreen = () => {
        switch (activeScreen) {
            case "dashboard":
                return <Dashboard />;

            case "projects":
                return (
                    <ProjectList />
                );

            case "experience":
                return (
                    <PlaceholderScreen title="Experience" />
                );

            case "skills":
                return (
                    <PlaceholderScreen title="Skills" />
                );

            case "about":
                return (
                    <PlaceholderScreen title="About" />
                );

            case "messages":
                return (
                    <PlaceholderScreen title="Messages" />
                );

            case "media":
                return (
                    <PlaceholderScreen title="Media" />
                );

            case "settings":
                return (
                    <PlaceholderScreen title="Settings" />
                );

            default:
                return <Dashboard />;
        }
    };

    const screenTitles: Record<AdminScreen, string> = {
        dashboard: "Dashboard",
        projects: "Projects",
        experience: "Experience",
        skills: "Skills",
        about: "About",
        messages: "Messages",
        media: "Media",
        settings: "Settings",
    };

    return (
        <main className="admin-root min-h-screen bg-(--admin-bg) text-(--admin-text)">

            {/* Sidebar */}

            <AdminSidebar
                activeScreen={activeScreen}
                sidebarOpen={sidebarOpen}
                onNavigate={setActiveScreen}
                onClose={() => setSidebarOpen(false)}
            />


            {/* Main Content */}

            <div className="lg:pl-64">

                {/* Topbar */}

                <header
                    className="
                        sticky top-0 z-30
                        flex h-16 items-center justify-between
                        border-b border-(--admin-border)
                        bg-(--admin-surface)/95
                        px-4
                        backdrop-blur
                        sm:px-6
                        lg:px-8
                    "
                >

                    {/* Left */}

                    <div className="flex items-center gap-3">

                        {/* Mobile Menu */}

                        <button
                            type="button"
                            onClick={() =>
                                setSidebarOpen(true)
                            }
                            className="
                                flex h-9 w-9
                                items-center justify-center
                                rounded-(--admin-radius-md)
                                text-(--admin-text-secondary)
                                transition
                                hover:bg-(--admin-surface-muted)
                                hover:text-(--admin-text)
                                lg:hidden
                            "
                            aria-label="Open sidebar"
                        >
                            <Menu size={19} />
                        </button>


                        {/* Page Title */}

                        <div>
                            <h1 className="text-sm font-semibold">
                                {screenTitles[activeScreen]}
                            </h1>

                            <p className="hidden text-[11px] text-(--admin-text-muted) sm:block">
                                Portfolio administration
                            </p>
                        </div>

                    </div>


                    {/* Right */}

                    <div className="flex items-center gap-3">

                        {/* Portfolio Status */}

                        <div
                            className="
                                hidden
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-(--admin-border)
                                bg-(--admin-surface-muted)
                                px-3
                                py-1.5
                                sm:flex
                            "
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                            <span className="text-[11px] font-medium text-(--admin-text-secondary)">
                                Portfolio live
                            </span>
                        </div>


                        {/* Profile */}

                        <button
                            type="button"
                            className="
                                flex h-9 w-9
                                items-center justify-center
                                rounded-full
                                bg-indigo-50
                                text-xs
                                font-semibold
                                text-(--admin-primary)
                            "
                            aria-label="Profile"
                        >
                            SS
                        </button>

                    </div>

                </header>


                {/* Active Screen */}

                <div>
                    {renderScreen()}
                </div>

            </div>


            {/* Add Project Modal */}

            <AddProjectModal
                open={isAddProjectOpen}
                onClose={() =>
                    setIsAddProjectOpen(false)
                }
                onSubmit={(project) => {
                    console.log(project);

                    setIsAddProjectOpen(false);
                }}
            />

        </main>
    );
}


/* ====================================
   PLACEHOLDER SCREEN
   ==================================== */

interface PlaceholderScreenProps {
    title: string;
    onAddProject?: () => void;
}

function PlaceholderScreen({
    title,
    onAddProject,
}: PlaceholderScreenProps) {
    return (
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">

            <div
                className="
                    flex
                    min-h-[60vh]
                    items-center
                    justify-center
                    rounded-(--admin-radius-lg)
                    border
                    border-dashed
                    border-(--admin-border)
                    bg-(--admin-surface)
                "
            >

                <div className="text-center">

                    <p className="text-lg font-semibold">
                        {title}
                    </p>


                    <p className="mt-2 text-sm text-(--admin-text-muted)">
                        {title === "Projects" && onAddProject ? (
                            <button
                                type="button"
                                onClick={onAddProject}
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-(--admin-radius-md)
                                    bg-(--admin-primary)
                                    px-4
                                    py-2
                                    text-sm
                                    font-medium
                                    text-white
                                    transition-colors
                                    hover:bg-(--admin-primary-hover)
                                "
                            >
                                <Plus size={16} />
                                Add project
                            </button>
                        ) : (
                            `${title} section is coming next.`
                        )}
                    </p>

                </div>

            </div>

        </div>
    );
}

export default Admin;