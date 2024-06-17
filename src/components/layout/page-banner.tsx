import React from "react";

interface PageBannerProps {
  title: string | React.ReactNode;
  subtitle?: string;
  cta?: {
    first?: {
      text: string;
      href: string;
    };
    second?: {
      text: string;
      href: string;
    };
  };
}

const PageBanner = ({ title, subtitle, cta }: PageBannerProps) => {
  return (
    <div className="mx-auto flex h-screen max-h-[80svh] flex-col items-center justify-center gap-2 py-6 md:gap-6">
      <h1 className="flex items-center gap-1 text-xl md:gap-2 md:text-4xl">
        {title}
      </h1>
      {subtitle && <p className="text-lg">{subtitle}</p>}

      {cta && (
        <div className="mt-4 flex gap-4">
          {cta.first && (
            <a
              href={cta.first.href}
              className="rounded-md bg-amber-400 px-4 py-2 font-medium text-background hover:bg-green-400"
            >
              {cta.first.text}
            </a>
          )}
          {cta.second && (
            <a
              href={cta.second.href}
              className="hover: rounded-md bg-green-400 px-4 py-2 font-medium text-background hover:bg-neutral-300"
            >
              {cta.second.text}
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default PageBanner;
