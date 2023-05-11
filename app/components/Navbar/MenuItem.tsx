"use client";
import React from "react";
import { Menu } from "@headlessui/react";

interface MenuItemProps {
  label: string;
}

function MenuItem({ label }: MenuItemProps) {
  return (
    <Menu.Item
      as="div"
      className="px-4 py-3 hover:bg-neutral-100 font-semibold "
    >
      {label}
    </Menu.Item>
  );
}

export default MenuItem;
