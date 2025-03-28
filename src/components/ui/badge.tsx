import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-ios-blue text-white hover:bg-ios-blue/80",
        secondary: "bg-ios-gray-light text-ios-gray-dark hover:bg-ios-gray-light/80",
        destructive: "bg-ios-red text-white hover:bg-ios-red/80",
        outline: "text-foreground border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
        success: "bg-ios-green-light/20 text-ios-green border border-ios-green/30",
        warning: "bg-amber-100 text-amber-700 border border-amber-200",
        info: "bg-ios-blue-light/20 text-ios-blue border border-ios-blue/30",
      },
      size: {
        default: "h-6 text-xs px-2.5 py-0.5",
        sm: "h-5 text-[10px] px-2 py-0.5",
        lg: "h-7 text-sm px-3 py-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size, className }))} {...props} />
  );
}

export { Badge, badgeVariants }; 