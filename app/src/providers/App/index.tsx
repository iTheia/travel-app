import React, { createContext, useState } from "react";
import { IAppContext } from "./types";

export const AppContext = createContext<IAppContext>({
    isLoading: true,
    setIsLoading: () => null,
});

export const AppProvider: React.FC = ({ children }) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    return (
        <AppContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </AppContext.Provider>
    );
};
