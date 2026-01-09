import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg" | "xl" | "full";
}

const containerSizes = {
  default: "max-w-6xl",
  sm: "max-w-4xl",
  lg: "max-w-7xl",
  xl: "max-w-[1400px]",
  full: "max-w-full",
};

export function Container({
  children,
  className,
  size = "default",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8 overflow-hidden",
        containerSizes[size],
        className
      )}
    >
      {children}
    </div>
  );
}