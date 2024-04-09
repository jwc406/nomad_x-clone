import styled from "styled-components";
import GithubButton from "../components/github-btn";
import GoogleButton from "../components/google-btn";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { Modal, useModal } from "../hooks/useModal";
import LoginModal from "./modals/LoginModal";

export default function Login() {
  const navigate = useNavigate();
  const onClickSigninModal = () => {
    navigate("/create-account");
  };
  const [loginModal, openLoginModal, closeLoginModal] = useModal();

  return (
    <Wrapper>
      <img src="src\assets\imgs\logo-main.png" alt="" />
      <Main>
        <Title>
          <h1>지금 일어나고 있는 일</h1>
          <h2>지금 가입하세요!</h2>
        </Title>
        <section>
          <ChoiceBox>
            <GithubButton />
            <GoogleButton />
            <Divider>
              <div></div>
              <p>또는</p>
              <div></div>
            </Divider>
            <Button onClick={onClickSigninModal} sort="base" size="XL">
              계정 만들기
            </Button>
            <p
              style={{
                color: "var(--main-Color)",
                fontSize: "var(--lite-Size)",
              }}
            >
              가입하시려면 <Strong>쿠키 사용</Strong>을 포함해{" "}
              <Strong>이용약관</Strong>과 <Strong>개인정보 처리방침</Strong>에
              동의해야 합니다.
            </p>
          </ChoiceBox>
          <LoginBox>
            <p>이미 X에 가입하셨나요?</p>
            <Button onClick={openLoginModal} sort="lite" size="XL">
              로그인
            </Button>
          </LoginBox>
        </section>
        {/* 비밀번호 잊었을 때 재설정 -> sendPasswordResetEmail */}
        <Modal isOpen={loginModal} closeModal={closeLoginModal}>
          <LoginModal />
        </Modal>
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  max-width: 1440px;
  height: 100vh;
  gap: 100px;
  align-items: center;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 400px;
    max-width: 300px;
  }
`;

const Title = styled.div`
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

const ChoiceBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  margin-top: 50px;
`;

export const LoginModalChoiceBox = styled(ChoiceBox)`
  margin-top: 0px;
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  p {
    font-size: var(--main-Size);
    color: var(--main-Color);
    font-weight: 700;
  }
`;

export const Divider = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  div {
    flex: 1;
    height: 1px;
    background: var(--main-Border_lite);
  }
  p {
    color: var(--main-Color);
  }
`;

const Strong = styled.strong`
  font-weight: 700;
`;
