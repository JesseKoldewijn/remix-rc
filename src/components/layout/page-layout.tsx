import Header from "./header";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <Header />
      <main className="inset-0 min-h-[90svh] w-screen">{children}</main>
    </>
  );
};

export default PageLayout;
