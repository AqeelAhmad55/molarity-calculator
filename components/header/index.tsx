// components/Header/index.tsx

"use client";

import { useState } from "react";
import { Logo } from "./logo";
import { Navigation } from "./navigation";
import { MobileMenuButton } from "./mobile-menu-button";

export function Header() {
  const [open, setOpen] = useState(false);

  const handleItemClick = () => {
    setOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="shrink-0">
              <Logo />
            </div>
          </div>

          <Navigation />
          <MobileMenuButton open={open} onClick={() => setOpen((v) => !v)} />
        </div>

        <Navigation mobile open={open} onItemClick={handleItemClick} />
      </div>
    </nav>
  );
}
