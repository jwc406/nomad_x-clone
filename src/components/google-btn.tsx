import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { GoogleIcon } from "./icon-components";

export default function GoogleButton({ children }: any) {
  const navigate = useNavigate();
  const onClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Button onClick={onClick} sort="social" size="XL">
      <GoogleIcon />
      {children}
    </Button>
  );
}
