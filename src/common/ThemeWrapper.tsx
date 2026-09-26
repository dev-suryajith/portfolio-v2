import { useEffect } from "react";
import useTheme from "../hooks/useTheme";

function ThemeWrapper({ children }: { children: React.ReactNode }) {
    const { initializeTheme } = useTheme();

    useEffect(() => {
        initializeTheme();
    }, []);

    return <>{children}</>;
}

export default ThemeWrapper;