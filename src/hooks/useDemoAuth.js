import { useState } from "react";

const useDemoAuth = () => {
    const [authenticated, setAuthenticated] = useState(false);

    const signIn = (email, password) => {
        if (
            email.trim() === "estudante@nextcode.com" &&
            password === "nextcode2026"
        ) {
            setAuthenticated(true);
            return true;
        }

        setAuthenticated(false);
        return false;
    };

    const signOut = () => {
        setAuthenticated(false);
    };

    return [authenticated, signIn, signOut];
};

export default useDemoAuth;
