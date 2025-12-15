import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";

export default function AppLayout() {
  return (
    <>
      <Header />
      <Nav />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
