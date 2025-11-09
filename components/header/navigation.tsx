"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navItems = [
  { href: "/", label: "Molarity Calculator" },
  { href: "/dilution-calculator", label: "Dilution Calculator" },
  { href: "/grams-to-moles", label: "Grams to Moles" },
  { href: "/molar-mass-calculator", label: "Molar Mass Calculator" },
  { href: "/moles-to-grams", label: "Moles to Grams" },
];

interface NavigationProps {
  mobile?: boolean;
  open?: boolean;
  onItemClick?: () => void;
}

export function Navigation({
  mobile = false,
  open,
  onItemClick,
}: NavigationProps) {
  const pathname = usePathname();

  const containerClass = mobile
    ? clsx(
        "transition-all bg-white border-t border-gray-200 shadow-md md:hidden",
        open ? "block animate-slideDown" : "hidden"
      )
    : "hidden md:block";

  const linkBase = clsx(
    "font-medium text-sm text-gray-700 rounded-md transition-all duration-200 relative"
  );

  const linkActive = clsx(
    "text-blue-600 bg-blue-50 after:content-[''] after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-5 after:h-0.5 after:bg-blue-600 after:rounded-sm"
  );

  const mobileLinkBase =
    "block text-gray-500 font-medium text-sm px-4 py-3 rounded-md transition-all duration-200";
  const mobileLinkActive = "bg-blue-50 text-blue-600";

  const content = (
    <div
      className={
        mobile ? "px-2 pt-2 pb-3 space-y-1 sm:px-3" : "ml-10 flex gap-3"
      }
    >
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onItemClick}
            className={
              mobile
                ? clsx(
                    mobileLinkBase,
                    isActive && mobileLinkActive,
                    "hover:bg-gray-50 hover:text-gray-700"
                  )
                : clsx(
                    linkBase,
                    "px-3 py-2 hover:bg-gray-50 hover:text-blue-600",
                    isActive && linkActive
                  )
            }
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );

  return mobile ? (
    <div id="mobile-menu" className={containerClass}>
      {content}
    </div>
  ) : (
    <div className={containerClass}>{content}</div>
  );
}
