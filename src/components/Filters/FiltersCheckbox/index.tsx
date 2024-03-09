import { Text, Checkbox } from "@vkontakte/vkui"

import styles from './styles.module.css';

interface IFiltersCheckboxProps {
    className?: string;
    text: string;
    title: string;
    defaultChecked?: boolean;
    hasHover?: boolean;
    hasActive?: boolean;
}

export const FiltersCheckbox: React.FC<IFiltersCheckboxProps> = (props) => {
    const { className, text, title, defaultChecked = false, hasHover = false, hasActive = false } = props;
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
                hasHover={hasHover} 
                hasActive={hasActive}
            >
                {text}
            </Checkbox>
        </div>
    )
}