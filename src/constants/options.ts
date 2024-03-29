import { IOptions } from "../types/options";

export const privacyOptions: IOptions[] = [
    {
        label: "Все",
        value: "all"
    },
    {
        label: "Открытая",
        value: "opened"
    }, 
    {
        label: "Закрытая",
        value: "closed"
    }
];

export const colorOptions: IOptions[] = [
    {
        label: 'Любой',
        value: 'all'
    },
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

export const sortOptions: IOptions[] = [
    {
        label: "По названию",
        value: "name"
    },
    {
        label: "По количеству подписчиков",
        value: "subscribers"
    },
    {
        label: "По релевантности",
        value: "friends"
    }
]


