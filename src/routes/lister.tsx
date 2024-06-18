import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { ItemLister } from "~/components/item-lister";
import PageBanner from "~/components/layout/page-banner";
import { generateListerData } from "~/data/lister-data";

export async function loader() {
  const listerData = generateListerData(20);

  return {
    props: {
      listerData,
    },
  };
}

const ListerFull = () => {
  const { props } = useLoaderData<typeof loader>();

  return (
    <div className="relative mx-auto flex h-full max-w-7xl flex-col">
      <div className="flex flex-col md:mx-auto md:px-6">
        <PageBanner
          title={
            <>
              <span>Welcome to the</span>
              <span className="font-semibold text-cyan-400">Full</span>
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
      <div className="flex min-h-screen w-full items-center justify-center">
        {props.listerData ? (
          <ItemLister products={props.listerData} />
        ) : (
          <>No lister data found.</>
        )}
      </div>
    </div>
  );
};

export default ListerFull;
