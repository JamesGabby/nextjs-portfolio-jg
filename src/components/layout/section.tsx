import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  containerSize?: "default" | "sm" | "lg" | "xl" | "full";
  withContainer?: boolean;
  background?: "default" | "muted" | "gradient" | "none";
}

const backgroundStyles = {
  default: "bg-background",
  muted: "bg-muted/50",
  gradient:
    "bg-gradient-to-b from-background via-muted/30 to-background",
  none: "",
};

export function Section({
  children,
  className,
  containerClassName,
  id,
  containerSize = "default",
  withContainer = true,
  background = "default",
}: SectionProps) {
  const content = withContainer ? (
    <Container size={containerSize} className={containerClassName}>
      {children}
    </Container>
  ) : (
    children
  );

  return (
    <section
      id={id}
      className={cn(
        "relative py-16 md:py-24 lg:py-32",
        backgroundStyles[background],
        className
      )}
    >
      {content}
    </section>
  );
}