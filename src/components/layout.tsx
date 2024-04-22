import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import MenuBtn from "../components/home-menu-btns";
import {
  BellIcon,
  HomeIcon,
  ListIcon,
  MassegeIcon,
  MoreIcon,
  SearchIcon,
  SettingsIcon,
} from "../components/icon-components";
import { auth } from "../firebase";

export default function Layout() {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const logOut = async () => {
    const ok = confirm("로그아웃 하시겠습니까?");
    if (ok) {
      await auth.signOut();
      // 로그아웃 후 바로 이동하기 위해 navigate 함수 사용
      navigate("/login");
    }
  };
  const [dialogOpen, setDialogOpen] = useState(false);
  const toggleDialog = () => {
    setDialogOpen(!dialogOpen);
  };
  const closeDialog = () => {
    setDialogOpen(false);
  };
  return (
    <Wrapper>
      <Header>
        <img src="src\assets\imgs\logo-lite.png" width="200px" alt="" />
        <Nav>
          <Menu>
            <MenuBtn>
              <HomeIcon />홈
            </MenuBtn>
            <MenuBtn>
              <SearchIcon />
              탐색하기
            </MenuBtn>
            <MenuBtn>
              <ListIcon />
              리스트
            </MenuBtn>
            <MenuBtn>
              <BellIcon />
              알림
            </MenuBtn>
            <MenuBtn>
              <MassegeIcon />
              쪽지
            </MenuBtn>
            <MenuBtn>
              <SettingsIcon />
              설정
            </MenuBtn>
          </Menu>
          <Button sort="base" size="L">
            게시하기
          </Button>
          <Profile onClick={toggleDialog}>
            <div>
              <img src="" alt="프로필이다" />
              <section>
                <h1>닉네임</h1>
                <p>아이디</p>
              </section>
            </div>
            <MoreIcon />
            {dialogOpen && (
              <Dialog onClick={logOut}>
                {/* 다이얼로그 내용 */}
                <div className="triangle"></div>
                로그아웃
              </Dialog>
            )}
          </Profile>
          {dialogOpen && <Overlay onClick={closeDialog}></Overlay>}
        </Nav>
      </Header>
      <Outlet />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  max-width: 1280px;
`;

const Header = styled.header`
  /* background: #d9b1ff; */
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
      background: var(--lite_hover);
    }
  }
`;

const Profile = styled.button`
  position: relative;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--box-Color);
  padding: 20px;
  border-radius: 20px;
  cursor: pointer;
  div {
    display: flex;
    gap: 10px;
    img {
      width: 50px;
      height: 50px;
      border-radius: 25px;
      background: black;
    }
    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 5px;
    }
  }
  svg {
    width: 30px;
  }
`;

const Dialog = styled.button`
  padding: 20px;
  border: none;
  cursor: pointer;
  width: 300px;
  height: 50px;
  display: flex;
  align-items: center;
  background: var(--box-Color);
  border-radius: 20px;
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid var(--dark-Border);
  z-index: 1;
  &:hover {
    background: var(--lite_hover);
    .triangle {
      background-color: var(
        --lite_hover
      ); /* 삼각형의 배경색을 변경하여 호버 효과 적용 */
    }
  }
  .triangle {
    width: 10px;
    height: 10px;
    background-color: var(--box-Color);
    border-radius: 2px;
    box-shadow: -1px 1px var(--dark-Border);
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%) rotate(315deg);
    z-index: 1;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0; /* 다이얼로그보다 아래에 위치해야 함 */
`;
