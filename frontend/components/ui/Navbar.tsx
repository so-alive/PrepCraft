"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b">
      <Link href="/" className="text-xl font-bold">
        NextStep
      </Link>
      <div className="flex items-center gap-6 text-sm">
        <Link href="#features" className="hover:text-primary transition-colors">
          Features
        </Link>
        <Link href="#pricing" className="hover:text-primary transition-colors">
          Pricing
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="ghost">Log In</Button>
        <Button>Sign Up</Button>
      </div>
    </nav>
  );
}