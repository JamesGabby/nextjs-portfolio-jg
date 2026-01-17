"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, FolderKanban } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/animations";
import { ProjectCard } from "./project-card";
import { ProjectModal } from "./project-modal";
import { ProjectFilters } from "./project-filters";
import { PROJECTS, SITE_CONFIG } from "@/lib/constants";
import type { Project, ProjectCategory } from "@/types";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = React.useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Calculate project counts per category
  const projectCounts = React.useMemo(() => {
    const counts: Record<ProjectCategory, number> = {
      all: PROJECTS.length,
      "ai-chatbot": 0,
      ecommerce: 0,
      "web-app": 0,
      "landing-page": 0,
      migration: 0,
      "ai-saas": 0,
    };

    PROJECTS.forEach((project) => {
      counts[project.category]++;
    });

    return counts;
  }, []);

  // Filter projects
  const filteredProjects = React.useMemo(() => {
    if (activeFilter === "all") return PROJECTS;
    return PROJECTS.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  // Get featured projects
  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const regularProjects = filteredProjects.filter((p) => !p.featured);

  // Handle modal navigation
  const currentIndex = selectedProject
    ? filteredProjects.findIndex((p) => p.id === selectedProject.id)
    : -1;

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const handleNextProject = () => {
    if (currentIndex < filteredProjects.length - 1) {
      setSelectedProject(filteredProjects[currentIndex + 1] ?? null);
    }
  };

  const handlePreviousProject = () => {
    if (currentIndex > 0) {
      setSelectedProject(filteredProjects[currentIndex - 1] ?? null);
    }
  };

  return (
    <Section id="projects" background="muted">
      {/* Section Header */}
      <div className="text-center mb-12 md:mb-16">
        <FadeIn>
          <Badge variant="secondary" className="mb-4">
            <FolderKanban className="w-3 h-3 mr-1" />
            Portfolio
          </Badge>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A selection of projects I&apos;ve worked on, showcasing my expertise in
            building high-performance web applications that deliver real results.
          </p>
        </FadeIn>

        {/* Filters */}
        <FadeIn delay={0.3}>
          <ProjectFilters
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            projectCounts={projectCounts}
          />
        </FadeIn>
      </div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onViewDetails={handleViewDetails}
                  variant="featured"
                />
              ))}
            </div>
          )}

          {/* Regular Projects */}
          {regularProjects.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index + featuredProjects.length}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          )}

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <FolderKanban className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No projects found</h3>
              <p className="text-muted-foreground mb-4">
                No projects match the selected filter.
              </p>
              <Button
                variant="outline"
                onClick={() => setActiveFilter("all")}
              >
                View All Projects
              </Button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* CTA Section */}
      <FadeIn delay={0.4}>
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">
              More projects available upon request
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Have a Project in Mind?
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            I&apos;m always excited to work on new challenges. Let&apos;s discuss how I
            can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="group" asChild>
              <Link
                href={SITE_CONFIG.calendly}
                target="_blank"
                rel="noopener noreferrer"
              >
                Start a Project
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">Send a Message</Link>
            </Button>
          </div>
        </div>
      </FadeIn>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onNext={handleNextProject}
        onPrevious={handlePreviousProject}
        hasNext={currentIndex < filteredProjects.length - 1}
        hasPrevious={currentIndex > 0}
      />
    </Section>
  );
}