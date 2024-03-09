import React from "react";


export interface Props<T> {
    value: T;
}

export interface gridProps {
    $grid?: string;
}

export interface cssGridProps extends gridProps{
    $fontSize? : string;
    $isSelected? : boolean;
    $color? : string;
    $hoverColor? : string;
    $activeColor? : string;
    $backgroundColor? : string;
    $height? : string;
    $padding? : string;
    $margin? : string;
    $width? : string;
}

export interface commonStringProps extends gridProps, Props<string> {
}