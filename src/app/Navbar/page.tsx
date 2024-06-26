"use client";
import React from "react";
import { FloatingNav } from "../../components/ui/floating-navbar"
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
// import Daynight from "../Daynight/page"
// import { Meteors } from "@/components/ui/meteors";

export default function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      <DummyContent />
    </div>
  );
}
const DummyContent = () => {
  return (
    <div className="grid grid-cols-1 h-2 w-full    dark:bg-black relative  dark:border-white/[0.2] rounded-md">

      <div className="inset-0 absolute bg-grid-black/[0.1] dark:bg-grid-white/[0.2]" />
      
      
    </div>
  );
};
