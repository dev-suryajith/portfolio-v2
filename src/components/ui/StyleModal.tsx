import Style1 from "../../assets/styles/style1.png"
function StyleModal({ onClose }) {


    const styles = [
        {
            id: 1,
            previewImg: Style1,
            name: "Dark Minimal",
            description: "Dark sadnkjasndkjnaskjdnk  askjndkja asdjnakjsdn "
        },
        {
            id: 2,
            previewImg: Style1,
            name: "Dark Minimal",
            description: "Dark sadnkjasndkjnaskjdnk  askjndkja asdjnakjsdn "
        },
        {
            id: 3,
            previewImg: Style1,
            name: "Dark Minimal",
            description: "Dark sadnkjasndkjnaskjdnk  askjndkja asdjnakjsdn "
        }
    ]

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-6">
            <div className="w-full max-w-7xl h-150 rounded-2xl border border-(--color-border-subtle) bg-(--color-surface) p-6 shadow-2xl">
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
                        aria-label="Close appearance settings"
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-(--color-text-muted) transition-colors duration-200 hover:bg-(--color-surface-2) hover:text-(--color-text)"
                    >
                        ×
                    </button>
                </div>

                {/* Content */}
                <div className="mt-8">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-(--color-text-muted)">
                        Style
                    </span>

                    <div className="mt-4 grid grid-cols-4 gap-2">
                        {styles.map((style) => (
                            <div
                                key={style.id}
                                className="
            group
            overflow-hidden
            rounded-xl
            border
            border-(--color-border-subtle)
            bg-(--color-surface-2)
            transition-all
            duration-300
            hover:border-(--color-accent)
        "
                            >
                                {/* Preview */}
                                <div className="aspect-video overflow-hidden bg-(--color-surface)">
                                    <img
                                        src={style.previewImg}
                                        alt={`${style.name} style preview`}
                                        className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                "
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
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StyleModal;