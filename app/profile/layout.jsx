import Sidebar from "@/components/organism/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <aside>
        <Sidebar />
      </aside>
      <main>{children}</main>
    </>
  );
};

export default Layout;
