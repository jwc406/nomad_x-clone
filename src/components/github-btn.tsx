import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { styled } from "styled-components";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Logo = styled.img`
  height: 25px;
  margin-right: 10px;
`;

export default function GithubButton() {
  const navigate = useNavigate();
  const onClick = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Button onClick={onClick} sort="social" size="XL">
      <Logo src="/github-logo.svg" />
      Github 계정으로 가입하기
    </Button>
  );
}
