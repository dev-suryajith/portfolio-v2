import { LoaderCircle } from "lucide-react";

interface LoadingScreenProps {
    message?: string;
}

function LoadingScreen({
    message = "Loading experience",
}: LoadingScreenProps) {
    return (
        <div className="fixed inset-0 z-(--z-modal) flex flex-col items-center justify-center bg-(--color-bg)">
            {/* Loader */}
            <div className="relative flex h-16 w-16 items-center justify-center">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border border-(--color-border)" />

                {/* Spinner */}
                <LoaderCircle
                    size={28}
                    strokeWidth={1.5}
                    className="animate-spin text-(--color-accent)"
                />
            </div>

            {/* Text */}
            <div className="mt-6 text-center">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-(--color-text)">
                    {message}
                </p>

                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-(--color-text-muted)">
                    Please wait...
                </p>
            </div>
        </div>
    );
}

export default LoadingScreen;