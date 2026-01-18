"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  ArrowRight,
  Play,
  CheckCircle2,
  Sparkles,
  Code2,
  Zap,
  Bot,
  ShoppingCart,
  Rocket,
  CloudLightning
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/container";
import { FadeIn, Floating, Counter } from "@/components/animations";
import { SITE_CONFIG } from "@/lib/constants";

const highlights = [
  { label: "AI Chatbot Integration", icon: Bot },
  { label: "E-Commerce Solutions", icon: ShoppingCart },
  { label: "Next.js Migration", icon: Code2 },
  { label: "Landing Pages", icon: Rocket },
  { label: "Web Applications", icon: Zap },
  { label: "Portfolio Websites", icon: CloudLightning },
];

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-blue-600/5" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='currentColor'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
          }}
        />

        {/* Floating Orbs - Responsive sizes */}
        <div className="absolute top-1/4 left-0 sm:left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-0 sm:right-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500 hidden sm:block" />
      </div>

      <Container size="lg" className="relative z-10 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <FadeIn delay={0.1}>
              <Badge
                variant="secondary"
                className="mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium inline-flex items-center gap-1.5 sm:gap-2"
              >
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                Available for new projects
              </Badge>
            </FadeIn>

            {/* Main Heading */}
            <FadeIn delay={0.2}>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6">
                <span className="block">I Build</span>
                <span className="block gradient-text py-1">High-Performance</span>
                <span className="block">Web Experiences</span>
              </h1>
            </FadeIn>

            {/* Description */}
            <FadeIn delay={0.3}>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8 px-2 sm:px-0">
                Next.js developer specializing in creating fast, scalable, and
                conversion-optimized web applications that help businesses grow
                and succeed online.
              </p>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-10 px-4 sm:px-0">
                <Button
                  size="lg"
                  className="w-full sm:w-auto group text-sm sm:text-base h-11 sm:h-12 px-4 sm:px-6"
                  asChild
                >
                  <Link
                    href={SITE_CONFIG.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    <span className="hidden xs:inline">Book a Free</span> Consultation
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto group text-sm sm:text-base h-11 sm:h-12 px-4 sm:px-6"
                  asChild
                >
                  <Link
                    href={SITE_CONFIG.chatbotDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    <span className="hidden xs:inline">Watch</span> AI Chatbot Demo
                  </Link>
                </Button>
              </div>
            </FadeIn>

            {/* Trust Indicators */}
            <FadeIn delay={0.5}>
              <div className="flex flex-col xs:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 xs:gap-x-4 sm:gap-x-6 gap-y-2 text-xs sm:text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500" />
                  Free consultation
                </span>
                <span className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500" />
                  No obligation quote
                </span>
                <span className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500" />
                  24h response time
                </span>
              </div>
            </FadeIn>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative order-1 lg:order-2">
            {/* Mobile/Tablet: Simplified Visual */}
            <FadeIn delay={0.3} className="lg:hidden">
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-2">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <Badge
                      variant="secondary"
                      className="px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 shadow-md"
                    >
                      <highlight.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                      <span className="hidden xs:inline">{highlight.label}</span>
                      <span className="xs:hidden">
                        {highlight.label.split(" ")[0]}
                      </span>
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </FadeIn>

            {/* Desktop: Full Code Card Visual */}
            <FadeIn delay={0.3} direction="left" className="hidden lg:block">
              <div className="relative">
                {/* Main Card */}
                <div className="relative bg-card border rounded-2xl shadow-2xl p-6 xl:p-8 backdrop-blur-sm">
                  {/* Code Header */}
                  <div className="flex items-center gap-2 mb-4 xl:mb-6">
                    <div className="w-2.5 h-2.5 xl:w-3 xl:h-3 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 xl:w-3 xl:h-3 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 xl:w-3 xl:h-3 rounded-full bg-green-500" />
                    <span className="ml-3 xl:ml-4 text-xs xl:text-sm text-muted-foreground font-mono">
                      portfolio.tsx
                    </span>
                  </div>

                  {/* Code Content */}
                  <div className="font-mono text-xs xl:text-sm space-y-1.5 xl:space-y-2">
                    <div>
                      <span className="text-purple-500">const</span>{" "}
                      <span className="text-blue-500">developer</span>{" "}
                      <span className="text-foreground">=</span>{" "}
                      <span className="text-foreground">{"{"}</span>
                    </div>
                    <div className="pl-3 xl:pl-4">
                      <span className="text-green-500">name</span>
                      <span className="text-foreground">:</span>{" "}
                      <span className="text-orange-500">
                        &quot;James Gabbitus&quot;
                      </span>
                      <span className="text-foreground">,</span>
                    </div>
                    <div className="pl-3 xl:pl-4">
                      <span className="text-green-500">role</span>
                      <span className="text-foreground">:</span>{" "}
                      <span className="text-orange-500">
                        &quot;Next.js Developer&quot;
                      </span>
                      <span className="text-foreground">,</span>
                    </div>
                    <div className="pl-3 xl:pl-4">
                      <span className="text-green-500">skills</span>
                      <span className="text-foreground">: [</span>
                    </div>
                    <div className="pl-6 xl:pl-8">
                      <span className="text-orange-500">&quot;Next.js&quot;</span>
                      <span className="text-foreground">,</span>{" "}
                      <span className="text-orange-500">&quot;React&quot;</span>
                      <span className="text-foreground">,</span>
                    </div>
                    <div className="pl-6 xl:pl-8">
                      <span className="text-orange-500">&quot;TypeScript&quot;</span>
                      <span className="text-foreground">,</span>{" "}
                      <span className="text-orange-500">&quot;AI Integration&quot;</span>
                    </div>
                    <div className="pl-3 xl:pl-4">
                      <span className="text-foreground">],</span>
                    </div>
                    <div className="pl-3 xl:pl-4">
                      <span className="text-green-500">available</span>
                      <span className="text-foreground">:</span>{" "}
                      <span className="text-blue-500">true</span>
                    </div>
                    <div>
                      <span className="text-foreground">{"};"}</span>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-3 -right-3 xl:-top-4 xl:-right-4 w-16 h-16 xl:w-24 xl:h-24 bg-gradient-to-br from-primary to-blue-600 rounded-2xl opacity-20 blur-xl" />
                  <div className="absolute -bottom-3 -left-3 xl:-bottom-4 xl:-left-4 w-20 h-20 xl:w-32 xl:h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-20 blur-xl" />
                </div>

                {/* Floating Elements */}
                <Floating duration={4} distance={15}>
                  <div className="absolute -top-6 -left-6 xl:-top-8 xl:-left-8 bg-card border rounded-xl p-3 xl:p-4 shadow-lg">
                    <Code2 className="w-6 h-6 xl:w-8 xl:h-8 text-primary" />
                  </div>
                </Floating>

                <Floating duration={3} distance={12}>
                  <div className="absolute -bottom-4 -right-4 xl:-bottom-6 xl:-right-6 bg-card border rounded-xl p-3 xl:p-4 shadow-lg">
                    <Zap className="w-6 h-6 xl:w-8 xl:h-8 text-yellow-500" />
                  </div>
                </Floating>

                {/* Services Tags */}
                <div className="absolute -right-2 xl:-right-4 top-1/4 flex flex-col gap-1.5 xl:gap-2">
                  {highlights.slice(0, 3).map((highlight, index) => (
                    <motion.div
                      key={highlight.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <Badge
                        variant="secondary"
                        className="whitespace-nowrap shadow-md text-xs xl:text-sm py-1 xl:py-1.5"
                      >
                        {highlight.label}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Stats Section */}
        <FadeIn delay={0.6}>
          <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 pt-8 sm:pt-10 md:pt-12 border-t">
            <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2">
                    <Counter
                      to={stat.value}
                      suffix={stat.suffix}
                      duration={2 + index * 0.3}
                    />
                  </div>
                  <div className="text-[10px] xs:text-xs sm:text-sm md:text-base text-muted-foreground leading-tight">
                    {/* Show abbreviated labels on very small screens */}
                    <span className="hidden xs:inline">{stat.label}</span>
                    <span className="xs:hidden">
                      {stat.label.replace("Projects ", "").replace("Client ", "")}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* Scroll Indicator - Hidden on very small screens */}
      <motion.div
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 hidden xs:block"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 sm:w-1.5 sm:h-3 bg-primary rounded-full mt-1.5 sm:mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}