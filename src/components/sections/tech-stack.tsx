"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Layers,
  Database,
  Paintbrush,
  Cloud,
  ExternalLink,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/layout/section";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  HoverScale,
} from "@/components/animations";
import { TECHNOLOGIES, SITE_CONFIG } from "@/lib/constants";
import type { Technology } from "@/types";

const iconMap: Record<string, React.ElementType> = {
  Layers: Layers,
  Database: Database,
  Paintbrush: Paintbrush,
  Cloud: Cloud,
};

const gradientMap: Record<string, string> = {
  nextjs: "from-black to-gray-700 dark:from-white dark:to-gray-300",
  supabase: "from-emerald-500 to-green-600",
  tailwind: "from-cyan-500 to-blue-500",
  vercel: "from-black to-gray-600 dark:from-white dark:to-gray-400",
};

const bgGradientMap: Record<string, string> = {
  nextjs: "from-black/10 to-gray-700/10 dark:from-white/10 dark:to-gray-300/10",
  supabase: "from-emerald-500/10 to-green-600/10",
  tailwind: "from-cyan-500/10 to-blue-500/10",
  vercel: "from-black/10 to-gray-600/10 dark:from-white/10 dark:to-gray-400/10",
};

interface TechCardProps {
  tech: Technology;
  index: number;
}

function TechCard({ tech }: TechCardProps) {
  const Icon = iconMap[tech.icon] ?? Layers;
  const gradient = gradientMap[tech.id] ?? "from-primary to-blue-600";
  const bgGradient = bgGradientMap[tech.id] ?? "from-primary/10 to-blue-600/10";

  return (
    <HoverScale scale={1.02}>
      <Card className="h-full relative overflow-hidden group border-2 hover:border-primary/50 transition-all duration-300">
        {/* Background Gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        <CardHeader className="relative pb-4">
          <div className="flex items-start justify-between">
            {/* Icon */}
            <div
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white dark:text-black group-hover:scale-110 transition-transform duration-300`}
            >
              <Icon className="w-7 h-7" />
            </div>

            {/* External Link */}
            <Link
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-muted transition-colors opacity-0 group-hover:opacity-100"
              aria-label={`Visit ${tech.name} website`}
            >
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>

          <CardTitle className="text-xl mt-4 group-hover:text-primary transition-colors">
            {tech.name}
          </CardTitle>
        </CardHeader>

        <CardContent className="relative">
          <p className="text-muted-foreground text-sm mb-6">
            {tech.description}
          </p>

          {/* Benefits List */}
          <ul className="space-y-2">
            {tech.benefits.map((benefit, benefitIndex) => (
              <motion.li
                key={benefit}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * benefitIndex }}
                viewport={{ once: true }}
                className="flex items-start gap-2 text-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </HoverScale>
  );
}

export function TechStackSection() {
  return (
    <Section id="tech-stack" background="muted">
      {/* Section Header */}
      <div className="text-center mb-12 md:mb-16">
        <FadeIn>
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="w-3 h-3 mr-1" />
            Tech Stack
          </Badge>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Built With the{" "}
            <span className="gradient-text">Best Technologies</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I use a carefully selected tech stack that balances performance,
            developer experience, and long-term maintainability.
          </p>
        </FadeIn>
      </div>

      {/* Tech Cards Grid */}
      <StaggerContainer
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        staggerDelay={0.1}
      >
        {TECHNOLOGIES.map((tech, index) => (
          <StaggerItem key={tech.id}>
            <TechCard tech={tech} index={index} />
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Why This Stack Section */}
      <FadeIn delay={0.4}>
        <div className="mt-16 md:mt-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <Badge variant="secondary" className="mb-4">
                Why This Stack?
              </Badge>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                The Perfect Balance of Power and Simplicity
              </h3>
              <p className="text-muted-foreground mb-6">
                This technology stack isn&apos;t just trendy—it&apos;s battle-tested by
                companies of all sizes. Each tool is chosen for its ability to
                deliver exceptional results while remaining maintainable and
                cost-effective.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Lightning Fast Performance",
                    description:
                      "Next.js + Vercel edge network means your site loads instantly, anywhere in the world.",
                  },
                  {
                    title: "Scalable Infrastructure",
                    description:
                      "Supabase provides enterprise-grade database capabilities that grow with your business.",
                  },
                  {
                    title: "Beautiful by Default",
                    description:
                      "Tailwind CSS enables rapid development of stunning, consistent interfaces.",
                  },
                  {
                    title: "Zero DevOps Headaches",
                    description:
                      "Vercel handles deployment, scaling, and infrastructure automatically.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-primary">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="bg-card border-2 rounded-2xl p-8 shadow-xl">
                {/* Stack Visualization */}
                <div className="space-y-4">
                  {[
                    {
                      name: "Next.js",
                      role: "Frontend Framework",
                      color: "bg-black dark:bg-white",
                      textColor: "text-white dark:text-black",
                    },
                    {
                      name: "Tailwind CSS",
                      role: "Styling",
                      color: "bg-cyan-500",
                      textColor: "text-white",
                    },
                    {
                      name: "Supabase",
                      role: "Backend & Database",
                      color: "bg-emerald-500",
                      textColor: "text-white",
                    },
                    {
                      name: "Vercel",
                      role: "Hosting & Deployment",
                      color: "bg-black dark:bg-white",
                      textColor: "text-white dark:text-black",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors"
                    >
                      <div
                        className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center ${item.textColor} font-bold text-lg`}
                      >
                        {item.name[0]}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold">{item.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {item.role}
                        </div>
                      </div>
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    </motion.div>
                  ))}
                </div>

                {/* Connection Lines */}
                <div className="absolute left-12 top-20 bottom-20 w-0.5 bg-gradient-to-b from-primary via-cyan-500 to-emerald-500 opacity-20" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl opacity-20 blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl opacity-20 blur-xl" />
            </div>
          </div>
        </div>
      </FadeIn>

      {/* CTA */}
      <FadeIn delay={0.5}>
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            Want to learn more about how this stack can benefit your project?
          </p>
          <Button size="lg" className="group" asChild>
            <Link
              href={SITE_CONFIG.calendly}
              target="_blank"
              rel="noopener noreferrer"
            >
              Let&apos;s Discuss Your Project
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </FadeIn>
    </Section>
  );
}