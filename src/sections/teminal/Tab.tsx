import { useEffect, useRef, useState } from "react";

interface TabProps {
    title: string;
    children: React.ReactNode;
    onClose: () => void;
}

function Tab({ title, children, onClose }: TabProps) {
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });

    const [isDragging, setIsDragging] = useState(false);

    const dragOffset = useRef({
        x: 0,
        y: 0,
    });

    const handleMouseDown = (
        event: React.MouseEvent<HTMLDivElement>
    ) => {
        setIsDragging(true);

        dragOffset.current = {
            x: event.clientX - position.x,
            y: event.clientY - position.y,
        };
    };

    useEffect(() => {
        if (!isDragging) return;

        const handleMouseMove = (event: MouseEvent) => {
            setPosition({
                x: event.clientX - dragOffset.current.x,
                y: event.clientY - dragOffset.current.y,
            });
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        window.addEventListener(
            "mousemove",
            handleMouseMove
        );

        window.addEventListener(
            "mouseup",
            handleMouseUp
        );

        return () => {
            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );

            window.removeEventListener(
                "mouseup",
                handleMouseUp
            );
        };
    }, [isDragging]);

    return (
        <div className="fixed inset-0 z-(--z-modal) bg-black/60 backdrop-blur-sm">

            {/* Draggable Window */}
            <div
                style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(
                        calc(-50% + ${position.x}px),
                        calc(-50% + ${position.y}px)
                    )`,
                }}
                className="
                    fixed
                    flex
                    h-[80vh]
                    w-4xl
                    flex-col
                    overflow-hidden
                    rounded-lg
                    border
                    border-(--color-border)
                    bg-(--color-surface)
                    font-mono
                    text-sm
                    text-(--color-text)
                    shadow-2xl
                "
            >

                {/* Terminal Header / Drag Handle */}
                <div
                    onMouseDown={handleMouseDown}
                    className={`
                        flex
                        h-10
                        shrink-0
                        select-none
                        items-center
                        border-b
                        border-(--color-border)
                        bg-(--color-surface)
                        px-4
                        ${
                            isDragging
                                ? "cursor-grabbing"
                                : "cursor-grab"
                        }
                    `}
                >
                    {/* Window Controls */}
                    <div className="flex gap-2">
                        <button
                            type="button"
                            onClick={(event) => {
                                event.stopPropagation();
                                onClose();
                            }}
                            aria-label="Close"
                            className="
                                h-3
                                w-3
                                rounded-full
                                bg-[#ff5f57]
                            "
                        />

                        <span
                            className="
                                h-3
                                w-3
                                rounded-full
                                bg-[#febc2e]
                            "
                        />

                        <span
                            className="
                                h-3
                                w-3
                                rounded-full
                                bg-[#28c840]
                            "
                        />
                    </div>

                    {/* Window Title */}
                    <span className="pointer-events-none mx-auto text-xs text-(--color-text-muted)">
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