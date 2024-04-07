import React from "react";

export const handleDoubleClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    console.log(1)
    event.currentTarget.select(); // 이벤트가 발생한 요소를 선택합니다.
};