'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({href,children}: { href: string; children: React.ReactNode }) => {
  const path = usePathname();
  return <Link href={href} className={path.startsWith
    (href) ? "bg-zinc-400" : ""
  }>{children}</Link>;
};

export default NavLink;
