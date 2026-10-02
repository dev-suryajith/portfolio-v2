import type { ReactNode } from "react";
import { X } from "lucide-react";

interface SupaPopProps {
    open: boolean;
    onClose: () => void;
    title: string;
    description?: string;
    children: ReactNode;
    footer?: ReactNode;
}

function SupaPop({
    open,
    onClose,
    title,
    description,
    children,
    footer,
}: SupaPopProps) {
    if (!open) {
        return null;
    }

    return (
        <div
            className="
                fixed inset-0 z-(--z-modal)
                flex items-center justify-center
                bg-black/40
                p-4
                backdrop-blur-sm
            "
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                    onClose();
                }
            }}
        >
            <div
                className="
                    w-full max-w-lg
                    overflow-hidden
                    rounded-(--admin-radius-lg)
                    border border-(--admin-border)
                    bg-(--admin-surface)
                    shadow-2xl
                "
            >
                {/* Header */}
                <div
                    className="
                        flex items-start justify-between
                        border-b border-(--admin-border)
                        px-5 py-4
                    "
                >
                    <div>
                        <h2 className="text-sm font-semibold text-(--admin-text)">
                            {title}
                        </h2>

                        {description && (
                            <p className="mt-1 text-xs leading-5 text-(--admin-text-muted)">
                                {description}
                            </p>
                        )}
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close"
                        className="
                            flex h-8 w-8
                            items-center justify-center
                            rounded-(--admin-radius-sm)
                            text-(--admin-text-muted)
                            transition-colors
                            hover:bg-(--admin-surface-muted)
                            hover:text-(--admin-text)
                        "
                    >
                        <X size={17} />
                    </button>
                </div>

                {/* Content */}
                <div className="px-5 py-5">
                    {children}
                </div>

                {/* Footer */}
                {footer && (
                    <div
                        className="
                            flex items-center justify-end gap-3
                            border-t border-(--admin-border)
                            bg-(--admin-surface-muted)
                            px-5 py-4
                        "
                    >
                        {footer}
                    </div>
                )}
            </div>
        </div>
    );
}

export default SupaPop;