import styled from "styled-components";

export interface gridProps {
    $grid?: string;
}

export interface newCssGridProps extends gridProps{
    $lightMode? : boolean;
    $bgColorOption? : string | null;

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

export const FlexCenterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
`;