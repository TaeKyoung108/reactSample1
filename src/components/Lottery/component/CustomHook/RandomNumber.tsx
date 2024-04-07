import random from "random";


interface RandomNumberReturn {
    getRandom: (start: number, end: number) => number;
    get1Number: () => number;
    get6Number: (defaultList: {
        value1: number | null;
        value2: number | null;
        value3: number | null;
        value4: number | null;
        value5: number | null;
        value6: number | null;
    }) => number[]
}

/**
 * Random 숫자를 가져오는 함수
 *
 * - getRandomNumber().getRandom(1, 45); 으로 사용 가능
 * - getRandomNumber().get6Number
 */
export const getRandomNumber = (): RandomNumberReturn => {
    const getRandom = (start: number, end: number) => {
        return random.int(start, end);
    };

    /**
     * 랜덤 숫자 1개 받는 함수
     */
    const get1Number = () => {
        return random.int(1, 45);
    };

    /**
     * 랜덤 숫자를 6개 받는 함수
     * @param defaultList 랜덤 숫자중에 필수적으로 포함되어야 할 값을 넣어줄 수 있음
     */
    const get6Number = (defaultList: {
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


    return { getRandom, get1Number, get6Number };
};

