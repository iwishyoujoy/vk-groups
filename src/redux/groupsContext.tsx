import { createContext, useContext, useState } from "react";

import { Group } from "../types/groups";

interface GroupsContextData {
    groups: Group[];
    setGroups: React.Dispatch<React.SetStateAction<Group[]>>;
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

    return (
        <GroupsContext.Provider value={{ groups, setGroups }}>
            {children}
        </GroupsContext.Provider>
    );
};