import TerminalHeader from "./Header";
import TerminalBody from "./TerminalBody";

function TerminalWindow() {
    return (
        <main className="min-h-screen bg-(--color-bg) px-2 font-mono text-sm text-(--color-text) sm:p-8">
            <div className="mx-auto max-w-screen overflow-hidden rounded-lg border border-(--color-border) bg-(--color-surface) shadow-2xl">
                {/* Terminal Header */}
                <TerminalHeader />

                {/* Terminal Content */}
                <div className="h-[calc(100vh-110px)] max-h-[calc(100vh-110px)] py-2 sm:p-10">
                    <TerminalBody />
                </div>
            </div>
        </main>
    );
}

export default TerminalWindow;