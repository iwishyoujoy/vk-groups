export enum CounterType {
    FRIENDS,
    SUBSCRIBERS,
    GROUPS
}

export function formatCounterText(n: number, counterType: CounterType): string {
    let ending: string;

    const lastDigit = n % 10;
    const lastTwoDigits = n % 100;

    if (lastDigit === 1 && lastTwoDigits !== 11) {
        switch(counterType){
            case CounterType.FRIENDS:
                ending = 'друг'
                break;
            case CounterType.GROUPS:
                ending = 'сообщество'
                break;
            case CounterType.SUBSCRIBERS:
                ending = 'подписчик'
                break;
        }
    } else if (lastDigit >= 2 && lastDigit <= 4 && (lastTwoDigits < 10 || lastTwoDigits >= 20)) {
        switch(counterType){
            case CounterType.FRIENDS:
                ending = 'друга'
                break;
            case CounterType.GROUPS:
                ending = 'сообщества'
                break;
            case CounterType.SUBSCRIBERS:
                ending = 'подписчика'
                break;
        }
    } else {
        switch(counterType){
            case CounterType.FRIENDS:
                ending = 'друзей'
                break;
            case CounterType.GROUPS:
                ending = 'сообществ'
                break;
            case CounterType.SUBSCRIBERS:
                ending = 'подписчиков'
                break;
        }
    }

    return `${n} ${ending}`;
}