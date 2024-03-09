import React, { createContext, useContext, useState } from 'react';

interface Filters {
    color?: string;
    privacy?: string;
    friends?: boolean;
}

interface FiltersContextData {
    filters: Filters;
    setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const FiltersContext = createContext<FiltersContextData | undefined>(undefined);

export const useFilters = () => {
    const context = useContext(FiltersContext);
    if (!context) {
        throw new Error('useFilters must be used within a FiltersProvider');
    }
    return context;
};

export const FiltersProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [filters, setFilters] = useState<Filters>({});

    return (
        <FiltersContext.Provider value={{ filters, setFilters }}>
        {children}
        </FiltersContext.Provider>
    );
};
