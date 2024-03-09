import { Div, Group, Separator, Spacing } from "@vkontakte/vkui"

import { privacyOptions, colorOptions } from '../../constants/options';

import styles from './styles.module.css';
import { FilterItem } from "./FiltersItem";
import { FiltersCheckbox } from "./FiltersCheckbox";

interface IFilterProps {
    className?: string;
}

export const Filters: React.FC<IFilterProps> = ({className}) => {
    return (
        <Group className={className}>
            <Div className={styles.filters}>
                <FilterItem options={colorOptions} text="Цвет аватарки" placeholder="Выберите цвет" />

                <Spacing size={20}>
                    <Separator wide/>
                </Spacing>

                <FilterItem options={privacyOptions} text="Тип приватности" placeholder="Выберите тип приватности" />

                <Spacing size={20}>
                    <Separator wide/>
                </Spacing>

                <FiltersCheckbox title="Мои друзья" text="Мои друзья состоят в группе"/>
            </Div>
        </Group>
    )
}