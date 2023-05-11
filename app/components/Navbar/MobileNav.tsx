"use client";
import { GiHamburgerMenu } from "react-icons/all";
import { Transition } from "@headlessui/react";
import { Disclosure } from "@headlessui/react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "@/app/components/Avatar";
import React, { Fragment, useState } from "react";

function MobileNav() {
  return (
    <div className="block md:hidden">
      <Disclosure as="nav">
        <Disclosure.Button className=" inline-felx focus:ring-2 focus:ring-inset focus:ring-white  items-center peer justify-center rounded-md p-2 font-semibold text-sm ">
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
        </Disclosure.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Disclosure.Panel
            as="div"
            className="absolute w-full h-screen flex flex-col gap-6 bg-amber-50 top-20 p-4 right-0 items-center"
          >
            <div className="cursor-pointer font-semibold text-sm hover:text-gray-600">
              Services
            </div>
            <div className="cursor-pointer font-semibold text-sm hover:text-gray-600">
              About us
            </div>
            <div className="cursor-pointer font-semibold text-sm hover:text-gray-600">
              Contact
            </div>
          </Disclosure.Panel>
        </Transition>
      </Disclosure>
    </div>
  );
}

export default MobileNav;
