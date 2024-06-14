import DesktopHeader from "./desktop-header";
import MobileHeader from "./mobile-header";

const Header = () => {
  return (
    <div className="sticky inset-x-0 top-0 w-full">
      <div className="hidden h-full items-center md:flex">
        <DesktopHeader />
      </div>
      <div className="flex h-full items-center px-4 py-4 md:hidden">
        <MobileHeader />
      </div>
    </div>
  );
};

export default Header;
