import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { GithubIcon } from "./icon-components";

export default function GithubButton({ children }: any) {
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
      <GithubIcon />
      {children}
    </Button>
  );
}
