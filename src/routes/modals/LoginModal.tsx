import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { auth } from "../../firebase";
import { Error, Input, Switcher } from "../../styles/auth-components";
import { LoginModalChoiceBox, Divider } from "../Login";
import GithubButton from "../../components/github-btn";
import GoogleButton from "../../components/google-btn";
import styled from "styled-components";

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
        <Button type="submit" value={isLoading ? "Loading..." : "로그인"} />
      </Form>
      {error !== "" ? <Error>{error}</Error> : null}
      <Switcher>
        Don't have an account?{" "}
        <Link to="/create-account">Create one &rarr;</Link>
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
