import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  color: var(--main-Color);
  font-weight: 700;
  h1 {
    font-size: 62px;
  }
  h2 {
    font-size: 40px;
  }
`;

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 350px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  border-radius: 10px;
  border: solid 1px var(--main-Border_lite);
`;

export const Error = styled.span`
  font-weight: 600;
  color: tomato;
  margin-top: 10px;
`;

export const Switcher = styled.span`
  margin: 30px 0;
  a {
    color: var(--main-Color);
    font-weight: 700;
    text-decoration: none;
  }
`;
