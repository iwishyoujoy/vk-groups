export enum CounterType {
    FRIENDS,
    SUBSCRIBERS
}

export function formatCounterText(n: number, counterType: CounterType): string {
    let ending: string;

    const lastDigit = n % 10;
    const lastTwoDigits = n % 100;

    if (lastDigit === 1 && lastTwoDigits !== 11) {
        ending = counterType === CounterType.FRIENDS ? 'друг' : 'подписчик';
    } else if (lastDigit >= 2 && lastDigit <= 4 && (lastTwoDigits < 10 || lastTwoDigits >= 20)) {
        ending = counterType === CounterType.FRIENDS ? 'друга' : 'подписчика';
    } else {
        ending = counterType === CounterType.FRIENDS ? 'друзей' : 'подписчиков';
    }

    return `${n} ${ending}`;
}