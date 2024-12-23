"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

interface NavItemProps {
  title: string;
  params: string;
}
const NavbarItem = ({ title, params }: NavItemProps) => {
  const searchparams = useSearchParams();
  const genre = searchparams.get("genre");

  return (
    <div
      className={`hover:text-amber-600 font-semibold ${
        genre === params
          ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
          : ""
      }`}
    >
      <Link href={`/?genre=${params}`}>{title}</Link>
    </div>
  );
};
export default NavbarItem;
