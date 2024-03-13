import { PanelHeader, Footer } from "@vkontakte/vkui"

import { Wrapper } from "../../components/Wrapper";
import { Filters } from "../../components/Filters";
import { Groups } from "../../components/Groups";
import { formatCounterText, CounterType } from "../../utils/text";
import { useGroups } from "../../storage/groupsContext";

import styles from './styles.module.css';

export const MainPage = () => {
    const { filteredGroups } = useGroups();

    return (
        <>
            <PanelHeader>VK сообщества</PanelHeader>
            <Wrapper className={styles.wrapper}>
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