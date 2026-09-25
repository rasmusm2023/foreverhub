"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="px-8 pt-8">
      <ul className="flex gap-4">
        <li>
          <Link
            href="/"
            className={pathname === "/" ? "text-white" : "text-sky-400"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/races"
            className={
              pathname.startsWith("/races") ? "text-white" : "text-sky-400"
            }
          >
            Races
          </Link>
        </li>
      </ul>
    </nav>
  );
}
