import { CustomSelect, Text } from "@vkontakte/vkui"
import { IOptions } from "@/types/options";

interface IFilterProps {
    className?: string;
    options: IOptions[];
    text: string;
    placeholder?: string;
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

export const FilterItem: React.FC<IFilterProps> = (props) => {
    const {className, options, text, placeholder, onChange} = props;

    return (
        <div className={className}>
            <Text className="filterLabel" weight="1" style={{paddingBottom: "13px", marginTop: "6px"}}>{text}</Text>
            <CustomSelect searchable={true} options={options} placeholder={placeholder} onChange={onChange}/>
        </div>
    )
}