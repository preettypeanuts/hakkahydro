import { useEffect } from "react";

export const useReveal = () => {
    useEffect(() => {
        const elements = document.querySelectorAll(
            ".reveal, .reveal-left, .reveal-right"
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            },
            {
                threshold: 0.15,
            }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);
};