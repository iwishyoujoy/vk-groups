import { Text, Checkbox } from "@vkontakte/vkui"

import styles from './styles.module.css';
import { useFilters } from "../../../redux/filtersContext";

interface IFiltersCheckboxProps {
    className?: string;
    text: string;
    title: string;
    defaultChecked?: boolean;
    hasHover?: boolean;
    hasActive?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const FiltersCheckbox: React.FC<IFiltersCheckboxProps> = (props) => {
    const { className, text, title, defaultChecked = false, hasHover = false, hasActive = false, onChange } = props;
    const { filters } = useFilters();

    return (
        <div className={className}>
            <Text 
                className="filterLabel" 
                weight="1" 
                style={{paddingBottom: "13px", marginTop: "6px"}}
            >
                {title}
            </Text>
            <Checkbox 
                defaultChecked={defaultChecked} 
                className={styles.checkbox}
                indeterminate={false}
                hasHover={hasHover} 
                hasActive={hasActive}
                onChange={onChange}
            >
                {text}
            </Checkbox>
        </div>
    )
}