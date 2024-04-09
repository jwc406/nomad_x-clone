import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { Input, Title, Error, Form } from "../styles/auth-components";
import styled from "styled-components";
import Button from "../components/Button";

export default function Signin() {
  const navigate = useNavigate();
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
        {error !== "" ? <Error>{error}</Error> : null}
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100vh;

  h1 {
    font-size: var(--main-Size);
    font-weight: 700;
    margin-bottom: 20px;
    width: 300px;
  }

  section {
    display: flex;
    flex-direction: column;
  }
`;
