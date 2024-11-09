"use client";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SkeletonButtonLoading from "./skeleton-button-loading";

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between border-b border-solid px-8 py-4">
      <div className="flex items-center gap-10">
        <Image src="/logo.svg" alt="finace-ai" width={173} height={39} />
        <Link
          href="/"
          className={
            pathname === "/"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Dashboard
        </Link>
        <Link
          href="/transactions"
          className={
            pathname === "/transactions"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Transações
        </Link>
        <Link
          href="/subscription"
          className={
            pathname === "/subscription"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Assinatura
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center border-solid border-muted-foreground">
        <ClerkLoaded>
          <UserButton showName />
        </ClerkLoaded>

        <ClerkLoading>
          <SkeletonButtonLoading />
        </ClerkLoading>
      </div>
    </nav>
  );
};

export default NavBar;
