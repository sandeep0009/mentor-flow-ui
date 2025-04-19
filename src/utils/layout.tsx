import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="overflow-auto flex-1">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
