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
    $marginLeft? : string;
    $marginRight? : string;
    $marginTop? :string;
}

export interface commonStringProps extends gridProps, Props<string> {
}