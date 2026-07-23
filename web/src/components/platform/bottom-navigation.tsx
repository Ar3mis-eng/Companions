"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Compass,
  House,
  MessageCircle,
  Plus,
  UserRound,
} from "lucide-react";
import { useEffect, useState } from "react";

const navigationItems = [
  {
    label: "Home",
    href: "/home",
    icon: House,
  },
  {
    label: "Explore",
    href: "/explore",
    icon: Compass,
  },
  {
    label: "Create",
    href: "/create",
    icon: Plus,
    featured: true,
  },
  {
    label: "Messages",
    href: "/chats",
    icon: MessageCircle,
    notification: true,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: UserRound,
  },
];

export function BottomNavigation() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let previousScrollY = window.scrollY;
    let ticking = false;

    function updateNavigation() {
      const currentScrollY = window.scrollY;
      const difference = currentScrollY - previousScrollY;

      if (currentScrollY < 180) {
        setVisible(true);
      } else if (difference > 7 && currentScrollY > 260) {
        setVisible(false);
      } else if (difference < -7) {
        setVisible(true);
      }

      previousScrollY = currentScrollY;
      ticking = false;
    }

    function handleScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateNavigation);
        ticking = true;
      }
    }

    function handlePointerMove(event: PointerEvent) {
      if (event.clientY > window.innerHeight - 120) {
        setVisible(true);
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <nav
      aria-label="Primary application navigation"
      className={[
        "fixed bottom-5 left-1/2 z-50 -translate-x-1/2",
        "transition-all duration-500",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-24 opacity-0",
      ].join(" ")}
    >
      <div className="flex items-end gap-1 rounded-[1.75rem] border border-white/80 bg-white/90 p-2 shadow-2xl shadow-slate-900/15 backdrop-blur-2xl">
        {navigationItems.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href ||
            (item.href !== "/home" && pathname.startsWith(`${item.href}/`));

          if (item.featured) {
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-label={item.label}
                className="group relative -mt-7 mx-1 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-xl shadow-blue-600/30 transition duration-300 hover:-translate-y-1 hover:scale-105 active:scale-90"
              >
                <span className="absolute inset-0 rounded-full bg-white/0 transition group-hover:bg-white/10" />

                <Icon
                  size={27}
                  strokeWidth={2.3}
                  className="relative transition duration-300 group-hover:rotate-90"
                />

                <span className="sr-only">{item.label}</span>
              </Link>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setVisible(true)}
              className={[
                "group relative flex min-w-14 flex-col items-center justify-center rounded-2xl px-3 py-2",
                "transition-all duration-300 active:scale-90",
                active
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-950",
              ].join(" ")}
            >
              <span
                className={[
                  "relative flex h-7 items-center justify-center transition duration-300",
                  active ? "-translate-y-0.5" : "group-hover:-translate-y-0.5",
                ].join(" ")}
              >
                <Icon
                  size={21}
                  strokeWidth={active ? 2.5 : 2}
                  className="transition duration-300"
                />

                {item.notification && (
                  <span className="absolute -right-1 -top-0.5 h-2 w-2 rounded-full border-2 border-white bg-violet-500" />
                )}
              </span>

              <span
                className={[
                  "mt-1 hidden text-[11px] font-semibold sm:block",
                  active ? "opacity-100" : "opacity-70",
                ].join(" ")}
              >
                {item.label}
              </span>

              {active && (
                <span className="absolute -bottom-0.5 h-1 w-5 rounded-full bg-blue-600" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}