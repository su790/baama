"use client";
import React, { Fragment, useCallback, useState } from "react";
import Avatar from "@/app/components/Avatar";
import MenuItem from "@/app/components/Navbar/MenuItem";
import { Menu, Transition } from "@headlessui/react";

function UserMenu() {
  return (
    <Menu as="div" className="relative">
      <div>
        <Menu.Button
          className="
            p-1
          border-[1px]
          border-neutral-200
          flex
          flex-row
          items-center
          rounded-full
          cursor-pointer
          hover:shadow-md
          transition"
        >
          <Avatar />
        </Menu.Button>
      </div>
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
            w-[30vw]
            sm:w-[15vw]
            bg-white
            right-0
            top-12
            text-sm"
        >
          <div className="flex flex-col cursor-pointer">
            <MenuItem label="Login" />
            <MenuItem label="Sign Up" />
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default UserMenu;
