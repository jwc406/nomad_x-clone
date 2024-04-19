import Button from "../components/Button";
import styled from "styled-components";
import {
  BellIcon,
  HomeIcon,
  ListIcon,
  MassegeIcon,
  MoreIcon,
  SearchIcon,
  SettingsIcon,
} from "../components/icon-components";
import MenuBtn from "../components/home-menu-btns";
import { Outlet } from "react-router-dom";

export default function Layout() {
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
          <Profile>
            <div>
              <img src="" alt="프로필이다" />
              <section>
                <h1>닉네임</h1>
                <p>아이디</p>
              </section>
            </div>
            <MoreIcon />
          </Profile>
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

const Profile = styled.button`
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--box-Color);
  padding: 20px;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background: #efefef;
  }
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
