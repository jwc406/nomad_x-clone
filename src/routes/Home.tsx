import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export default function Home() {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const logOut = () => {
    auth.signOut();
    // 로그아웃 후 바로 이동하기 위해 navigate 함수 사용
    navigate("/login");
  };
  return (
    <div>
      <button onClick={logOut}>logout</button>
    </div>
  );
}
