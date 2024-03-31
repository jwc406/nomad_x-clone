import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <h1>header</h1>
      {/* childrens */}
      <Outlet />
    </>
  );
}
