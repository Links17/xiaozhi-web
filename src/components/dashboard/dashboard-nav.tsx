"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { 
  HomeIcon, 
  ListTodoIcon,
  CalendarIcon, 
  SettingsIcon 
} from "lucide-react";

const navItems = [
  {
    name: "Home",
    href: "/dashboard",
    icon: HomeIcon,
  },
  {
    name: "Tasks",
    href: "/dashboard/tasks",
    icon: ListTodoIcon,
  },
  {
    name: "Calendar",
    href: "/dashboard/calendar",
    icon: CalendarIcon,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: SettingsIcon,
  },
];

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 bg-white/80 backdrop-blur-md border-t border-ios-gray-light/50 py-1">
      <div className="container flex items-center justify-around">
        {navItems.map((item) => (
          <Button
            key={item.href}
            variant="ghost"
            size="sm"
            asChild
            className={cn(
              "flex flex-col items-center py-2 h-auto",
              pathname === item.href ? "text-ios-blue" : "text-ios-gray hover:text-ios-blue/70"
            )}
          >
            <Link href={item.href}>
              <item.icon className={cn(
                "h-6 w-6 mb-1",
                pathname === item.href ? "text-ios-blue" : "text-ios-gray"
              )} />
              <span className="text-xs">{item.name}</span>
            </Link>
          </Button>
        ))}
      </div>
    </nav>
  );
} 