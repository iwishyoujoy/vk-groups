import { useEffect } from "react";
import { Div, Group, Separator, Spacing } from "@vkontakte/vkui"

import { GroupsItem } from "./GroupsItem";
import { useGroups } from "../../redux/groupsContext";
import { simulateBackend } from "../../utils/backend";
import styles from './styles.module.css';

interface IGroupsProps {
    className?: string;
}

export const Groups: React.FC<IGroupsProps> = ({className}) => {
    const { groups, setGroups } = useGroups();

    useEffect(() => {
       const fetchData = async () => {
         try {
           const response = await simulateBackend(0.8); // Предполагаем, что simulateBackend возвращает Promise<GetGroupsResponse>
           if (response.result === 1 && response.data) {
             setGroups(response.data);
           } else {
             console.error('Ошибка при получении данных');
           }
         } catch (error) {
           console.error('Ошибка при запросе данных:', error);
         }
       };
   
       fetchData();
    }, [setGroups]);

    return (
        <Group className={className}>
            <Div>
                {groups.map((group) => {
                    return (
                        <>
                            <GroupsItem className={styles.group} key={group.id} avatarColor={group.avatar_color} title={group.name} counter={group.members_count} friends={group.friends} closed={group.closed}/>
                            <Spacing size={20} className={styles.separator}>
                                <Separator wide/>
                            </Spacing>
                        </>
                    )
                })}
            </Div>
        </Group>
    )
}