"use client";
import React from "react";
import { Menu } from "@headlessui/react";

interface MenuItemProps {
  label: string;
  position: string;
}

function MenuItem({ label, position }: MenuItemProps) {
  return (
    <Menu.Item
      as="div"
      className={`px-4  py-3 w-full text-${position} hover:bg-neutral-100 font-semibold`}
    >
      {label}
    </Menu.Item>
  );
}

export default MenuItem;
