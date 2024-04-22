import styled from "styled-components";
import PostTweetForm from "../components/post-tweet-form";
import MainSidebar from "../components/main-sidebar";

export default function Home() {
  return (
    <Wrapper>
      <Main>
        <Header>
          <button>추천</button>
          <button>팔로우 중</button>
        </Header>
        <PostTweetForm />
      </Main>
      <MainSidebar />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 30px 0;
  display: flex;
  gap: 20px;
  /* background: gray; */
  width: 1000px;
`;

const Main = styled.main`
  flex: 2;
  position: relative;
  background: var(--box-Color);
  border-radius: 20px;
  padding-top: 50px;
  overflow: hidden;
`;
const Header = styled.header`
  display: flex;
  width: 100%;
  height: 50px;
  position: absolute;
  top: 0;
  border-bottom: 1px solid var(--main-Border_lite);
  button {
    flex: 1;
    border: none;
    background: none;
    cursor: pointer;
    &:hover {
      background: var(--lite_hover);
    }
  }
`;
