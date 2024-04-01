import { auth } from "../firebase";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = auth.currentUser; // 유저가 로그인했는가? (t/f)
  if (user === null) {
    return <Navigate to="/login" />;
  }
  return children;
}
