"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { PROJECT_FILTERS } from "@/lib/constants";
import type { ProjectCategory } from "@/types";

interface ProjectFiltersProps {
  activeFilter: ProjectCategory;
  onFilterChange: (filter: ProjectCategory) => void;
  projectCounts: Record<ProjectCategory, number>;
}

export function ProjectFilters({
  activeFilter,
  onFilterChange,
  projectCounts,
}: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {PROJECT_FILTERS.map((filter) => {
        const count = projectCounts[filter.id];
        const isActive = activeFilter === filter.id;

        return (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={cn(
              "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
              "hover:bg-primary/10",
              isActive
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {/* Active background */}
            {isActive && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-primary rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}

            {/* Label */}
            <span className="relative z-10 flex items-center gap-2">
              {filter.label}
              {count > 0 && (
                <span
                  className={cn(
                    "text-xs px-1.5 py-0.5 rounded-full",
                    isActive
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {count}
                </span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
}