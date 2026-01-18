"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  ShoppingCart,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/animations";
import { SITE_CONFIG } from "@/lib/constants";

const showcaseItems = [
  {
    id: "ai-chatbot",
    title: "AI Chatbot Integration",
    subtitle: "Transform Customer Support",
    description:
      "Deploy intelligent AI chatbots that understand your business, answer customer questions 24/7, and capture leads automatically. Reduce support costs by up to 70% while improving customer satisfaction.",
    icon: Bot,
    features: [
      "Custom-trained on your data",
      "Natural conversations",
      "Lead capture & qualification",
      "Seamless handoff to humans",
    ],
    stats: [
      { value: "90%", label: "Faster Response" },
      { value: "24/7", label: "Availability" },
      { value: "70%", label: "Cost Reduction" },
    ],
    cta: {
      primary: { label: "Watch Demo", href: SITE_CONFIG.chatbotDemo },
      secondary: { label: "Learn More", href: "#contact" },
    },
    gradient: "from-blue-500 to-cyan-500",
    image: "/images/chatbot-preview.png",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Solutions",
    subtitle: "Sell More Online",
    description:
      "Build lightning-fast online stores that convert visitors into customers. From product pages to checkout, every element is optimized for maximum sales.",
    icon: ShoppingCart,
    features: [
      "Headless architecture",
      "One-click checkout",
      "Inventory management",
      "Analytics dashboard",
    ],
    stats: [
      { value: "2x", label: "Conversion Rate" },
      { value: "<1s", label: "Load Time" },
      { value: "99.9%", label: "Uptime" },
    ],
    cta: {
      primary: { label: "Get Quote", href: "#contact" },
      secondary: { label: "View Examples", href: "#" },
    },
    gradient: "from-green-500 to-emerald-500",
    image: "/images/ecommerce-preview.png",
  },
  {
    id: "nextjs-migration",
    title: "Next.js Migration",
    subtitle: "Future-Proof Your Website",
    description:
      "Migrate your existing website to Next.js for dramatically improved performance, SEO rankings, and developer experience. Zero downtime, maximum results.",
    icon: Layers,
    features: [
      "Zero-downtime migration",
      "SEO preservation",
      "Performance boost",
      "Modern architecture",
    ],
    stats: [
      { value: "3x", label: "Faster Loading" },
      { value: "+40%", label: "SEO Improvement" },
      { value: "50%", label: "Less Code" },
    ],
    cta: {
      primary: { label: "Free Audit", href: SITE_CONFIG.calendly },
      secondary: { label: "Learn More", href: "#contact" },
    },
    gradient: "from-purple-500 to-pink-500",
    image: "/images/migration-preview.png",
  },
];

interface ShowcaseCardProps {
  item: (typeof showcaseItems)[0];
  index: number;
}

function ShowcaseCard({ item, index }: ShowcaseCardProps) {
  const isEven = index % 2 === 0;
  const Icon = item.icon;

  return (
    <div
      className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
        isEven ? "" : "lg:flex-row-reverse"
      }`}
    >
      {/* Content */}
      <FadeIn direction={isEven ? "right" : "left"} delay={0.2}>
        <div className={`${isEven ? "lg:pr-8" : "lg:pl-8 lg:order-2"}`}>
          {/* Icon & Badge */}
          <div className="flex items-center gap-4 mb-6">
            <div
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white`}
            >
              <Icon className="w-7 h-7" />
            </div>
            <Badge variant="secondary" className="text-sm">
              {item.subtitle}
            </Badge>
          </div>

          {/* Title & Description */}
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            {item.title}
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            {item.description}
          </p>

          {/* Features */}
          <ul className="grid grid-cols-2 gap-3 mb-8">
            {item.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.gradient}`}
                />
                {feature}
              </li>
            ))}
          </ul>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-muted/50 rounded-xl">
            {item.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className={`text-2xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="group" asChild>
              <Link
                href={item.cta.primary.href}
                target={
                  item.cta.primary.href.startsWith("http") ? "_blank" : undefined
                }
                rel={
                  item.cta.primary.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {item.cta.primary.label}
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={item.cta.secondary.href}>
                {item.cta.secondary.label}
              </Link>
            </Button>
          </div>
        </div>
      </FadeIn>

      {/* Visual */}
      <FadeIn
        direction={isEven ? "left" : "right"}
        delay={0.4}
        className={isEven ? "" : "lg:order-1"}
      >
        <div className="relative">
          {/* Main Visual Card */}
          <div className="relative bg-card border rounded-2xl shadow-2xl overflow-hidden aspect-[4/3]">
            {/* Placeholder for actual screenshots */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-10`}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <Icon className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
                <p className="text-muted-foreground">
                  {item.title} Preview
                </p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div
              className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-20 blur-2xl`}
            />
            <div
              className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-20 blur-2xl`}
            />
          </div>

          {/* Floating Badge */}
          <motion.div
            className="absolute -bottom-4 -right-4 bg-card border rounded-xl p-4 shadow-lg"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex items-center gap-2">
              <div
                className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.gradient}`}
              />
              <span className="text-sm font-medium">Live Demo Available</span>
            </div>
          </motion.div>
        </div>
      </FadeIn>
    </div>
  );
}

export function ServicesShowcaseSection() {
  return (
    <Section id="services-showcase" className="overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-16 md:mb-24">
        <FadeIn>
          <Badge variant="secondary" className="mb-4">
            What I Do
          </Badge>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Specialized Solutions for{" "}
            <span className="gradient-text">Modern Businesses</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each service is crafted to deliver measurable results. From initial
            consultation to launch and beyond, I&apos;m committed to your success.
          </p>
        </FadeIn>
      </div>

      {/* Showcase Items */}
      <div className="space-y-24 md:space-y-32">
        {showcaseItems.map((item, index) => (
          <ShowcaseCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </Section>
  );
}