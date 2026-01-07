"use client";

import * as React from "react";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/container";
import {
  FadeIn,
  Floating,
  TextReveal,
  Counter,
} from "@/components/animations";
import { SITE_CONFIG } from "@/lib/constants";

const highlights = [
  "AI Chatbot Integration",
  "E-Commerce Solutions",
  "Next.js Migration",
  "Landing Pages",
  "Web Applications",
];

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <Container size="lg" className="relative z-10 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <FadeIn delay={0.1}>
              <Badge
                variant="secondary"
                className="mb-6 px-4 py-2 text-sm font-medium inline-flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                Available for new projects
              </Badge>
            </FadeIn>

            {/* Main Heading */}
            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                <span className="block">I Build</span>
                <span className="block gradient-text">High-Performance</span>
                <span className="block">Web Experiences</span>
              </h1>
            </FadeIn>

            {/* Description */}
            <FadeIn delay={0.3}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
                Next.js developer specializing in creating fast, scalable, and
                conversion-optimized web applications that help businesses grow
                and succeed online.
              </p>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                <Button size="xl" className="w-full sm:w-auto group" asChild>
                  <Link
                    href={SITE_CONFIG.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book a Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  size="xl"
                  variant="outline"
                  className="w-full sm:w-auto group"
                  asChild
                >
                  <Link
                    href={SITE_CONFIG.chatbotDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch AI Chatbot Demo
                  </Link>
                </Button>
              </div>
            </FadeIn>

            {/* Trust Indicators */}
            <FadeIn delay={0.5}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Free consultation
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  No obligation quote
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  24h response time
                </span>
              </div>
            </FadeIn>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative hidden lg:block">
            <FadeIn delay={0.3} direction="left">
              <div className="relative">
                {/* Main Card */}
                <div className="relative bg-card border rounded-2xl shadow-2xl p-8 backdrop-blur-sm">
                  {/* Code Header */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-4 text-sm text-muted-foreground font-mono">
                      portfolio.tsx
                    </span>
                  </div>

                  {/* Code Content */}
                  <div className="font-mono text-sm space-y-2">
                    <div>
                      <span className="text-purple-500">const</span>{" "}
                      <span className="text-blue-500">developer</span>{" "}
                      <span className="text-foreground">=</span>{" "}
                      <span className="text-foreground">{"{"}</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-green-500">name</span>
                      <span className="text-foreground">:</span>{" "}
                      <span className="text-orange-500">&quot;James Gabbitus&quot;</span>
                      <span className="text-foreground">,</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-green-500">role</span>
                      <span className="text-foreground">:</span>{" "}
                      <span className="text-orange-500">&quot;Next.js Developer&quot;</span>
                      <span className="text-foreground">,</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-green-500">skills</span>
                      <span className="text-foreground">: [</span>
                    </div>
                    <div className="pl-8">
                      <span className="text-orange-500">&quot;Next.js&quot;</span>
                      <span className="text-foreground">,</span>{" "}
                      <span className="text-orange-500">&quot;React&quot;</span>
                      <span className="text-foreground">,</span>
                    </div>
                    <div className="pl-8">
                      <span className="text-orange-500">&quot;TypeScript&quot;</span>
                      <span className="text-foreground">,</span>{" "}
                      <span className="text-orange-500">&quot;AI Integration&quot;</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-foreground">],</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-green-500">available</span>
                      <span className="text-foreground">:</span>{" "}
                      <span className="text-blue-500">true</span>
                    </div>
                    <div>
                      <span className="text-foreground">{"};"}</span>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-blue-600 rounded-2xl opacity-20 blur-xl" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-20 blur-xl" />
                </div>

                {/* Floating Elements */}
                <Floating duration={4} distance={15}>
                  <div className="absolute -top-8 -left-8 bg-card border rounded-xl p-4 shadow-lg">
                    <Code2 className="w-8 h-8 text-primary" />
                  </div>
                </Floating>

                <Floating duration={3} distance={12}>
                  <div className="absolute -bottom-6 -right-6 bg-card border rounded-xl p-4 shadow-lg">
                    <Zap className="w-8 h-8 text-yellow-500" />
                  </div>
                </Floating>

                {/* Services Tags */}
                <div className="absolute -right-4 top-1/3 flex flex-col gap-2">
                  {highlights.slice(0, 3).map((highlight, index) => (
                    <motion.div
                      key={highlight}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <Badge
                        variant="secondary"
                        className="whitespace-nowrap shadow-md"
                      >
                        {highlight}
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
          <div className="mt-16 md:mt-24 pt-12 border-t">
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
                    <Counter
                      to={stat.value}
                      suffix={stat.suffix}
                      duration={2 + index * 0.3}
                    />
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}