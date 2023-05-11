"use client";
import Container from "@/app/components/Container";
import Logo from "@/app/components/Navbar/Logo";
import UserMenu from "@/app/components/Navbar/UserMenu";
import MobileNav from "@/app/components/Navbar/MobileNav";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div
            className="
              flex
              flex-row
              items-center
              justify-between
              gap-3
              md:gap-0
              "
          >
            <div
              className="
            flex
            items-center
            justify-between
            gap-10
            "
            >
              <Logo />
              <div
                className="
              flex
            items-center
            justify-between
            gap-3
            hidden
            md:flex"
              >
                <div className="cursor-pointer font-semibold  sm text-sm hover:text-gray-600">
                  Services
                </div>
                <div className="cursor-pointer font-semibold  sm text-sm hover:text-gray-600">
                  About us
                </div>
                <div className="cursor-pointer font-semibold text-sm hover:text-gray-600">
                  Contact
                </div>
              </div>
            </div>
            <MobileNav />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
