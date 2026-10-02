import { useEffect, useState } from "react";
import { Save, X } from "lucide-react";
import type { ProjectFormData } from "./create";

interface EditProjectModalProps {
    open: boolean;

    project: ProjectFormData & {
        _id: string;
    } | null;

    onClose: () => void;

    onSubmit: (
        id: string,
        project: ProjectFormData
    ) => void;
}

function EditProjectModal({
    open,
    project,
    onClose,
    onSubmit,
}: EditProjectModalProps) {

    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [description, setDescription] = useState("");
    const [href, setHref] = useState("");

    const [stack, setStack] = useState<string[]>([]);
    const [stackInput, setStackInput] = useState("");

    const [active, setActive] = useState(true);

    useEffect(() => {
        if (!project) return;

        setTitle(project.title);
        setYear(String(project.year));
        setDescription(project.description);
        setHref(project.href);
        setStack(project.stack);
        setActive(project.active);

        setStackInput("");
    }, [project]);

    if (!open || !project) {
        return null;
    }

    const addStack = () => {
        const value = stackInput.trim();

        if (!value || stack.includes(value)) {
            return;
        }

        setStack((previous) => [
            ...previous,
            value,
        ]);

        setStackInput("");
    };

    const removeStack = (technology: string) => {
        setStack((previous) =>
            previous.filter(
                (item) => item !== technology
            )
        );
    };

    const handleStackKeyDown = (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (
            event.key === "Enter" ||
            event.key === ","
        ) {
            event.preventDefault();
            addStack();
        }
    };

    const handleSubmit = (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        onSubmit(project._id, {
            title: title.trim(),
            year: Number(year),
            description: description.trim(),
            stack,
            href: href.trim(),
            active,
        });
    };

    return (
        <div
            className="
                fixed
                inset-0
                z-(--z-modal)
                flex
                items-center
                justify-center
                bg-black/40
                p-4
                backdrop-blur-sm
            "
            onMouseDown={(event) => {
                if (
                    event.target ===
                    event.currentTarget
                ) {
                    onClose();
                }
            }}
        >
            <div
                className="
                    w-full
                    max-w-2xl
                    overflow-hidden
                    rounded-(--admin-radius-lg)
                    border
                    border-(--admin-border)
                    bg-(--admin-surface)
                    shadow-2xl
                "
            >
                {/* Header */}

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        border-b
                        border-(--admin-border)
                        px-6
                        py-4
                    "
                >
                    <div>
                        <h2
                            className="
                                text-sm
                                font-semibold
                                text-(--admin-text)
                            "
                        >
                            Edit project
                        </h2>

                        <p
                            className="
                                mt-1
                                text-xs
                                text-(--admin-text-muted)
                            "
                        >
                            Update your project information.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="
                            flex
                            h-8
                            w-8
                            items-center
                            justify-center
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

                {/* Form */}

                <form onSubmit={handleSubmit}>

                    <div
                        className="
                            max-h-[70vh]
                            overflow-y-auto
                            px-6
                            py-6
                        "
                    >
                        <div className="space-y-5">

                            {/* Title + Year */}

                            <div
                                className="
                                    grid
                                    grid-cols-1
                                    gap-5
                                    sm:grid-cols-[1fr_140px]
                                "
                            >
                                <div>
                                    <label
                                        htmlFor="edit-project-title"
                                        className="
                                            mb-1.5
                                            block
                                            text-xs
                                            font-medium
                                            text-(--admin-text)
                                        "
                                    >
                                        Project title
                                    </label>

                                    <input
                                        id="edit-project-title"
                                        type="text"
                                        value={title}
                                        onChange={(event) =>
                                            setTitle(
                                                event.target.value
                                            )
                                        }
                                        required
                                        className="
                                            w-full
                                            rounded-(--admin-radius-md)
                                            border
                                            border-(--admin-border)
                                            bg-(--admin-surface)
                                            px-3
                                            py-2.5
                                            text-sm
                                            text-(--admin-text)
                                            outline-none
                                            placeholder:text-(--admin-text-muted)
                                            focus:border-(--admin-border-focus)
                                            focus:ring-2
                                            focus:ring-indigo-500/10
                                        "
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="edit-project-year"
                                        className="
                                            mb-1.5
                                            block
                                            text-xs
                                            font-medium
                                            text-(--admin-text)
                                        "
                                    >
                                        Year
                                    </label>

                                    <input
                                        id="edit-project-year"
                                        type="number"
                                        value={year}
                                        onChange={(event) =>
                                            setYear(
                                                event.target.value
                                            )
                                        }
                                        min="2000"
                                        max="2100"
                                        required
                                        className="
                                            w-full
                                            rounded-(--admin-radius-md)
                                            border
                                            border-(--admin-border)
                                            bg-(--admin-surface)
                                            px-3
                                            py-2.5
                                            text-sm
                                            text-(--admin-text)
                                            outline-none
                                            focus:border-(--admin-border-focus)
                                            focus:ring-2
                                            focus:ring-indigo-500/10
                                        "
                                    />
                                </div>
                            </div>

                            {/* Description */}

                            <div>
                                <label
                                    htmlFor="edit-project-description"
                                    className="
                                        mb-1.5
                                        block
                                        text-xs
                                        font-medium
                                        text-(--admin-text)
                                    "
                                >
                                    Description
                                </label>

                                <textarea
                                    id="edit-project-description"
                                    value={description}
                                    onChange={(event) =>
                                        setDescription(
                                            event.target.value
                                        )
                                    }
                                    rows={4}
                                    required
                                    className="
                                        w-full
                                        resize-none
                                        rounded-(--admin-radius-md)
                                        border
                                        border-(--admin-border)
                                        bg-(--admin-surface)
                                        px-3
                                        py-2.5
                                        text-sm
                                        leading-6
                                        text-(--admin-text)
                                        outline-none
                                        focus:border-(--admin-border-focus)
                                        focus:ring-2
                                        focus:ring-indigo-500/10
                                    "
                                />
                            </div>

                            {/* Stack */}

                            <div>
                                <label
                                    htmlFor="edit-project-stack"
                                    className="
                                        mb-1.5
                                        block
                                        text-xs
                                        font-medium
                                        text-(--admin-text)
                                    "
                                >
                                    Technology stack
                                </label>

                                <div
                                    className="
                                        min-h-11
                                        rounded-(--admin-radius-md)
                                        border
                                        border-(--admin-border)
                                        bg-(--admin-surface)
                                        px-2
                                        py-1.5
                                        focus-within:border-(--admin-border-focus)
                                        focus-within:ring-2
                                        focus-within:ring-indigo-500/10
                                    "
                                >
                                    <div
                                        className="
                                            flex
                                            flex-wrap
                                            items-center
                                            gap-1.5
                                        "
                                    >
                                        {stack.map(
                                            (technology) => (
                                                <span
                                                    key={technology}
                                                    className="
                                                        inline-flex
                                                        items-center
                                                        gap-1
                                                        rounded-full
                                                        bg-(--admin-surface-muted)
                                                        px-2.5
                                                        py-1
                                                        text-xs
                                                        text-(--admin-text-secondary)
                                                    "
                                                >
                                                    {technology}

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            removeStack(
                                                                technology
                                                            )
                                                        }
                                                        className="
                                                            text-(--admin-text-muted)
                                                            hover:text-(--admin-text)
                                                        "
                                                    >
                                                        <X size={12} />
                                                    </button>
                                                </span>
                                            )
                                        )}

                                        <input
                                            id="edit-project-stack"
                                            type="text"
                                            value={stackInput}
                                            onChange={(event) =>
                                                setStackInput(
                                                    event.target.value
                                                )
                                            }
                                            onKeyDown={
                                                handleStackKeyDown
                                            }
                                            onBlur={addStack}
                                            placeholder={
                                                stack.length === 0
                                                    ? "Type a technology and press Enter..."
                                                    : "Add technology..."
                                            }
                                            className="
                                                min-w-48
                                                flex-1
                                                border-0
                                                bg-transparent
                                                px-1.5
                                                py-1
                                                text-sm
                                                text-(--admin-text)
                                                outline-none
                                                placeholder:text-(--admin-text-muted)
                                            "
                                        />
                                    </div>
                                </div>

                                <p
                                    className="
                                        mt-1.5
                                        text-[11px]
                                        text-(--admin-text-muted)
                                    "
                                >
                                    Press Enter or comma to
                                    add a technology.
                                </p>
                            </div>

                            {/* Project URL */}

                            <div>
                                <label
                                    htmlFor="edit-project-href"
                                    className="
                                        mb-1.5
                                        block
                                        text-xs
                                        font-medium
                                        text-(--admin-text)
                                    "
                                >
                                    Project URL
                                </label>

                                <input
                                    id="edit-project-href"
                                    type="url"
                                    value={href}
                                    onChange={(event) =>
                                        setHref(
                                            event.target.value
                                        )
                                    }
                                    required
                                    className="
                                        w-full
                                        rounded-(--admin-radius-md)
                                        border
                                        border-(--admin-border)
                                        bg-(--admin-surface)
                                        px-3
                                        py-2.5
                                        text-sm
                                        text-(--admin-text)
                                        outline-none
                                        focus:border-(--admin-border-focus)
                                        focus:ring-2
                                        focus:ring-indigo-500/10
                                    "
                                />
                            </div>

                            {/* Active */}

                            <div
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    rounded-(--admin-radius-md)
                                    border
                                    border-(--admin-border)
                                    bg-(--admin-surface-muted)
                                    px-4
                                    py-3
                                "
                            >
                                <div>
                                    <p
                                        className="
                                            text-sm
                                            font-medium
                                            text-(--admin-text)
                                        "
                                    >
                                        Project status
                                    </p>

                                    <p
                                        className="
                                            mt-0.5
                                            text-xs
                                            text-(--admin-text-muted)
                                        "
                                    >
                                        Inactive projects won't
                                        be shown publicly.
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setActive(
                                            (previous) =>
                                                !previous
                                        )
                                    }
                                    className={`
                                        relative
                                        h-6
                                        w-11
                                        rounded-full
                                        transition-colors
                                        ${
                                            active
                                                ? "bg-(--admin-primary)"
                                                : "bg-gray-300"
                                        }
                                    `}
                                >
                                    <span
                                        className={`
                                            absolute
                                            top-1
                                            h-4
                                            w-4
                                            rounded-full
                                            bg-white
                                            shadow-sm
                                            transition-transform
                                            ${
                                                active
                                                    ? "translate-x-6"
                                                    : "translate-x-1"
                                            }
                                        `}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}

                    <div
                        className="
                            flex
                            items-center
                            justify-end
                            gap-3
                            border-t
                            border-(--admin-border)
                            bg-(--admin-surface-muted)
                            px-6
                            py-4
                        "
                    >
                        <button
                            type="button"
                            onClick={onClose}
                            className="
                                rounded-(--admin-radius-md)
                                border
                                border-(--admin-border)
                                bg-(--admin-surface)
                                px-4
                                py-2
                                text-sm
                                font-medium
                                text-(--admin-text-secondary)
                                transition-colors
                                hover:bg-(--admin-surface-muted)
                                hover:text-(--admin-text)
                            "
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-(--admin-radius-md)
                                bg-(--admin-primary)
                                px-4
                                py-2
                                text-sm
                                font-medium
                                text-white
                                transition-colors
                                hover:bg-(--admin-primary-hover)
                            "
                        >
                            <Save size={16} />
                            Save changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditProjectModal;