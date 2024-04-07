import random from "random";

// 얘는 hook 은 아니고 function 이긴 한데
interface RandomNumberReturn {
    getRandom: (start: number, end: number) => number;
}

export const getRandomNumber = (): RandomNumberReturn => {
    const getRandom = (start: number, end: number) => {
        return random.int(start, end); // end 까지 포함되도록 end + 1
    };

    return { getRandom };
};

export const get6Number = (defaultList: {
    value1: number | null;
    value2: number | null;
    value3: number | null;
    value4: number | null;
    value5: number | null;
    value6: number | null;
}) => {
    const result: number[] = Object.values(defaultList).filter(target => target !== null && target > 0) as number[];
    const usedNumbers: Set<number> = new Set(result);

    while (result.length < 6) {
        const randomNumber = random.int(1, 45);
        if (!usedNumbers.has(randomNumber)) {
            result.push(randomNumber);
            usedNumbers.add(randomNumber);
        }
    }

    return result.sort((a, b) => a - b);
}