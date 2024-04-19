import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { auth } from "../firebase";
import styled from "styled-components";

export default function Home() {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const logOut = () => {
    auth.signOut();
    // 로그아웃 후 바로 이동하기 위해 navigate 함수 사용
    navigate("/login");
  };

  return (
    <Main>
      <Button onClick={logOut}>나는 칠드런</Button>
    </Main>
  );
}

const Main = styled.main`
  background: blue;
  width: 1000px;
`;
