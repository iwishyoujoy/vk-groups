import { createContext, useContext, useState, useEffect } from "react";
import { simulateBackend } from "../utils/backend";

import { Group } from "../types/groups";

interface GroupsContextData {
    groups: Group[];
    setGroups: React.Dispatch<React.SetStateAction<Group[]>>;
    filteredGroups: Group[];
    setFilteredGroups: React.Dispatch<React.SetStateAction<Group[]>>;
    isLoading: boolean;
    isError: boolean;
}

const GroupsContext = createContext<GroupsContextData | undefined>(undefined);

export const useGroups = () => {
    const context = useContext(GroupsContext);
    if (!context) {
        throw new Error('useGroups must be used within a GroupsProvider');
    }
    return context;
};

export const GroupsProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [groups, setGroups] = useState<Group[]>([]);
    const [filteredGroups, setFilteredGroups] = useState<Group[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await simulateBackend(0.9);
                if (response.result === 1 && response.data) {
                    setGroups(response.data);
                    setFilteredGroups(response.data);
                } else {
                    setIsError(true);
                    console.error("Ошибка получения данных");
                }
            } catch (error) {
                setIsError(true);
                console.error(`${error}`);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <GroupsContext.Provider value={{ groups, setGroups, filteredGroups, setFilteredGroups, isLoading, isError }}>
            {children}
        </GroupsContext.Provider>
    );
};
