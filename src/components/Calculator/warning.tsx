import styled from "styled-components";


const StyledValid = styled.div`
position: absolute;
z-index : 999;
height: 50px;
width: 330px;
border-radius: 15px;
border: 1px solid #cccccc;
display: flex;
justify-content: center;
align-items: center;
font-size: 17px;
font-family: "Lilita One", sans-serif;
font-weight: 400;
font-style: normal;
color: #e68652;
gap: 10px;
transform: translateY(-130px);
`;


function Warning(){
    return (
        <StyledValid>
            숫자의 범위는 0~99까지 입니다.
        </StyledValid>
    )

}

export default Warning;