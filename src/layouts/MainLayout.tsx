import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <div style={{ background: "red", color: "white", padding: "20px" }}>
        NAVBAR
      </div>

      <Outlet />

      <div style={{ background: "blue", color: "white", padding: "20px" }}>
        FOOTER
      </div>
    </>
  );
}