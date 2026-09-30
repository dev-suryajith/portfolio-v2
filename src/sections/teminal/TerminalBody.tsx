import { useEffect, useRef, useState } from "react";
import { commands } from "../../common/data/commands";
import ProjectTab from "./Project";
import useTheme from "../../hooks/useTheme";

type TerminalLine = {
    id: number;
    command: string;
    output: string[];
};

function TerminalBody() {
    const [history, setHistory] = useState<TerminalLine[]>([]);
    const [input, setInput] = useState("");

    const inputRef = useRef<HTMLInputElement>(null);
    const terminalRef = useRef<HTMLDivElement>(null);

    const [activeTab, setActiveTab] = useState<string | null>(null);

    const { switchTheme } = useTheme();

    const addToHistory = (
        command: string,
        output: string[]
    ) => {
        setHistory((previous) => [
            ...previous,
            {
                id: Date.now(),
                command,
                output,
            },
        ]);

        setInput("");
    };

    const runCommand = (command: string) => {
        const trimmedCommand = command.trim();

        if (!trimmedCommand) {
            return;
        }

        const commandName = trimmedCommand.toLowerCase();

        /* ================================
           CLEAR
           ================================= */

        if (commandName === "clear") {
            setHistory([]);
            setInput("");
            return;
        }

        /* ================================
           PROJECTS
           ================================= */

        if (commandName === "projects") {
            setActiveTab("projects");
            addToHistory(
                trimmedCommand,
                commands[commandName]?.execute() ?? []
            );
            return;
        }

        /* ================================
           THEME — LIGHT
           ================================= */

        if (commandName === "theme light") {
            switchTheme("light");

            const output = commands[commandName]?.execute() ?? [
                "Theme command unavailable.",
            ];

            addToHistory(trimmedCommand, output);
            return;
        }

        /* ================================
           THEME — DARK
           ================================= */

        if (commandName === "theme dark") {
            switchTheme("dark");

            const output = commands[commandName]?.execute() ?? [
                "Theme command unavailable.",
            ];

            addToHistory(trimmedCommand, output);
            return;
        }

        /* ================================
           STANDARD COMMAND
           ================================= */

        const terminalCommand = commands[commandName];

        if (terminalCommand) {
            addToHistory(
                trimmedCommand,
                terminalCommand.execute()
            );
            return;
        }

        /* ================================
           UNKNOWN COMMAND
           ================================= */

        addToHistory(trimmedCommand, [
            `command not found: ${commandName}`,
            "Type 'help' to see available commands.",
        ]);
    };

    const handleSubmit = (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();
        runCommand(input);
    };

    /* ================================
       INITIAL INPUT FOCUS
       ================================= */

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    /* ================================
       AUTO SCROLL
       ================================= */

    useEffect(() => {
        if (!terminalRef.current) {
            return;
        }

        terminalRef.current.scrollTop =
            terminalRef.current.scrollHeight;
    }, [history]);

    return (
        <div
            ref={terminalRef}
            className="
                relative
                h-[calc(100vh-110px)]
                max-h-[calc(100vh-110px)]
                overflow-y-auto
                bg-(--color-surface)
                p-5
                font-mono
                text-[13px]
                leading-6
                text-(--color-text)
                selection:bg-(--color-accent)
                selection:text-(--color-bg)
                sm:p-8
                lg:p-10
            "
            onClick={() => inputRef.current?.focus()}
        >
            <div className="min-h-full">

                {/* ================================
                    BOOT MESSAGE
                    ================================= */}

                <div className="mb-8">

                    {/* Last Login */}

                    <div className="text-(--color-text-muted)">
                        Last login: Sun Sep 27 13:24:18 on console
                    </div>

                    {/* Whoami */}

                    <div className="mt-3">
                        <span className="text-(--color-accent)">
                            suryajith@portfolio
                        </span>

                        <span className="text-(--color-text-muted)">
                            :
                        </span>

                        <span className="text-(--color-accent-muted)">
                            ~
                        </span>

                        <span className="ml-1 text-(--color-text-muted)">
                            $
                        </span>

                        <span className="ml-2 text-(--color-text)">
                            whoami
                        </span>
                    </div>

                    <div className="text-(--color-text-secondary)">
                        suryajith
                    </div>

                    {/* Welcome */}

                    <div className="mt-3">
                        <span className="text-(--color-accent)">
                            suryajith@portfolio
                        </span>

                        <span className="text-(--color-text-muted)">
                            :
                        </span>

                        <span className="text-(--color-accent-muted)">
                            ~
                        </span>

                        <span className="ml-1 text-(--color-text-muted)">
                            $
                        </span>

                        <span className="ml-2 text-(--color-text)">
                            echo "Welcome to my portfolio"
                        </span>
                    </div>

                    <div className="text-(--color-text-secondary)">
                        Welcome to my portfolio.
                    </div>

                    {/* Help Hint */}

                    <div className="mt-3 text-(--color-text-muted)">
                        Type{" "}
                        <span className="text-(--color-text)">
                            'help'
                        </span>{" "}
                        to see available commands.
                    </div>
                </div>


                {/* ================================
                    COMMAND HISTORY
                    ================================= */}

                <div className="space-y-5">
                    {history.map((item) => (
                        <div key={item.id}>

                            {/* Command */}

                            <div className="flex items-start">

                                <span className="shrink-0 text-(--color-accent)">
                                    suryajith@portfolio
                                </span>

                                <span className="text-(--color-text-muted)">
                                    :
                                </span>

                                <span className="text-(--color-accent-muted)">
                                    ~
                                </span>

                                <span className="ml-1 text-(--color-text-muted)">
                                    $
                                </span>

                                <span className="ml-2 break-all text-(--color-text)">
                                    {item.command}
                                </span>

                            </div>


                            {/* Output */}

                            <div className="mt-2 whitespace-pre text-(--color-text-secondary)">
                                {item.output.map(
                                    (line, index) => (
                                        <div
                                            key={index}
                                            className={
                                                line === ""
                                                    ? "h-3"
                                                    : "min-h-6"
                                            }
                                        >
                                            {line}
                                        </div>
                                    )
                                )}
                            </div>

                        </div>
                    ))}
                </div>


                {/* ================================
                    CURRENT PROMPT
                    ================================= */}

                <form
                    onSubmit={handleSubmit}
                    className="mt-5 flex items-start"
                >

                    {/* Prompt */}

                    <span className="shrink-0">

                        <span className="text-(--color-accent)">
                            suryajith@portfolio
                        </span>

                        <span className="text-(--color-text-muted)">
                            :
                        </span>

                        <span className="text-(--color-accent-muted)">
                            ~
                        </span>

                        <span className="ml-1 text-(--color-text-muted)">
                            $
                        </span>

                    </span>


                    {/* Input */}

                    <div className="relative ml-2 min-w-0 flex-1">

                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(event) =>
                                setInput(event.target.value)
                            }
                            className="
                                absolute
                                inset-0
                                w-full
                                cursor-text
                                border-0
                                bg-transparent
                                p-0
                                opacity-0
                                outline-none
                                ring-0
                            "
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="off"
                            spellCheck={false}
                            aria-label="Terminal input"
                        />


                        {/* Visible Command */}

                        <span className="break-all text-(--color-text)">
                            {input}
                        </span>


                        {/* Terminal Cursor */}

                        <span
                            className="
                                ml-0.5
                                inline-block
                                h-4.5
                                w-1.75
                                translate-y-0.75
                                bg-(--color-accent)
                                align-baseline
                                animate-[blink_1s_step-end_infinite]
                            "
                        />

                    </div>

                </form>


                {/* ================================
                    PROJECT TAB
                    ================================= */}

                {activeTab === "projects" && (
                    <ProjectTab
                        onClose={() => setActiveTab(null)}
                    />
                )}

            </div>
        </div>
    );
}

export default TerminalBody;