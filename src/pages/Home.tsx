import { useEffect, useState } from "react";
import {
    ArrowUp,
    BotIcon,
    Images,
    Settings,
} from "lucide-react";

import DarkMinimalHome from "../components/DarkMinimal";
import TerminalHome from "../sections/teminal/Sample";
import StyleModal from "../components/ui/StyleModal";
import LoadingScreen from "../components/ui/LoadingScreen";
import useStyle from "../hooks/useStyle";

function Home() {
    const {
        style,
        changeStyle,
        initializeStyle,
    } = useStyle();

    const [isOpen, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [styleModal, setStyleModal] = useState(false);

    useEffect(() => {
        const initializeScreen = async () => {
            setLoading(true);

            initializeStyle();

            // Give the browser time to apply the initialized style
            await new Promise((resolve) => {
                setTimeout(resolve, 2000);
            });

            setLoading(false);
        };

        initializeScreen();
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const renderHome = () => {
        switch (style) {
            case "dark-minimal":
                return <DarkMinimalHome />;

            case "terminal":
                return <TerminalHome />;

            default:
                return <DarkMinimalHome />;
        }
    };

    if (loading) {
        return (
            <LoadingScreen message="Initializing experience" />
        );
    }

    return (
        <>
            {renderHome()}

            {/* Floating Controls */}
            <div className="fixed right-6 bottom-6 z-50">
                {/* Action Menu */}
                <div
                    className={`absolute right-0 bottom-12 flex flex-col gap-1 origin-bottom-right rounded-xl border border-(--color-border-subtle) bg-(--color-surface) p-1 shadow-2xl transition-all duration-300 ease-out ${
                        isOpen
                            ? "visible scale-100 opacity-100"
                            : "invisible scale-75 opacity-0"
                    }`}
                >
                    {/* Back to Top */}
                    <div className="group relative">
                        <button
                            type="button"
                            aria-label="Back to top"
                            onClick={scrollToTop}
                            className="flex h-10 w-10 items-center justify-center rounded-lg text-(--color-text-secondary) transition-colors duration-200 hover:bg-(--color-accent) hover:text-(--color-bg)"
                        >
                            <ArrowUp size={17} />
                        </button>

                        <span className="pointer-events-none absolute top-1/2 right-12 -translate-y-1/2 whitespace-nowrap rounded-md border border-(--color-border-subtle) bg-(--color-surface-2) px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-(--color-text) opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                            Back to top
                        </span>
                    </div>

                    {/* Style */}
                    <div className="group relative">
                        <button
                            type="button"
                            onClick={() =>
                                setStyleModal(true)
                            }
                            aria-label="Change UI style"
                            className="flex h-10 w-10 items-center justify-center rounded-lg text-(--color-text-secondary) transition-colors duration-200 hover:bg-(--color-accent) hover:text-(--color-bg)"
                        >
                            <Images size={17} />
                        </button>

                        <span className="pointer-events-none absolute top-1/2 right-12 -translate-y-1/2 whitespace-nowrap rounded-md border border-(--color-border-subtle) bg-(--color-surface-2) px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-(--color-text) opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                            Change UI Style
                        </span>
                    </div>

                    {/* AI Assistant */}
                    <div className="group relative">
                        <button
                            type="button"
                            aria-label="Open AI assistant"
                            className="flex h-10 w-10 items-center justify-center rounded-lg text-(--color-text-secondary) transition-colors duration-200 hover:bg-(--color-accent) hover:text-(--color-bg)"
                        >
                            <BotIcon size={17} />
                        </button>

                        <span className="pointer-events-none absolute top-1/2 right-12 -translate-y-1/2 whitespace-nowrap rounded-md border border-(--color-border-subtle) bg-(--color-surface-2) px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-(--color-text) opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                            AI Assistant
                        </span>
                    </div>
                </div>

                {/* Settings Button */}
                <div className="group relative">
                    <button
                        type="button"
                        onClick={() =>
                            setOpen((prev) => !prev)
                        }
                        aria-label={
                            isOpen
                                ? "Close settings"
                                : "Open settings"
                        }
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-(--color-border-subtle) bg-(--color-surface) text-(--color-text-secondary) transition-all duration-300 hover:border-(--color-accent) hover:bg-(--color-accent) hover:text-(--color-bg)"
                    >
                        <Settings
                            size={17}
                            className={`transition-transform duration-300 ${
                                isOpen
                                    ? "rotate-90"
                                    : "group-hover:rotate-45"
                            }`}
                        />
                    </button>

                    {!isOpen && (
                        <span className="pointer-events-none absolute top-1/2 right-12 -translate-y-1/2 whitespace-nowrap rounded-md border border-(--color-border-subtle) bg-(--color-surface-2) px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-(--color-text) opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                            Settings
                        </span>
                    )}
                </div>
            </div>

            {/* Style Modal */}
            {styleModal && (
                <StyleModal
                    onClose={setStyleModal}
                    changeStyle={changeStyle}
                />
            )}
        </>
    );
}

export default Home;