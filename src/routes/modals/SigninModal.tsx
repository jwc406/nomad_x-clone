import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import { auth } from "../../firebase";
import { Error, Form, Input } from "../../styles/auth-components";
import { useModal } from "../../hooks/useModal";
import LoginModal from "./LoginModal";

export default function SigninModal() {
  const navigate = useNavigate();
  const [loginModal, openLoginModal, closeLogininModal] = useModal();
  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (isLoading || name === "" || email === "" || password === "") return;
    try {
      setLoading(true);
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(credentials.user);
      await updateProfile(credentials.user, {
        displayName: name,
      });
      navigate("/");
    } catch (e) {
      if (e instanceof FirebaseError) {
        setError(e.message);
      }
      // setError
    } finally {
      setLoading(false);
    }
  };
  return (
    <Wrapper>
      <section>
        {!loginModal ? (
          <>
            <h1>계정 생성하기</h1>
            <Form onSubmit={onSubmit}>
              <img src="src\assets\imgs\signin.png" width="200px" alt="" />
              <Input
                onChange={onChange}
                name="name"
                value={name}
                placeholder="Name"
                type="text"
                required
              />
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
                value={isLoading ? "Loading..." : "생성하기"}
              />
            </Form>
            <Switcher>
              계정이 있으신가요?
              <Link to="#" onClick={openLoginModal}>
                {" "}
                로그인하기
              </Link>
            </Switcher>
            {error !== "" && <Error>{error}</Error>}
          </>
        ) : (
          <LoginModal />
        )}
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;

  h1 {
    font-size: var(--main-Size);
    font-weight: 700;
    width: 350px;
  }
`;

const Switcher = styled.span`
  display: block;
  margin: 30px 0;
  a {
    color: var(--main-Color);
    font-weight: 700;
    text-decoration: none;
  }
`;
