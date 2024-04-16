import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { auth } from "../firebase";
import styled from "styled-components";
import {
  BellIcon,
  HomeIcon,
  ListIcon,
  MassegeIcon,
  SearchIcon,
  SettingsIcon,
} from "../components/icon-components";

export default function Home() {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const logOut = () => {
    auth.signOut();
    // 로그아웃 후 바로 이동하기 위해 navigate 함수 사용
    navigate("/login");
  };

  return (
    <Wrapper>
      <Header>
        <img src="src\assets\imgs\logo-lite.png" width="200px" alt="" />
        <Nav>
          <Menu>
            <button>
              <HomeIcon />홈
            </button>
            <button>
              <SearchIcon />
              탐색하기
            </button>
            <button>
              <ListIcon />
              리스트
            </button>
            <button>
              <BellIcon />
              알림
            </button>
            <button>
              <MassegeIcon />
              쪽지
            </button>
            <button>
              <SettingsIcon />
              설정
            </button>
          </Menu>
          <Button sort="base" size="L">
            게시하기
          </Button>
        </Nav>
      </Header>
      <Main>
        <Button onClick={logOut}>나는 칠드런</Button>
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  max-width: 1280px;
`;

const Header = styled.header`
  background: #d9b1ff;
  width: 280px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 10px 0;
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Menu = styled.div`
  background: var(--box-Color);
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-radius: 20px;

  button {
    background: none;
    display: flex;
    align-items: center;
    gap: 15px;
    width: fit-content;
    padding: 0 20px;
    height: 50px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    svg {
      width: 20px;
    }
    &:hover {
      background: #efefef;
    }
  }
`;

const Main = styled.main`
  background: blue;
  width: 1000px;
`;
