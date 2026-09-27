import { useState } from "react";

import Style1 from "../../assets/styles/style1.png";
import LoadingScreen from "./LoadingScreen";

type StyleKey = "dark-minimal" | "terminal";

interface StyleModalProps {
    onClose: (open: boolean) => void;
    changeStyle: (styleKey: StyleKey) => Promise<void>;
}

function StyleModal({
    onClose,
    changeStyle,
}: StyleModalProps) {
    const [isLoading, setIsLoading] = useState(false);

    const styles: {
        id: number;
        previewImg: string;
        name: string;
        key: StyleKey;
        description: string;
    }[] = [
        {
            id: 1,
            previewImg: Style1,
            name: "Dark Minimal",
            key: "dark-minimal",
            description:
                "Dark sadnkjasndkjnaskjdnk askjndkja asdjnakjsdn",
        },
        {
            id: 2,
            previewImg: Style1,
            name: "Terminal",
            key: "terminal",
            description:
                "Dark sadnkjasndkjnaskjdnk askjndkja asdjnakjsdn",
        },
        {
            id: 3,
            previewImg: Style1,
            name: "Dark Minimal",
            key: "dark-minimal",
            description:
                "Dark sadnkjasndkjnaskjdnk askjndkja asdjnakjsdn",
        },
    ];

    const handleStyleChange = async (
        styleKey: StyleKey
    ) => {
        if (isLoading) return;

        setIsLoading(true);

        try {
            await changeStyle(styleKey);

            onClose(false);
        } catch (error) {
            console.error(
                "Failed to change style:",
                error
            );

            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="fixed inset-0 z-(--z-modal) flex items-center justify-center bg-black/50 p-6 backdrop-blur-sm">
                <div className="h-150 w-full max-w-7xl rounded-2xl border border-(--color-border-subtle) bg-(--color-surface) p-6 shadow-2xl">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-(--color-text-muted)">
                                Appearance
                            </span>

                            <h2 className="mt-2 text-xl font-medium tracking-[-0.02em] text-(--color-text)">
                                Customize
                            </h2>
                        </div>

                        <button
                            type="button"
                            onClick={() => onClose(false)}
                            disabled={isLoading}
                            aria-label="Close appearance settings"
                            className="flex h-8 w-8 items-center justify-center rounded-lg text-(--color-text-muted) transition-colors duration-200 hover:bg-(--color-surface-2) hover:text-(--color-text) disabled:pointer-events-none disabled:opacity-50"
                        >
                            ×
                        </button>
                    </div>

                    {/* Content */}
                    <div className="mt-8">
                        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-(--color-text-muted)">
                            Style
                        </span>

                        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                            {styles.map((style) => (
                                <button
                                    type="button"
                                    key={style.id}
                                    disabled={isLoading}
                                    onClick={() =>
                                        handleStyleChange(
                                            style.key
                                        )
                                    }
                                    className="group overflow-hidden rounded-xl border border-(--color-border-subtle) bg-(--color-surface-2) text-left transition-all duration-300 hover:border-(--color-accent) disabled:pointer-events-none disabled:opacity-50"
                                >
                                    {/* Preview */}
                                    <div className="aspect-video overflow-hidden bg-(--color-surface)">
                                        <img
                                            src={style.previewImg}
                                            alt={`${style.name} style preview`}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Details */}
                                    <div className="p-4">
                                        <h3 className="text-sm font-medium text-(--color-text)">
                                            {style.name}
                                        </h3>

                                        <p className="mt-1 text-xs leading-relaxed text-(--color-text-muted)">
                                            {style.description}
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Loading Screen */}
            {isLoading && (
                <LoadingScreen message="Switching experience" />
            )}
        </>
    );
}

export default StyleModal;