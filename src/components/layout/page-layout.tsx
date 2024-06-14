import Header from "./header";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <Header />
      <main className="min-h-[90svh]">{children}</main>
      <main className="min-h-[90svh]">{children}</main>
    </>
  );
};

export default PageLayout;
