interface TabProps {
    title: string;
    children: React.ReactNode;
    onClose: () => void;
}

function Tab({ title, children, onClose }: TabProps) {
    return (
        <div className="fixed inset-0 z-(--z-modal) flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm sm:p-8">
            <div className="flex h-[50vh] w-full max-w-5xl flex-col overflow-hidden rounded-lg border border-(--color-border) bg-(--color-surface) font-mono text-sm text-(--color-text) shadow-2xl">

                {/* Terminal Header */}
                <div className="flex h-10 shrink-0 items-center border-b border-(--color-border) bg-(--color-surface) px-4">
                    <div className="flex gap-2">
                        <button
                            type="button"
                            onClick={()=>onClose()}
                            aria-label="Close"
                            className="h-3 w-3 rounded-full bg-[#ff5f57]"
                        />

                        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />

                        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                    </div>

                    <span className="mx-auto text-xs text-(--color-text-muted)">
                        {title}
                    </span>
                </div>

                {/* Content */}
                <div className="min-h-0 flex-1 overflow-y-auto p-5 sm:p-8 lg:p-10">
                    {children}
                </div>

            </div>
        </div>
    );
}

export default Tab;