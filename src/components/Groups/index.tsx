import { Div, Group, PanelSpinner, Separator, Spacing } from "@vkontakte/vkui";
import { Icon16ErrorCircle } from "@vkontakte/icons";

import { GroupsItem } from "./GroupsItem";
import { useGroups } from "../../redux/groupsContext";

import styles from './styles.module.css';

interface IGroupsProps {
 className?: string;
}

export const Groups: React.FC<IGroupsProps> = ({className}) => {
    const { isLoading, isError, filteredGroups } = useGroups();

    if (isLoading) {
      return (
        <Group className={className}>
          <PanelSpinner className={styles.spinner}>Загрузка данных...</PanelSpinner>
        </Group>
      );
    }

    if (isError){
      return (
        <Group className={className}>
          <div className={styles.error}>
            <Icon16ErrorCircle height={40} width={40} fill="#9bb2cc"/>
            <span className={styles.errorText}>Что-то пошло не так при загрузке данных, перезагрузите страницу</span>
          </div>
        </Group>
      )
    }

    return (
      <Group className={className}>
        <Div>
          {filteredGroups.map((group, index) => (
            <>
              <GroupsItem className={styles.group} key={index} avatarColor={group.avatar_color} title={group.name} counter={group.members_count} friends={group.friends} closed={group.closed}/>
              <Spacing size={20} className={styles.separator}>
                <Separator wide/>
              </Spacing>
            </>
          ))}
        </Div>
      </Group>
    );
};
