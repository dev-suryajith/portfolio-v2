import { useState } from "react";

type Theme = "dark" | "light";

const useTheme = () => {
    const [theme, setTheme] = useState<Theme>("dark");

    const initializeTheme = () => {
        const savedTheme = localStorage.getItem("theme") as Theme | null;

        const initialTheme =
            savedTheme === "light" || savedTheme === "dark"
                ? savedTheme
                : "dark";

        document.documentElement.setAttribute(
            "data-theme",
            initialTheme
        );

        localStorage.setItem("theme", initialTheme)

        setTheme(initialTheme);
    };

    const toggleTheme = () => {
        const nextTheme = theme === "dark" ? "light" : "dark";

        document.documentElement.setAttribute(
            "data-theme",
            nextTheme
        );

        localStorage.setItem("theme", nextTheme);

        setTheme(nextTheme);
    };
    const switchTheme = (newTheme:any) => {

        document.documentElement.setAttribute(
            "data-theme",
            newTheme
        );

        localStorage.setItem("theme", newTheme);

        setTheme(newTheme);
    };

    return {
        theme,
        toggleTheme,
        switchTheme,
        initializeTheme,
    };
};

export default useTheme;