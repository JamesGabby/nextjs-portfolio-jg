"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
  onViewDetails: (project: Project) => void;
  variant?: "default" | "featured";
}

export function ProjectCard({
  project,
  index,
  onViewDetails,
  variant = "default",
}: ProjectCardProps) {
  const isFeatured = variant === "featured";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        "group",
        isFeatured && "md:col-span-2 lg:col-span-2"
      )}
    >
      <Card
        className={cn(
          "overflow-hidden border-2 h-full transition-all duration-500",
          "hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10",
          "cursor-pointer"
        )}
        onClick={() => onViewDetails(project)}
      >
        <div className={cn(
          "grid gap-0",
          isFeatured ? "md:grid-cols-2" : "grid-cols-1"
        )}>
          {/* Image Section */}
          <div className={cn(
            "relative overflow-hidden",
            isFeatured ? "aspect-[4/3] md:aspect-auto md:min-h-[400px]" : "aspect-video"
          )}>
            {/* Project Image */}
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes={isFeatured 
                ? "(max-width: 768px) 100vw, 50vw" 
                : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              }
              priority={index < 2}
            />
            
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-60" />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
              <Button size="sm" variant="secondary" className="gap-2">
                <Eye className="w-4 h-4" />
                View Details
              </Button>
            </div>

            {/* Featured badge */}
            {project.featured && (
              <div className="absolute top-4 left-4">
                <Badge className="bg-gradient-to-r from-primary to-blue-600 text-white border-0">
                  Featured
                </Badge>
              </div>
            )}
          </div>

          {/* Content Section */}
          <CardContent className={cn(
            "p-6 flex flex-col",
            isFeatured && "md:p-8 justify-center"
          )}>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {project.tags.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{project.tags.length - 3}
                </Badge>
              )}
            </div>

            {/* Title */}
            <h3 className={cn(
              "font-bold mb-2 group-hover:text-primary transition-colors",
              isFeatured ? "text-2xl md:text-3xl" : "text-xl"
            )}>
              {project.title}
            </h3>

            {/* Description */}
            <p className={cn(
              "text-muted-foreground mb-4 line-clamp-2",
              isFeatured ? "text-base md:text-lg line-clamp-3" : "text-sm"
            )}>
              {project.description}
            </p>

            {/* Results Preview */}
            {project.results && project.results.length > 0 && (
              <div className={cn(
                "grid gap-3 mb-6",
                isFeatured ? "grid-cols-2 md:grid-cols-4" : "grid-cols-2"
              )}>
                {project.results.slice(0, isFeatured ? 4 : 2).map((result) => (
                  <div key={result.metric} className="text-center p-2 bg-muted/50 rounded-lg">
                    <div className="text-lg font-bold text-primary">
                      {result.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {result.metric}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-md">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 mt-auto">
              <Button
                size="sm"
                className="flex-1 group/btn"
                onClick={(e) => {
                  e.stopPropagation();
                  onViewDetails(project);
                }}
              >
                View Project
                <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Button>
              
              <div className="flex gap-2">
                {project.liveUrl && (
                  <Button
                    size="icon"
                    variant="outline"
                    className="shrink-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.liveUrl, "_blank");
                    }}
                    aria-label="View live site"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    size="icon"
                    variant="outline"
                    className="shrink-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.githubUrl, "_blank");
                    }}
                    aria-label="View source code"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  );
}