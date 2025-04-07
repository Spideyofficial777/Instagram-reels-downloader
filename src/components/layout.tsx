"use client";

import React from "react";
import Link from "next/link";

import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";

import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <header className="h-fit w-full">
      <nav
        className={cn(
          "z-50",
          "flex h-[3.5rem] px-4",
          "w-full items-center border-b bg-accent/20"
        )}
      >
        <div className="hidden select-none text-xl font-extrabold uppercase md:block">
          Downloader
        </div>
        <MobileNav className="md:hidden" />
        <div className="ml-auto flex items-center gap-4">
          <div className="hidden items-center gap-4 text-lg sm:gap-8 sm:pr-8 md:flex">
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="h-8 w-full bg-background/50 text-center text-secondary-foreground">
      <div className="flex items-center justify-between border-t border-input px-4 py-2 w-full">
        <div className="text-sm font-semibold">
         copyrights © 2025{" "}
          <Link
            href="https://t.me/spideyofficial777"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:underline"
            style={{ color: "#FF0000" }}
          >
            SPIDEY OFFICIAL
          </Link>{" "}
          <span className="text-[13px] font-medium tracking-wide">
            All Rights Reserved
          </span>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <Link href="/terms-of-service" className="hover:underline">
            Terms of Service
          </Link>
          <span aria-hidden="true" className="mx-2 select-none">
            |
          </span>
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
