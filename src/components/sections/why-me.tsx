"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Zap,
  Search,
  TrendingUp,
  Award,
  MessageCircle,
  Target,
  ArrowRight,
  CheckCircle2,
  Star,
  Users,
  Clock,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/layout/section";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  Counter,
  HoverScale,
} from "@/components/animations";
import { VALUE_PROPOSITIONS, SITE_CONFIG } from "@/lib/constants";
import type { ValueProposition } from "@/types";

const iconMap: Record<string, React.ElementType> = {
  Zap: Zap,
  Search: Search,
  TrendingUp: TrendingUp,
  Award: Award,
  MessageCircle: MessageCircle,
  Target: Target,
};

const benefits = [
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Projects delivered on time, every time. No excuses.",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Clean, maintainable code that stands the test of time.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Direct communication with me throughout the project.",
  },
  {
    icon: Star,
    title: "Results Focused",
    description: "Every decision optimized for your business goals.",
  },
];

interface ValueCardProps {
  value: ValueProposition;
  index: number;
}

function ValueCard({ value, index }: ValueCardProps) {
  const Icon = iconMap[value.icon] ?? Target;

  return (
    <HoverScale>
      <Card className="h-full relative overflow-hidden group border-2 hover:border-primary/50 transition-all duration-300">
        {/* Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <CardContent className="p-6 relative">
          {/* Stat Badge */}
          {value.stat && (
            <div className="absolute top-4 right-4">
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">
                  {value.stat}
                </div>
                <div className="text-xs text-muted-foreground">
                  {value.statLabel}
                </div>
              </div>
            </div>
          )}

          {/* Icon */}
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 text-primary" />
          </div>

          {/* Content */}
          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
            {value.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {value.description}
          </p>
        </CardContent>
      </Card>
    </HoverScale>
  );
}

export function WhyMeSection() {
  return (
    <Section id="why-me" background="gradient">
      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 md:mb-24">
        {/* Left Content */}
        <div>
          <FadeIn>
            <Badge variant="secondary" className="mb-4">
              Why Choose Me
            </Badge>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Your Success Is My{" "}
              <span className="gradient-text">Top Priority</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg text-muted-foreground mb-8">
              Working with me means partnering with someone who genuinely cares
              about your business outcomes. I don&apos;t just write code—I solve
              problems and create opportunities for growth.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border hover:border-primary/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" asChild>
                <Link
                  href={SITE_CONFIG.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Let&apos;s Talk About Your Project
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#contact">Send a Message</Link>
              </Button>
            </div>
          </FadeIn>
        </div>

        {/* Right Content - Visual */}
        <FadeIn direction="left" delay={0.3}>
          <div className="relative">
            {/* Main Card */}
            <div className="relative bg-card border-2 rounded-2xl p-8 shadow-xl">
              {/* Quote */}
              <div className="mb-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>
                <blockquote className="text-lg italic text-foreground mb-4">
                  &ldquo;James transformed our outdated website into a modern,
                  high-performing platform. Our conversion rate increased by 150%
                  within the first month. Absolutely brilliant work!&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold">
                    SM
                  </div>
                  <div>
                    <div className="font-semibold">Sarah Mitchell</div>
                    <div className="text-sm text-muted-foreground">
                      CEO, TechStart UK
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    <Counter to={150} suffix="%" />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Conversion Boost
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    <Counter to={3} suffix="x" />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Faster Loading
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    <Counter to={100} suffix="%" />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    SEO Score
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-blue-600 rounded-2xl opacity-20 blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-20 blur-xl" />

            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-6 right-8 bg-card border rounded-xl p-3 shadow-lg"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium">Verified Review</span>
              </div>
            </motion.div>
          </div>
        </FadeIn>
      </div>

      {/* Value Propositions Grid */}
      <FadeIn delay={0.2}>
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            What Sets Me Apart
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Combining technical expertise with a genuine focus on business
            results.
          </p>
        </div>
      </FadeIn>

      <StaggerContainer
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        staggerDelay={0.1}
      >
        {VALUE_PROPOSITIONS.map((value, index) => (
          <StaggerItem key={value.id}>
            <ValueCard value={value} index={index} />
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Next.js Benefits Section */}
      <FadeIn delay={0.4}>
        <div className="mt-16 md:mt-24 p-8 md:p-12 bg-card border-2 rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-600/5" />

          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Why Next.js
              </Badge>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                The Framework That Powers the Best Websites
              </h3>
              <p className="text-muted-foreground mb-6">
                Next.js is used by the world&apos;s leading companies including
                Netflix, TikTok, Nike, and Notion. It&apos;s not just a trend—it&apos;s
                the gold standard for modern web development.
              </p>
              <ul className="space-y-3">
                {[
                  "50% better Core Web Vitals than average sites",
                  "Up to 10x faster page loads with static generation",
                  "Built-in SEO optimization for higher rankings",
                  "Scales effortlessly from startup to enterprise",
                ].map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-3 text-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Netflix", logo: "N" },
                { name: "TikTok", logo: "T" },
                { name: "Nike", logo: "N" },
                { name: "Notion", logo: "N" },
                { name: "Hulu", logo: "H" },
                { name: "Twitch", logo: "T" },
              ].map((company) => (
                <div
                  key={company.name}
                  className="bg-muted/50 rounded-xl p-6 flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center mx-auto mb-2 text-xl font-bold">
                      {company.logo}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {company.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}