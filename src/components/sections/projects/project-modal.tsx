"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Github,
  Calendar,
  Quote,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";
import type { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  hasNext?: boolean;
  hasPrevious?: boolean;
}

export function ProjectModal({
  project,
  isOpen,
  onClose,
  onNext,
  onPrevious,
  hasNext,
  hasPrevious,
}: ProjectModalProps) {
  // Close on escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && hasNext && onNext) onNext();
      if (e.key === "ArrowLeft" && hasPrevious && onPrevious) onPrevious();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, onNext, onPrevious, hasNext, hasPrevious]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 overflow-hidden rounded-2xl border-2 bg-card shadow-2xl"
          >
            {/* Navigation arrows */}
            {hasPrevious && onPrevious && (
              <button
                onClick={onPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border flex items-center justify-center hover:bg-background transition-colors"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            {hasNext && onNext && (
              <button
                onClick={onNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border flex items-center justify-center hover:bg-background transition-colors"
                aria-label="Next project"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border flex items-center justify-center hover:bg-background transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="h-full overflow-y-auto">
              <div className="grid lg:grid-cols-2 min-h-full">
                {/* Left - Image/Visual */}
                <div className="relative bg-gradient-to-br from-primary/20 via-primary/10 to-blue-600/20 min-h-[300px] lg:min-h-full flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-3xl bg-background/80 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl font-bold text-primary">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {project.category.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                    </p>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-8 left-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                  <div className="absolute bottom-8 right-8 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl" />
                </div>

                {/* Right - Details */}
                <div className="p-6 md:p-8 lg:p-10 overflow-y-auto">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="secondary">
                        {project.category.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                      </Badge>
                      {project.featured && (
                        <Badge className="bg-gradient-to-r from-primary to-blue-600 text-white border-0">
                          Featured
                        </Badge>
                      )}
                      <span className="text-sm text-muted-foreground flex items-center gap-1 ml-auto">
                        <Calendar className="w-4 h-4" />
                        {new Date(project.completedAt).toLocaleDateString("en-GB", {
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold mb-3">
                      {project.title}
                    </h2>

                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {project.longDescription || project.description}
                    </p>
                  </div>

                  <Separator className="my-6" />

                  {/* Results */}
                  {project.results && project.results.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        Key Results
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        {project.results.map((result) => (
                          <div
                            key={result.metric}
                            className="p-4 bg-muted/50 rounded-xl text-center"
                          >
                            <div className="text-2xl font-bold text-primary mb-1">
                              {result.value}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {result.description || result.metric}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="px-3 py-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="px-3 py-1"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  {project.testimonial && (
                    <div className="mb-6 p-6 bg-gradient-to-br from-primary/10 via-primary/5 to-blue-600/10 rounded-xl relative">
                      <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
                      <blockquote className="text-foreground italic mb-4">
                        &ldquo;{project.testimonial.quote}&rdquo;
                      </blockquote>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                          {project.testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold text-sm">
                            {project.testimonial.author}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {project.testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <Separator className="my-6" />

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    {project.liveUrl && (
                      <Button className="flex-1" asChild>
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live Site
                        </Link>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button variant="outline" className="flex-1" asChild>
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Source
                        </Link>
                      </Button>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="mt-8 p-6 bg-muted/50 rounded-xl text-center">
                    <h4 className="font-semibold mb-2">
                      Want something similar?
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Let&apos;s discuss how I can help build your next project.
                    </p>
                    <Button className="group" asChild>
                      <Link
                        href={SITE_CONFIG.calendly}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Schedule a Call
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}