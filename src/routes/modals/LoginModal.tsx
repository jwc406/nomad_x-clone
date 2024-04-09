import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import GithubButton from "../../components/github-btn";
import GoogleButton from "../../components/google-btn";
import { auth } from "../../firebase";
import { Form, Error, Input, Switcher } from "../../styles/auth-components";
import { Divider, LoginModalChoiceBox } from "../Login";

export default function LoginModal() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (isLoading || email === "" || password === "") return;
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (e) {
      if (e instanceof FirebaseError) {
        setError(e.message);
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <Wrapper>
      <h1>로그인</h1>
      <LoginModalChoiceBox>
        <GithubButton />
        <GoogleButton />
        <Divider>
          <div></div>
          <p>또는</p>
          <div></div>
        </Divider>
      </LoginModalChoiceBox>
      <Form onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          name="email"
          value={email}
          placeholder="Email"
          type="email"
          required
        />
        <Input
          onChange={onChange}
          value={password}
          name="password"
          placeholder="Password"
          type="password"
          required
        />
        <Button
          type="submit"
          sort="base"
          size="XL"
          value={isLoading ? "Loading..." : "로그인"}
        />
        <Button sort="lite" size="XL">
          비밀번호를 잊으셨나요?
        </Button>
      </Form>
      {error !== "" ? <Error>{error}</Error> : null}
      <Switcher>
        계정이 없으신가요?
        <Link to="/create-account"> 가입하기</Link>
      </Switcher>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 300px;

  h1 {
    font-size: var(--main-Size);
    font-weight: 700;
    margin-bottom: 20px;
    width: 300px;
  }
`;
