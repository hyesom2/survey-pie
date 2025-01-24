import styled from 'styled-components';

function Item({ children, onChange, checked }) {
  return (
    <ItemWrapper>
      <label>
        <input type="checkbox" onChange={onChange} checked={checked} />
        {/* 아이템이 체크가 된 상태여야 하는지 앙닌지를 위해 props로 전달 */}
        <span />
        <div>{children}</div>
      </label>
    </ItemWrapper>
  );
}

export default function SelectInput({ answer = [], setAnswer, options }) {
  const handleOnChecked = (isChecked, index) => {
    if (isChecked) {
      const max = options?.max ?? 1; // options.max를 max변수에 넣는데, max값이 없을 때는 1
      if (answer.length >= max) {
        return;
      }
      setAnswer([...answer, index]);
    } else {
      setAnswer(answer.filter((item) => item !== index));
    }
  };

  return (
    <SelectWrapper>
      {options.items.map((item, index) => {
        return (
          <Item
            key={index}
            onChange={(e) => handleOnChecked(e.target.checked, index)}
            checked={answer.includes(index)}
            // answer에 index값이 포함이 되어있는지 안되어있는지 checked로 값을 넘겨준다.
          >
            {item}
          </Item>
        );
      })}
    </SelectWrapper>
  );
}

// styled-components안의 css는 SCSS이다.
const ItemWrapper = styled.div`
  input[type='checkbox'] {
    display: none;
  }
  input[type='checkbox'] ~ span {
    display: inline-block;
    width: 24px;
    height: 24px;
    background-color: #fff;
    border: 4px solid #e2dfdf;
    border-radius: 50%;
  }
  input[type='checkbox']:checked ~ span {
    border: 8px solid #6542f1;
  }

  input[type='checkbox'] ~ div {
    display: inline-block;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.01%;
  }
  input[type='checkbox']:checked ~ div {
    font-weight: 700;
  }

  label {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  }
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
