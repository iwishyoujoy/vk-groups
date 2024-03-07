import { CustomSelect, Div, Group, Text } from "@vkontakte/vkui"
import { useState } from "react";

const options = [
    {
        label: 'Красный',
        value: 'red'
    },
    {
        label: 'Зеленый',
        value: 'green'
    }, 
    {
        label: 'Желтый',
        value: 'yellow'
    }, 
    {
        label: 'Синий', 
        value: 'blue'
    }, 
    {
        label: 'Фиолетовый',
        value: 'purple'
    }, 
    {
        label: 'Белый',
        value: 'white'
    }, 
    {
        label: 'Оранжевый',
        value: 'orange'
    }
];

interface IFilterProps {
    className?: string;
}

export const Filters: React.FC<IFilterProps> = ({className}) => {
    const [colorOptions, setColorOptions] = useState(options);

    return (
        <Group className={className}>
            <Div>
                <Text className="filterLabel">Цвет аватарки</Text>
                <CustomSelect searchable={true} options={colorOptions}></CustomSelect>
            </Div>
        </Group>
    )
}