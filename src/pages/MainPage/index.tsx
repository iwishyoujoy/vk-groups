import { Div, Group } from "@vkontakte/vkui"
import { Filters } from "../../components/Filters"

import styles from './styles.module.css';
import { Wrapper } from "../../components/Wrapper";

export const MainPage = () => {
    return (
        <Wrapper>
            <div className={styles.container}>
                <Filters className={styles.filters}/>
                <Group className={styles.content}>
                    <Div>
                        а тут будут группы
                    </Div>
                </Group>
            </div>
        </Wrapper>

    )
}