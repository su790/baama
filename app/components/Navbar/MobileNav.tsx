"use client";
import { GiHamburgerMenu } from "react-icons/all";
import { Menu, Transition } from "@headlessui/react";
import { Disclosure } from "@headlessui/react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "@/app/components/Avatar";
import React, { Fragment, useState } from "react";
import MenuItem from "@/app/components/Navbar/MenuItem";

function MobileNav() {
  return (
    <div className="block md:hidden">
      <Menu as="nav">
        <Menu.Button className=" inline-felx focus:ring-2 focus:ring-inset focus:ring-white  items-center peer justify-center rounded-md p-2 font-semibold text-sm ">
          <div
            className="
  p-1 .5
  rounded-full

            flex
            flex-row
            items-center
            gap-3
            cursor-pointer
            hover:shadow-sm
            transition"
          >
            <AiOutlineMenu />
            <div className="font-semibold text-sm">Menu</div>
          </div>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className="absolute
            rounded-xl
            shadow-md
            w-full
            bg-white
            right-0
            top-20
            text-sm"
          >
            <div className="flex  flex-col items-center cursor-pointer">
              <MenuItem position={"center"} label="Login" />
              <MenuItem position={"center"} label="Sign Up" />
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default MobileNav;
