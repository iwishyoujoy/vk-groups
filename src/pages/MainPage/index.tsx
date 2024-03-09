import { PanelHeader, Footer } from "@vkontakte/vkui"

import { Wrapper } from "../../components/Wrapper";
import { Filters } from "../../components/Filters";
import { Groups } from "../../components/Groups";
import { formatCounterText, CounterType } from "../../utils/text";
import { useGroups } from "../../redux/groupsContext";
import { useFilters } from "../../redux/filtersContext";

import styles from './styles.module.css';

export const MainPage = () => {
    const { groups } = useGroups();
    const { filters } = useFilters();

    const filteredGroups = groups.filter((group) => {
        return (!filters.color || filters.color === 'all' || group.avatar_color === filters.color) &&
        (!filters.privacy || filters.privacy === 'all' || (group.closed && filters.privacy === 'closed') || (!group.closed && filters.privacy === 'opened')) &&
        (!filters.friends || (group.friends?.length ?? 0));
    })

    return (
        <>
            <PanelHeader>VK сообщества</PanelHeader>
            <Wrapper>
                <div className={styles.container}>
                    <Filters className={styles.filters}/>
                    <Groups className={styles.content}/>
                    <Footer className={styles.footer}>
                        {formatCounterText(filteredGroups.length, CounterType.GROUPS)}
                    </Footer>
                </div>
            </Wrapper>
        </>
    )
}