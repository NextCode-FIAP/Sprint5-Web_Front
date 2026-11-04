import { useEffect } from "react";

const useModalEscape = (isOpen, setOpen) => {
    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const closeOnEscape = (event) => {
            if (event.key === "Escape") {
                setOpen(null);
            }
        };

        window.addEventListener("keydown", closeOnEscape);

        return () => {
            window.removeEventListener("keydown", closeOnEscape);
        };
    }, [isOpen, setOpen]);
};

export default useModalEscape;
