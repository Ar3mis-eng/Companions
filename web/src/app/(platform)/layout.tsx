import type { ReactNode } from "react";
import { AppHeader } from "@/components/platform/app-header";
import { BottomNavigation } from "@/components/platform/bottom-navigation";
import { PremiumScroll } from "@/components/platform/premium-scroll";

interface PlatformLayoutProps {
  children: ReactNode;
}

export default function PlatformLayout({
  children,
}: PlatformLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <AppHeader />

      <PremiumScroll>{children}</PremiumScroll>

      <BottomNavigation />
    </div>
  );
}