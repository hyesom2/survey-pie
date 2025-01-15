import styled from 'styled-components';

function Item({ children, onChange }) {
  return (
    <ItemWrapper>
      <label>
        <input type="checkbox" onChange={onChange} />
        {/* input : css로 숨긴 후, check여부만 */}
        <span /> {/* span : css디자인만 따로 */}
        <div>{children}</div>
      </label>
    </ItemWrapper>
  );
}

export default function SelectInput({ answer = [], setAnswer, options }) {
  const handleOnChecked = (isChecked, index) => {
    if (isChecked) {
      // setAnswer(index추가)
      setAnswer([...answer, index]);
    } else {
      // setAnswer(index삭제)
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
