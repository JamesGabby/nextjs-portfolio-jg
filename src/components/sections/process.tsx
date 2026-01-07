"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  FileText,
  Code,
  Rocket,
  ArrowRight,
  CheckCircle2,
  Calendar,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/layout/section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { PROCESS_STEPS, SITE_CONFIG } from "@/lib/constants";
import type { ProcessStep } from "@/types";

const iconMap: Record<string, React.ElementType> = {
  Phone: Phone,
  FileText: FileText,
  Code: Code,
  Rocket: Rocket,
};

const stepDetails: Record<
  string,
  { duration: string; deliverables: string[] }
> = {
  discovery: {
    duration: "30-60 minutes",
    deliverables: [
      "Understanding of your goals",
      "Technical requirements review",
      "Timeline estimation",
      "Budget discussion",
    ],
  },
  proposal: {
    duration: "2-3 days",
    deliverables: [
      "Detailed project scope",
      "Fixed-price quote",
      "Milestone breakdown",
      "Contract & terms",
    ],
  },
  development: {
    duration: "2-8 weeks",
    deliverables: [
      "Weekly progress updates",
      "Staging environment access",
      "Regular feedback sessions",
      "Documentation",
    ],
  },
  launch: {
    duration: "Ongoing",
    deliverables: [
      "Production deployment",
      "Performance monitoring",
      "Bug fixes & updates",
      "Priority support",
    ],
  },
};

interface ProcessCardProps {
  step: ProcessStep;
  index: number;
  isLast: boolean;
}

function ProcessCard({ step, index, isLast }: ProcessCardProps) {
  const Icon = iconMap[step.icon] ?? Code;
  const details = stepDetails[step.id];

  return (
    <div className="relative">
      {/* Connection Line */}
      {!isLast && (
        <div className="hidden lg:block absolute top-16 left-[calc(100%+1rem)] w-8 h-0.5">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-primary/0"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            style={{ transformOrigin: "left" }}
          />
        </div>
      )}

      <Card className="h-full relative overflow-hidden group border-2 hover:border-primary/50 transition-all duration-300">
        {/* Step Number */}
        <div className="absolute top-4 right-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-lg font-bold text-primary">{step.step}</span>
          </div>
        </div>

        {/* Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <CardContent className="p-6 relative">
          {/* Icon */}
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-7 h-7 text-primary" />
          </div>

          {/* Content */}
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {step.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4">
            {step.description}
          </p>

          {/* Duration Badge */}
          {details && (
            <Badge variant="secondary" className="mb-4">
              {details.duration}
            </Badge>
          )}

          {/* Deliverables */}
          {details && (
            <ul className="space-y-2">
              {details.deliverables.map((deliverable, i) => (
                <motion.li
                  key={deliverable}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 text-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span className="text-muted-foreground">{deliverable}</span>
                </motion.li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export function ProcessSection() {
  return (
    <Section id="process">
      {/* Section Header */}
      <div className="text-center mb-12 md:mb-16">
        <FadeIn>
          <Badge variant="secondary" className="mb-4">
            How It Works
          </Badge>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            A Simple, <span className="gradient-text">Transparent Process</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From initial conversation to launch and beyond, here&apos;s exactly what
            to expect when working with me.
          </p>
        </FadeIn>
      </div>

      {/* Process Steps */}
      <StaggerContainer
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        staggerDelay={0.1}
      >
        {PROCESS_STEPS.map((step, index) => (
          <StaggerItem key={step.id}>
            <ProcessCard
              step={step}
              index={index}
              isLast={index === PROCESS_STEPS.length - 1}
            />
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Mobile Timeline View */}
      <div className="lg:hidden mt-8">
        <div className="relative pl-8 border-l-2 border-primary/20">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              viewport={{ once: true }}
              className="relative pb-8 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[calc(1rem+5px)] top-0 w-3 h-3 rounded-full bg-primary" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <FadeIn delay={0.5}>
        <div className="mt-16 md:mt-24">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-blue-600/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />

            <div className="relative text-center max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground mb-8">
                The first step is a free, no-obligation discovery call. Let&apos;s
                discuss your project and see if we&apos;re a good fit.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="w-full sm:w-auto group" asChild>
                  <Link
                    href={SITE_CONFIG.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Your Free Call
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                  asChild
                >
                  <Link
                    href={SITE_CONFIG.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Me
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Free 30-min consultation
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  No obligation quote
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Response within 24 hours
                </span>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}