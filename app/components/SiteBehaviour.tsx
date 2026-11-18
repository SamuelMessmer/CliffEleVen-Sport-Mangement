"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initSite } from "../lib/site";

/** Wires up menu, scroll reveal and the contact form after each navigation. */
export default function SiteBehaviour() {
  const pathname = usePathname();

  useEffect(() => initSite(document), [pathname]);

  return null;
}
