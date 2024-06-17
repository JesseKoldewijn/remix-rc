import PageBanner from "~/components/layout/page-banner";

const HomePage = () => {
  return (
    <div className="mx-auto flex h-full w-screen max-w-7xl flex-col">
      <div className="flex flex-col md:mx-auto md:px-6">
        <PageBanner
          title={
            <>
              <span>Welcome to</span>
              <span className="font-semibold text-cyan-400">Remix.js</span>
              <span>Jereko</span>
            </>
          }
          subtitle="A starter template for Remix.js"
          cta={{
            first: {
              text: "Get Started",
              href: "/getting-started",
            },
            second: {
              text: "Documentation",
              href: "/docs",
            },
          }}
        />
      </div>
    </div>
  );
};

export default HomePage;
