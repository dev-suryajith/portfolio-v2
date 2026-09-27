function TerminalHeader() {
    return (
        <div className="flex h-10 items-center border-b border-(--color-border) bg-(--color-surface) px-4">
            <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>

            <span className="mx-auto text-xs text-(--color-text-muted)">
                suryajith@portfolio: ~
            </span>
        </div>
    );
}

export default TerminalHeader;