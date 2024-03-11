import { Div, Group, Separator, Spacing } from "@vkontakte/vkui"

import { privacyOptions, colorOptions, sortOptions } from '../../constants/options';
import { Group as GroupType } from '../../types/groups';
import { FilterItem } from "./FiltersItem";
import { FiltersCheckbox } from "./FiltersCheckbox";
import { useFilters } from "../../redux/filtersContext";
import { useGroups } from '../../redux/groupsContext';
import styles from './styles.module.css';

interface IFilterProps {
    className?: string;
}

export const Filters: React.FC<IFilterProps> = ({className}) => {
    const { filters, setFilters } = useFilters();
    const { groups, filteredGroups, setFilteredGroups } = useGroups();

    const handleColorChange = (event: React.FormEvent<HTMLSelectElement>) => {
        const newColor = event.currentTarget.value;
        setFilters({...filters, color: newColor});
        const filteredGroups = filterGroups(newColor, filters.privacy, filters.friends);
        sortGroups(filters.sortBy, filteredGroups);
    }

    const handlePrivacyChange = (event: React.FormEvent<HTMLSelectElement>) => {
        const newPrivacy = event.currentTarget.value;
        setFilters({...filters, privacy: newPrivacy});
        const filteredGroups = filterGroups(filters.color, newPrivacy, filters.friends);
        sortGroups(filters.sortBy, filteredGroups);
    }

    const handleFriendsChange = () => {
        const newFriends = !filters.friends;
        setFilters({...filters, friends: newFriends});
        const filteredGroups = filterGroups(filters.color, filters.privacy, newFriends);
        sortGroups(filters.sortBy, filteredGroups);
    }

    const filterGroups = (color: string | undefined, privacy: string | undefined, friends: boolean | undefined): GroupType[] => {
        const filteredGroups = groups.filter((group) => {
            return (!color || color === 'all' || group.avatar_color === color) &&
            (!privacy || privacy === 'all' || (group.closed && privacy === 'closed') || (!group.closed && privacy === 'opened')) &&
            (!friends || (group.friends?.length ?? 0));
        });
        setFilteredGroups(filteredGroups);
        return filteredGroups;
    }

    const sortGroups = (sortBy: string | undefined, filteredGroups: GroupType[]) => {
        let sortedGroups = [...filteredGroups];
        switch (sortBy){
            case "name":
                sortedGroups.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "friends":
                sortedGroups.sort((a, b) => (b.friends?.length ?? 0) - (a.friends?.length ?? 0));
                break;
            case "subscribers":
                sortedGroups.sort((a, b) => b.members_count - a.members_count);
                break;
        }
        setFilteredGroups(sortedGroups);
    }

    const handleSortChange = (event: React.FormEvent<HTMLSelectElement>) => {
        const sortBy = event.currentTarget.value;
        setFilters({...filters, sortBy });
        sortGroups(sortBy, filteredGroups);
    }

    return (
        <Group className={className}>
            <Div className={styles.filters}>
                <FilterItem options={sortOptions} searchable={false} text="Сортировка" placeholder="Выберите тип сортировки" onChange={handleSortChange}/>

                <Spacing size={20}>
                    <Separator wide/>
                </Spacing>

                <FilterItem options={colorOptions} text="Цвет аватарки" placeholder="Выберите цвет" onChange={handleColorChange}/>

                <Spacing size={20}>
                    <Separator wide/>
                </Spacing>

                <FilterItem options={privacyOptions} searchable={false} text="Тип приватности" placeholder="Выберите тип приватности" onChange={handlePrivacyChange}/>

                <Spacing size={20}>
                    <Separator wide/>
                </Spacing>

                <FiltersCheckbox title="Мои друзья" text="Мои друзья состоят в группе" onChange={handleFriendsChange}/>
            </Div>
        </Group>
    )
}