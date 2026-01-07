"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Bot,
  ShoppingCart,
  RefreshCw,
  Rocket,
  Layout,
  ArrowRight,
  CheckCircle2,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/layout/section";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  HoverScale,
} from "@/components/animations";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";
import type { Service } from "@/types";

const iconMap: Record<string, React.ElementType> = {
  Bot: Bot,
  ShoppingCart: ShoppingCart,
  RefreshCw: RefreshCw,
  Rocket: Rocket,
  Layout: Layout,
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Layout;
  const isAIChatbot = service.id === "ai-chatbot";

  return (
    <HoverScale scale={1.02}>
      <Card className="h-full relative overflow-hidden group border-2 hover:border-primary/50 transition-colors duration-300">
        {/* Popular Badge for AI Chatbot */}
        {isAIChatbot && (
          <div className="absolute top-4 right-4">
            <Badge variant="default" className="bg-gradient-to-r from-primary to-blue-600">
              Popular
            </Badge>
          </div>
        )}

        {/* Background Gradient on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <CardHeader className="relative">
          {/* Icon */}
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-7 h-7 text-primary" />
          </div>

          <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors">
            {service.title}
          </CardTitle>
          <CardDescription className="text-base">
            {service.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="relative">
          <ul className="space-y-3">
            {service.features.map((feature, featureIndex) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * featureIndex }}
                viewport={{ once: true }}
                className="flex items-start gap-3 text-sm text-muted-foreground"
              >
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </CardContent>

        <CardFooter className="relative pt-4">
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <Button className="flex-1 group/btn" asChild>
              <Link href="#contact">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </Button>
            {isAIChatbot && (
              <Button variant="outline" className="flex-1" asChild>
                <Link
                  href={SITE_CONFIG.chatbotDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Watch Demo
                </Link>
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </HoverScale>
  );
}

export function ServicesSection() {
  return (
    <Section id="services" background="muted">
      <div className="text-center mb-12 md:mb-16">
        <FadeIn>
          <Badge variant="secondary" className="mb-4">
            Services
          </Badge>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Solutions That Drive{" "}
            <span className="gradient-text">Real Results</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From AI-powered chatbots to high-converting e-commerce stores, I
            deliver custom web solutions tailored to your business goals.
          </p>
        </FadeIn>
      </div>

      <StaggerContainer
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        staggerDelay={0.1}
      >
        {SERVICES.map((service, index) => (
          <StaggerItem key={service.id}>
            <ServiceCard service={service} index={index} />
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Bottom CTA */}
      <FadeIn delay={0.5}>
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Not sure which service you need? Let&apos;s discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link
                href={SITE_CONFIG.calendly}
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule a Free Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">Send a Message</Link>
            </Button>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}