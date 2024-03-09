import { useEffect } from 'react';

import { Div, Group, Separator, Spacing } from "@vkontakte/vkui"

import { privacyOptions, colorOptions } from '../../constants/options';
import styles from './styles.module.css';
import { FilterItem } from "./FiltersItem";
import { FiltersCheckbox } from "./FiltersCheckbox";
import { useFilters } from "../../redux/filtersContext";

interface IFilterProps {
    className?: string;
}

export const Filters: React.FC<IFilterProps> = ({className}) => {
    const { filters, setFilters } = useFilters();

    useEffect(() => {
        console.log(filters);
    }, [filters, setFilters])

    const handleColorChange = (event: React.FormEvent<HTMLSelectElement>) => {
        setFilters({...filters, color: event.currentTarget.value})
    }

    const handlePrivacyChange = (event: React.FormEvent<HTMLSelectElement>) => {
        setFilters({...filters, privacy: event.currentTarget.value})
    }

    const handleFriendsChange = () => {
        setFilters({...filters, friends: !filters.friends})
    }

    return (
        <Group className={className}>
            <Div className={styles.filters}>
                <FilterItem options={colorOptions} text="Цвет аватарки" placeholder="Выберите цвет" onChange={handleColorChange}/>

                <Spacing size={20}>
                    <Separator wide/>
                </Spacing>

                <FilterItem options={privacyOptions} text="Тип приватности" placeholder="Выберите тип приватности" onChange={handlePrivacyChange}/>

                <Spacing size={20}>
                    <Separator wide/>
                </Spacing>

                <FiltersCheckbox title="Мои друзья" text="Мои друзья состоят в группе" onChange={handleFriendsChange}/>
            </Div>
        </Group>
    )
}