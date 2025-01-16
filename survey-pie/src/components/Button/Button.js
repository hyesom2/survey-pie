import styled from 'styled-components';

import { PRIMARY, SECONDARY, TERTIARY } from '../../constants/color';

/* styled.components에서 props로 받는법 
  1. ${(props) => { props.type으로 코드를 짠 후 return ~~ }};
  예)  
  ${(props) => {
    if (props.type === 'PRIMARY') {
      return PRIMARY.BUTTON.DEFAULT.COLOR;
    } else if (props.type === 'SECONDARY') {
      return SECONDARY.BUTTON.DEFAULT.COLOR;
    } else if (props.type === 'TERTIARY') {
      return TERTIARY.BUTTON.DEFAULT.COLOR;
    } else {
      return PRIMARY.BUTTON.DISABLED.COLOR;
    }
  }}
  but, 코드가 너무 길다는 단점! 어떻게 간결하게 짤까?
  2. 함수로 따로 뺀다.
  function getColor(type1, type2) {
    if (type1 === 'PRIMARY') {
      return PRIMARY.BUTTON.${type2}.COLOR;
    } else if (type1 === 'SECONDARY') {
      return SECONDARY.BUTTON.${type2}.COLOR;
    } else if (type1 === 'TERTIARY') {
      return TERTIARY.BUTTON.${type2}.COLOR;
    } else {
      return PRIMARY.BUTTON.${type2}.COLOR;
    }
  }
  3. Map으로 관리
  const colorMap = {
    PRIMARY, // === PRIMARY:PRIMARY 이름이 똑같은 변수와 필드명을 같이 쓸 땐 축약이 가능
    SECONDARY,
    TERTIARY
  }
  color: ${(props) => { return colorMap(props.type).BUTTON.DEFAULT.COLOR }};
  → props에서 type만 꺼내옴
  color: ${({type}) => { return colorMap[type].BUTTON.DEFAULT.COLOR }};
  → 중괄호{ } + return을 축약 가능
  color: ${({type}) => colorMap[type].BUTTON.DEFAULT.COLOR};
*/

const colorMap = {
  PRIMARY,
  SECONDARY,
  TERTIARY,
};

const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  color: ${({ type }) => colorMap[type].BUTTON.DEFAULT.COLOR};
  background-color: ${({ type }) => colorMap[type].BUTTON.DEFAULT.BACKGROUND};
  border: none;
  border-radius: 4px;
  padding: 16px 24px;
  font-size: 18px;
  font-weight: 700;
  border: ${({ type }) =>
    type === 'TERTIARY'
      ? `1px solid ${TERTIARY.BUTTON.DEFAULT.BORDER}`
      : 'none'};

  &:hover {
    color: ${({ type }) => colorMap[type].BUTTON.HOVER.COLOR};
    background-color: ${({ type }) => colorMap[type].BUTTON.HOVER.BACKGROUND};
    border-color: ${({ type }) => colorMap[type].BUTTON.HOVER.BORDER};
    cursor: pointer;
  }

  &:active {
    color: ${({ type }) => colorMap[type].BUTTON.PRESSED.COLOR};
    background-color: ${({ type }) => colorMap[type].BUTTON.PRESSED.BACKGROUND};
    border-color: ${({ type }) => colorMap[type].BUTTON.PRESSED.BORDER};
  }
`;

export default Button;
