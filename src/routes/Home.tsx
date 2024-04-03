import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import Button from "../components/Button";

export default function Home() {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const logOut = () => {
    auth.signOut();
    // 로그아웃 후 바로 이동하기 위해 navigate 함수 사용
    navigate("/login");
  };

  return (
    <div>
      <Button onClick={logOut}>나는 칠드런</Button>
    </div>
  );
}
