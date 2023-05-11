"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Logo() {
  const router = useRouter();
  return (
    <Image
      alt="Logo"
      className=" cursor-pointer "
      height="60"
      width="60"
      src="/images/baama_logo.png"
    />
  );
}

export default Logo;
