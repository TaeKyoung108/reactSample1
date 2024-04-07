//색 가져오는 부분이 tailWind 에 맞게 바뀜
const getColorClass = (lightMode: boolean,value: number|null|undefined) => {
    if (value === null || value === undefined) {
        return 'bg-light_white';
    } else if (value >= 1 && value <= 10) {
        if (lightMode){
            return 'bg-light_yellow';
        }
        return 'bg-dark_yellow';
    } else if (value >= 11 && value <= 20) {
        if (lightMode){
            return 'bg-light_light_blue';
        }
        return 'bg-dark_light_blue';
    } else if (value >= 21 && value <= 30) {
        if (lightMode){
            return 'bg-light_red';
        }
        return 'bg-dark_red';
    } else if (value >= 31 && value <= 40) {
        if (lightMode){
            return 'bg-light_violet';
        }
        return 'bg-dark_violet';
    } else if (value >= 41 && value <= 45) {
        if (lightMode){
            return 'bg-light_light_green';
        }
        return 'bg-dark_light_green';
    }
    // 기본값으로 bg-light_white를 반환
    return 'bg-light_white';
}

export default getColorClass;