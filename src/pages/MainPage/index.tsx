import { PanelHeader, Footer } from "@vkontakte/vkui"

import { Wrapper } from "../../components/Wrapper";
import { Filters } from "../../components/Filters";
import { Groups } from "../../components/Groups";
import { formatCounterText, CounterType } from "../../utils/text";
import { useGroups } from "../../redux/groupsContext";

import styles from './styles.module.css';

export const MainPage = () => {
    const { groups } = useGroups();

    return (
        <>
            <PanelHeader>VK сообщества</PanelHeader>
            <Wrapper>
                <div className={styles.container}>
                    <Filters className={styles.filters}/>
                    <Groups className={styles.content}/>
                    <Footer className={styles.footer}>
                        {formatCounterText(groups.length, CounterType.GROUPS)}
                    </Footer>
                </div>
            </Wrapper>
        </>
    )
}