import Sidebar from "@/components/organism/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
