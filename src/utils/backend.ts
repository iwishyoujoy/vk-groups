import { GetGroupsResponse } from "../types/groups";
import { data } from "../constants/groups";

export function simulateBackend(successChance: number): Promise<GetGroupsResponse> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < successChance) {
                resolve({ result: 1, data });
            } else {
                if (Math.random() < 0.5) {
                    reject(new Error('Ошибка при обработке запроса'));
                } else {
                    resolve({ result: 0 });
                }
            }
        }, 1000);
    });
}