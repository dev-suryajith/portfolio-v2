import { useState } from "react";
import { Plus, X } from "lucide-react";
import { addProjectAPI } from "../../../services/allAPI";

interface AddProjectModalProps {
    open: boolean;
    onClose: () => void;
    onSubmit?: (project: ProjectFormData) => void;
}

export interface ProjectFormData {
    title: string;
    year: number;
    description: string;
    stack: string[];
    href: string;
    active?:boolean;
}

function AddProjectModal({
    open,
    onClose,
    onSubmit,
}: AddProjectModalProps) {
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [description, setDescription] = useState("");
    const [href, setHref] = useState("");
    const [stack, setStack] = useState<string[]>([]);
    const [stackInput, setStackInput] = useState("");

    if (!open) {
        return null;
    }

    const addStack = () => {
        const value = stackInput.trim();

        if (!value || stack.includes(value)) {
            return;
        }

        setStack((previous) => [...previous, value]);
        setStackInput("");
    };

    const removeStack = (technology: string) => {
        setStack((previous) =>
            previous.filter((item) => item !== technology)
        );
    };

    const handleStackKeyDown = (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.key === "Enter" || event.key === ",") {
            event.preventDefault();
            addStack();
        }
    };

    const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
) => {
    event.preventDefault();

    const project: ProjectFormData = {
        title: title.trim(),
        year: Number(year),
        description: description.trim(),
        stack,
        href: href.trim(),
    };

    try {
        const response = await addProjectAPI(project);
        onSubmit?.(project);
        onClose();
    } catch (error) {
        console.error("Failed to add project:", error);
    }
};

    return (
        <div className="fixed inset-0 z-(--z-modal) flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
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

                <div className="flex items-center justify-between border-b border-(--admin-border) px-6 py-4">
                    <div>
                        <h2 className="text-sm font-semibold text-(--admin-text)">
                            Add project
                        </h2>

                        <p className="mt-1 text-xs text-(--admin-text-muted)">
                            Add a new project to your portfolio.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close modal"
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

                    <div className="max-h-[70vh] overflow-y-auto px-6 py-6">

                        <div className="space-y-5">

                            {/* Title + Year */}

                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-[1fr_140px]">

                                <div>
                                    <label
                                        htmlFor="project-title"
                                        className="mb-1.5 block text-xs font-medium text-(--admin-text)"
                                    >
                                        Project title
                                    </label>

                                    <input
                                        id="project-title"
                                        type="text"
                                        value={title}
                                        onChange={(event) =>
                                            setTitle(event.target.value)
                                        }
                                        placeholder="e.g. Playvo"
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
                                        htmlFor="project-year"
                                        className="mb-1.5 block text-xs font-medium text-(--admin-text)"
                                    >
                                        Year
                                    </label>

                                    <input
                                        id="project-year"
                                        type="number"
                                        value={year}
                                        onChange={(event) =>
                                            setYear(event.target.value)
                                        }
                                        placeholder="2026"
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
                                            placeholder:text-(--admin-text-muted)
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
                                    htmlFor="project-description"
                                    className="mb-1.5 block text-xs font-medium text-(--admin-text)"
                                >
                                    Description
                                </label>

                                <textarea
                                    id="project-description"
                                    value={description}
                                    onChange={(event) =>
                                        setDescription(event.target.value)
                                    }
                                    placeholder="Describe the project..."
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
                                        placeholder:text-(--admin-text-muted)
                                        focus:border-(--admin-border-focus)
                                        focus:ring-2
                                        focus:ring-indigo-500/10
                                    "
                                />
                            </div>


                            {/* Tech Stack */}

                            <div>
                                <label
                                    htmlFor="project-stack"
                                    className="mb-1.5 block text-xs font-medium text-(--admin-text)"
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
                                    <div className="flex flex-wrap items-center gap-1.5">

                                        {stack.map((technology) => (
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
                                                    className="text-(--admin-text-muted) hover:text-(--admin-text)"
                                                    aria-label={`Remove ${technology}`}
                                                >
                                                    <X size={12} />
                                                </button>
                                            </span>
                                        ))}

                                        <input
                                            id="project-stack"
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

                                <p className="mt-1.5 text-[11px] text-(--admin-text-muted)">
                                    Press Enter or comma to add a technology.
                                </p>
                            </div>


                            {/* Project URL */}

                            <div>
                                <label
                                    htmlFor="project-href"
                                    className="mb-1.5 block text-xs font-medium text-(--admin-text)"
                                >
                                    Project URL
                                </label>

                                <input
                                    id="project-href"
                                    type="url"
                                    value={href}
                                    onChange={(event) =>
                                        setHref(event.target.value)
                                    }
                                    placeholder="https://example.com"
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

                        </div>

                    </div>


                    {/* Footer */}

                    <div className="flex items-center justify-end gap-3 border-t border-(--admin-border) bg-(--admin-surface-muted) px-6 py-4">

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
                            // onClick={handleSubmit} 
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
                            <Plus size={16} />
                            Add project
                        </button>

                    </div>

                </form>

            </div>
        </div>
    );
}

export default AddProjectModal;