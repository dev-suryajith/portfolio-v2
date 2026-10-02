import type { ReactNode } from "react";

interface SupaColumn<T> {
    key: keyof T;
    label: string;
    render?: (value: T[keyof T], row: T) => ReactNode;
}

interface SupaTableProps<T> {
    columns: SupaColumn<T>[];
    data: T[];
    emptyMessage?: string;
}

function SupaTable<T extends object>({
    columns,
    data,
    emptyMessage = "No data available.",
}: SupaTableProps<T>) {
    return (
        <div className="w-full overflow-hidden rounded-(--admin-radius-lg) border border-(--admin-border) bg-(--admin-surface)">
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="border-b border-(--admin-border) bg-(--admin-surface-muted)">
                        <tr>
                            {columns.map((column) => (
                                <th
                                    key={String(column.key)}
                                    className="px-5 py-3 text-xs font-medium text-(--admin-text-muted)"
                                >
                                    {column.label}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-(--admin-border)">
                        {data.length > 0 ? (
                            data.map((row, rowIndex) => (
                                <tr
                                    key={rowIndex}
                                    className="transition-colors hover:bg-(--admin-surface-muted)"
                                >
                                    {columns.map((column) => (
                                        <td
                                            key={String(column.key)}
                                            className="px-5 py-4 text-sm text-(--admin-text-secondary)"
                                        >
                                            {column.render
                                                ? column.render(
                                                      row[column.key],
                                                      row
                                                  )
                                                : String(
                                                      row[column.key] ?? ""
                                                  )}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={columns.length}
                                    className="px-5 py-12 text-center text-sm text-(--admin-text-muted)"
                                >
                                    {emptyMessage}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SupaTable;