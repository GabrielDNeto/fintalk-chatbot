import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

const MainLayout = () => {
  return (
    <section className="w-full h-screen relative bg-[#182a4c]">
      <Header />
      <main className="w-full h-full pt-[4.75rem]">
        <Outlet />
      </main>
    </section>
  );
};

export default MainLayout;
