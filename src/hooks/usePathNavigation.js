import { useEffect, useState } from "react";

const usePathNavigation = () => {
    const [path, setPath] = useState(window.location.pathname);

    useEffect(() => {
        const handlePopState = () => {
            setPath(window.location.pathname);
        };

        window.addEventListener("popstate", handlePopState);

        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, []);

    const navigate = (event) => {
        const destination = event.currentTarget.getAttribute("href");

        if (
            event.defaultPrevented ||
            event.button !== 0 ||
            event.metaKey ||
            event.ctrlKey ||
            event.shiftKey ||
            event.altKey ||
            !destination
        ) {
            return;
        }

        if (destination.charAt(0) === "#") {
            if (window.location.pathname === "/") {
                return;
            }

            event.preventDefault();
            window.history.pushState(null, "", "/" + destination);
            setPath("/");
            setTimeout(() => {
                const section = document.getElementById(destination.slice(1));

                if (section) {
                    section.scrollIntoView();
                }
            }, 0);
            return;
        }

        event.preventDefault();
        window.history.pushState(null, "", destination);
        setPath(window.location.pathname);
        window.scrollTo(0, 0);
    };

    const navigateTo = (destination) => {
        window.history.pushState(null, "", destination);
        setPath(window.location.pathname);
        window.scrollTo(0, 0);
    };

    return [path, navigate, navigateTo];
};

export default usePathNavigation;
