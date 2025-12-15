import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";

export default function AppLayout() {
  return (
    <div className="page">
      <Header />
      <Nav />

      <main className="main pageContent">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
