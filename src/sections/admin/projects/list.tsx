import { useEffect, useState } from "react";
import SupaTable from "../../../components/ui/SupaComponents/SupaTable";
import SupaPop from "../../../components/ui/SupaComponents/SupaPop";
import AddProjectModal from "./create";
import EditProjectModal from "./edit";
import {
    addProjectAPI,
    deleteProjectAPI,
    editProjectAPI,
    getProjectsAPI,
} from "../../../services/allAPI";
import { Pencil, Plus, Trash2 } from "lucide-react";

interface Project {
    _id: string;
    title: string;
    year: number;
    description: string;
    stack: string[];
    href: string;
    active: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface ProjectFormData {
    title: string;
    year: number;
    description: string;
    stack: string[];
    href: string;
    active: boolean;
}

function ProjectList() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    const [isAddOpen, setIsAddOpen] = useState(false);

    const [editProject, setEditProject] = useState<Project | null>(null);

    const [deleteProject, setDeleteProject] = useState<Project | null>(null);
    const [deleting, setDeleting] = useState(false);

    // --------------------------------------------------
    // GET PROJECTS
    // --------------------------------------------------

    const getProjects = async () => {
        try {
            setLoading(true);

            const response = await getProjectsAPI();

            if (response.data.success) {
                setProjects(response.data.projects);
            }
        } catch (error) {
            console.error("Failed to fetch projects:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProjects();
    }, []);

    // --------------------------------------------------
    // CREATE PROJECT
    // --------------------------------------------------

    const handleAddProject = async () => {
        await getProjects();
        setIsAddOpen(false);
    };

    // --------------------------------------------------
    // UPDATE PROJECT
    // --------------------------------------------------

    const handleEditProject = async (
        id: string,
        project: ProjectFormData
    ) => {
        try {
            const response = await editProjectAPI(id, project);

            if (response.data.success) {
                await getProjects();
                setEditProject(null);
            }
        } catch (error) {
            console.error("Failed to update project:", error);
        }
    };

    // --------------------------------------------------
    // DELETE PROJECT
    // --------------------------------------------------

    const handleDeleteProject = async () => {
        if (!deleteProject) return;

        try {
            setDeleting(true);

            const response = await deleteProjectAPI(
                deleteProject._id
            );

            if (response.data.success) {
                setProjects((previous) =>
                    previous.filter(
                        (project) =>
                            project._id !== deleteProject._id
                    )
                );

                setDeleteProject(null);
            }
        } catch (error) {
            console.error("Failed to delete project:", error);
        } finally {
            setDeleting(false);
        }
    };

    // --------------------------------------------------
    // TABLE COLUMNS
    // --------------------------------------------------

    const columns = [
        {
            key: "title" as keyof Project,
            label: "Project",
        },

        {
            key: "year" as keyof Project,
            label: "Year",
        },

        {
            key: "stack" as keyof Project,
            label: "Stack",

            render: (value: Project["stack"]) => (
                <div className="flex flex-wrap gap-1.5">
                    {value.map((technology) => (
                        <span
                            key={technology}
                            className="
                                rounded-full
                                bg-(--admin-surface-muted)
                                px-2.5 py-1
                                text-xs
                                text-(--admin-text-secondary)
                            "
                        >
                            {technology}
                        </span>
                    ))}
                </div>
            ),
        },

        {
            key: "active" as keyof Project,
            label: "Status",

            render: (value: Project["active"]) => (
                <div
                    className={`
                        inline-flex items-center gap-1.5
                        rounded-full
                        px-2.5 py-1
                        text-xs font-medium
                        ${value
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-red-100 text-red-500"
                        }
                    `}
                >
                    <span
                        className={`
                            h-1.5 w-1.5 rounded-full
                            ${value
                                ? "bg-emerald-500"
                                : "bg-red-400"
                            }
                        `}
                    />

                    {value ? "Active" : "Inactive"}
                </div>
            ),
        },

        {
            key: "href" as keyof Project,
            label: "Link",

            render: (value: Project["href"]) => (
                <a
                    href={value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-(--admin-primary) hover:underline"
                >
                    View
                </a>
            ),
        },

        {
            key: "_id" as keyof Project,
            label: "Actions",

            render: (_value: Project["_id"], row: Project) => (
                <div className="flex items-center gap-2">

                    {/* Edit */}
                    <button
                        type="button"
                        onClick={() => setEditProject(row)}
                        className="
                            inline-flex
                            items-center
                            justify-center
                            rounded
                            bg-amber-100
                            p-2
                            text-amber-600
                            transition-colors
                            hover:bg-amber-200
                        "
                        title="Edit project"
                    >
                        <Pencil size={15} />
                    </button>

                    {/* Delete */}
                    <button
                        type="button"
                        onClick={() => setDeleteProject(row)}
                        className="
                            inline-flex
                            items-center
                            justify-center
                            rounded
                            bg-red-100
                            p-2
                            text-red-500
                            transition-colors
                            hover:bg-red-200
                        "
                        title="Delete project"
                    >
                        <Trash2 size={15} />
                    </button>

                </div>
            ),
        },
    ];

    return (
        <>
            <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">

                {/* Header */}
                <div className="mb-6 flex items-center justify-between">

                    <div>
                        <h1 className="text-xl font-semibold text-(--admin-text)">
                            Projects
                        </h1>

                        <p className="mt-1 text-sm text-(--admin-text-secondary)">
                            Manage your portfolio projects.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsAddOpen(true)}
                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded
                            bg-(--admin-primary)
                            px-3.5
                            py-2
                            text-sm
                            font-medium
                            text-white
                            transition-colors
                            hover:bg-(--admin-primary-hover)
                        "
                    >
                        <Plus size={16} />
                        Add Project
                    </button>

                </div>

                {/* Table */}
                {loading ? (
                    <div
                        className="
                            rounded-(--admin-radius-lg)
                            border
                            border-(--admin-border)
                            bg-(--admin-surface)
                            px-5
                            py-12
                            text-center
                            text-sm
                            text-(--admin-text-muted)
                        "
                    >
                        Loading projects...
                    </div>
                ) : (
                    <SupaTable
                        columns={columns}
                        data={projects}
                        emptyMessage="No projects found."
                    />
                )}
            </div>

            {/* ADD PROJECT */}

            <AddProjectModal
                open={isAddOpen}
                onClose={() => setIsAddOpen(false)}
                onSubmit={handleAddProject}
            />

            {/* EDIT PROJECT */}

            <EditProjectModal
                open={!!editProject}
                project={editProject}
                onClose={() => setEditProject(null)}
                onSubmit={handleEditProject}
            />

            {/* DELETE CONFIRMATION */}

            <SupaPop
                open={!!deleteProject}
                onClose={() => {
                    if (!deleting) {
                        setDeleteProject(null);
                    }
                }}
                title="Delete project"
                description="This action cannot be undone."
                footer={
                    <>
                        <button
                            type="button"
                            disabled={deleting}
                            onClick={() => setDeleteProject(null)}
                            className="
                                rounded
                                border
                                border-(--admin-border)
                                bg-(--admin-surface)
                                px-3.5
                                py-2
                                text-sm
                                font-medium
                                text-(--admin-text-secondary)
                                transition-colors
                                hover:bg-(--admin-surface-muted)
                                disabled:cursor-not-allowed
                                disabled:opacity-50
                            "
                        >
                            Cancel
                        </button>

                        <button
                            type="button"
                            disabled={deleting}
                            onClick={handleDeleteProject}
                            className="
                                inline-flex
                                items-center
                                gap-2
                                rounded
                                bg-red-600
                                px-3.5
                                py-2
                                text-sm
                                font-medium
                                text-white
                                transition-colors
                                hover:bg-red-700
                                disabled:cursor-not-allowed
                                disabled:opacity-50
                            "
                        >
                            <Trash2 size={15} />

                            {deleting
                                ? "Deleting..."
                                : "Delete"}
                        </button>
                    </>
                }
            >
                <p className="text-sm text-(--admin-text-secondary)">
                    Are you sure you want to delete{" "}
                    <span className="font-medium text-(--admin-text)">
                        {deleteProject?.title}
                    </span>
                    ?
                </p>
            </SupaPop>
        </>
    );
}

export default ProjectList;