import { useState } from "react";

type Style = "dark-minimal" | "terminal";

const useStyle = () => {
    const [style, setStyle] = useState<Style>("dark-minimal");

    const initializeStyle = () => {
        const savedStyle = localStorage.getItem("portfolio-style");

        const initialStyle: Style =
            savedStyle === "dark-minimal"
                ? savedStyle
                : "terminal";

        document.documentElement.setAttribute(
            "data-style",
            initialStyle
        );

        setStyle(initialStyle);
    };

    const changeStyle = (styleKey: Style): Promise<void> => {
        return new Promise((resolve) => {
            document.documentElement.setAttribute(
                "data-style",
                styleKey
            );

            localStorage.setItem(
                "portfolio-style",
                styleKey
            );

            setStyle(styleKey);

            
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setTimeout(() => {
                        resolve();
                    }, 2000);
                });
            });
        });
    };

    return {
        style,
        initializeStyle,
        changeStyle,
    };
};

export default useStyle;