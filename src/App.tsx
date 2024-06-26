import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoadingScreen from "./components/loading-screen";
import ProtectedRoute from "./components/protected-route";
import { auth } from "./firebase";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Profile from "./routes/Profile";
import { GlobalStyles } from "./styles/globalStyle";
import Layout from "./components/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  const [isLoading, setLoading] = useState(true);
  const init = async () => {
    await auth.authStateReady();
    // wait for firebase 인증 준비
    setLoading(false);
    // setTimeout(() => setLoading(false), 2000);
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <GlobalStyles />
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
    </>
  );
}

export default App;
