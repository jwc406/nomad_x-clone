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
  svg {
    margin-right: 5px;
  }
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
          &:hover {
            background: var(--main_hover);
          }
        `;
      case "social":
        return css`
          border: solid 1px var(--main-Border_lite);
          background: var(--box-Color);
          color: var(--main-Color);
          &:hover {
            background: var(--social_hover);
          }
        `;
      case "lite":
        return css`
          border: solid 1px var(--main-Border_medium);
          background: var(--box-Color);
          color: var(--main-Color);
          &:hover {
            background: var(--box_hover);
          }
        `;
      case "dark":
        return css`
          border: solid 1px var(--dark-Color);
          background: var(--dark-Color);
          color: var(--light-Color);
          &:hover {
            background: var(--dark_hover);
          }
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
          width: 350px;
          height: 40px;
          font-size: var(--basic-Size);
        `;
      case "L":
        return css`
          width: 280px;
          height: 40px;
          font-size: var(--basic-Size);
        `;
      case "M":
        return css`
          width: 100px;
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
