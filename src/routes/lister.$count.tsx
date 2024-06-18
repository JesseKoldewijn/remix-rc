import { LoaderFunctionArgs } from "@remix-run/node";

import PageBanner from "~/components/layout/page-banner";
import { generateListerData } from "~/data/lister-data";

export async function loader({ params }: LoaderFunctionArgs) {
  const count = Number(params.count);
  const listerData = generateListerData(isNaN(count) ? undefined : count);

  return {
    props: {
      listerData,
    },
  };
}

const ListerCount = () => {
  return (
    <div className="mx-auto flex h-full w-screen max-w-7xl flex-col">
      <div className="flex flex-col md:mx-auto md:px-6">
        <PageBanner
          title={
            <>
              <span>Welcome to the</span>
              <span className="font-semibold text-cyan-400">Count</span>
              <span>Lister</span>
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

export default ListerCount;
