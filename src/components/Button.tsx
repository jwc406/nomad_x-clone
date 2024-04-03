import styled, { css } from "styled-components";

export default function Button({
  children,
  onClick,
  type,
  value,
  sort,
  size,
}: any) {
  const StyledBtns = type === "submit" ? StyledSubmit : StyledButton;
  return (
    <StyledBtns
      type={type}
      onClick={onClick}
      defaultValue={value}
      value={value}
      sort={sort}
      size={size}
    >
      {children}
    </StyledBtns>
  );
}

const BaseStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  cursor: pointer;
`;

const ConditionalStyle = css`
  // 버튼 종류
  ${({ sort }) => {
    switch (sort) {
      case "base":
        return css`
          border: solid 1px var(--main-Color);
          background: var(--main-Color);
          color: var(--light-Color);
        `;
      case "social":
        return css`
          border: solid 1px var(--main-Border_lite);
          background: var(--box-Color);
          color: var(--main-Color);
        `;
      case "lite":
        return css`
          border: solid 1px var(--main-Border_medium);
          background: var(--box-Color);
          color: var(--main-Color);
        `;
      case "dark":
        return css`
          border: solid 1px var(--dark-Color);
          background: var(--dark-Color);
          color: var(--light-Color);
        `;
      default:
        return css``;
    }
  }}
  // 버튼 사이즈
  ${({ size }) => {
    switch (size) {
      case "XL":
        return css`
          width: 300px;
          height: 40px;
          font-size: var(--basic-Size);
        `;
      case "L":
        return css`
          width: 180px;
          height: 40px;
          font-size: var(--basic-Size);
        `;
      case "M":
        return css`
          width: 80px;
          height: 30px;
          font-size: var(--basic-Size);
        `;
      case "S":
        return css`
          width: 50px;
          height: 20px;
          font-size: var(--lite-Size);
        `;
      default:
        return css``;
    }
  }}
`;

const StyledSubmit = styled.input`
  ${BaseStyle}
  ${ConditionalStyle}
`;

const StyledButton = styled.button`
  ${BaseStyle}
  ${ConditionalStyle}
`;
