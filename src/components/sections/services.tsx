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
      <Card className="h-full relative overflow-hidden group border-2 hover:border-primary/50 transition-colors duration-300 flex flex-col">
        {/* Popular Badge for AI Chatbot */}
        {isAIChatbot && (
          <div className="absolute top-4 right-4 z-10">
            <Badge className="bg-gradient-to-r from-primary to-blue-600 text-white border-0">
              Popular
            </Badge>
          </div>
        )}

        {/* Background Gradient on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <CardHeader className="relative pb-4">
          {/* Icon */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
          </div>

          <CardTitle className="text-lg sm:text-xl md:text-2xl group-hover:text-primary transition-colors pr-16">
            {service.title}
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">
            {service.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="relative flex-1">
          <ul className="space-y-2 sm:space-y-3">
            {service.features.map((feature, featureIndex) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * featureIndex }}
                viewport={{ once: true }}
                className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground"
              >
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </CardContent>

        <CardFooter className="relative pt-4 mt-auto">
          {/* Fixed button layout */}
          <div className={`
            w-full grid gap-3
            ${isAIChatbot ? 'grid-cols-1 xs:grid-cols-2' : 'grid-cols-1'}
          `}>
            <Button className="w-full group/btn" asChild>
              <Link href="#contact">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </Button>
            
            {isAIChatbot && (
              <Button variant="outline" className="w-full" asChild>
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
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <FadeIn>
          <Badge variant="secondary" className="mb-4">
            Services
          </Badge>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Solutions That Drive{" "}
            <span className="gradient-text">Real Results</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            From AI-powered chatbots to high-converting e-commerce stores, I
            deliver custom web solutions tailored to your business goals.
          </p>
        </FadeIn>
      </div>

      <StaggerContainer
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
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
        <div className="mt-8 sm:mt-12 md:mt-16 text-center px-4">
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
            Not sure which service you need? Let&apos;s discuss your project.
          </p>
          <div className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button size="lg" className="w-full xs:w-auto" asChild>
              <Link
                href={SITE_CONFIG.calendly}
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule a Free Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full xs:w-auto" asChild>
              <Link href="#contact">Send a Message</Link>
            </Button>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}