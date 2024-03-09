import { useEffect, useState } from "react";
import cn from 'classnames';
import { Div, Footer, Group, PanelSpinner, Separator, Spacing } from "@vkontakte/vkui";
import { Icon16ErrorCircle } from "@vkontakte/icons";

import { GroupsItem } from "./GroupsItem";
import { useGroups } from "../../redux/groupsContext";
import { simulateBackend } from "../../utils/backend";
import { CounterType, formatCounterText } from "../../utils/text";
import styles from './styles.module.css';

interface IGroupsProps {
  className?: string;
}

export const Groups: React.FC<IGroupsProps> = ({className}) => {
    const { groups, setGroups } = useGroups();
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const response = await simulateBackend(0.8);
          if (response.result === 1 && response.data) {
            setGroups(response.data);
          } else {
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
    }, [setGroups]);

    if (isError || (!isLoading && groups.length < 1)){
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
      <div className={className}>
        <Group className={isLoading || isError ? styles.errorContainer: ""}>
          <Div>
              {isLoading ? (
                  <PanelSpinner className={styles.spinner}>Загрузка данных...</PanelSpinner>
              ) : (
                  groups.map((group) => (
                      <>
                          <GroupsItem className={styles.group} key={group.id} avatarColor={group.avatar_color} title={group.name} counter={group.members_count} friends={group.friends} closed={group.closed}/>
                          <Spacing size={20} className={styles.separator}>
                              <Separator wide/>
                          </Spacing>
                      </>
                  ))
              )}
          </Div>
        </Group>
        {!isLoading && !isError && <Footer>{formatCounterText(groups.length, CounterType.GROUPS)}</Footer>}
      </div>
    );
};
