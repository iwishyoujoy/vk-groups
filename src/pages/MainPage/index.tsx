import { PanelHeader } from "@vkontakte/vkui"

import { Wrapper } from "../../components/Wrapper";
import { Filters } from "../../components/Filters";
import { Groups } from "../../components/Groups";

import styles from './styles.module.css';

export const MainPage = () => {
    return (
        <>
            <PanelHeader>VK сообщества</PanelHeader>
            <Wrapper>
                <div className={styles.container}>
                    <Filters className={styles.filters}/>
                    <Groups className={styles.content} />
                </div>
            </Wrapper>
        </>
    )
}