"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import {
  Menu,
  Calendar,
  MessageCircle,
  Github,
  Linkedin,
  Mail,
  Phone,
  X,
  ChevronRight,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Container } from "./container";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";

// Icons for navigation items
const navIcons: Record<string, React.ElementType> = {
  "#services": Sparkles,
  "#projects": Calendar,
  "#why-me": ChevronRight,
  "#tech-stack": ChevronRight,
  "#process": ChevronRight,
  "#faq": ChevronRight,
  "#contact": Mail,
};

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<string>("");
  const { scrollY } = useScroll();

  // Track scroll position for header styling
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Track active section based on scroll position
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(`#${section}`);
            return;
          }
        }
      }

      // If at top of page, no active section
      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
      setIsMobileMenuOpen(false);
    }
  };

  const socialLinks = [
    { icon: Github, href: SITE_CONFIG.github, label: "GitHub" },
    { icon: Linkedin, href: SITE_CONFIG.linkedin, label: "LinkedIn" },
    { icon: MessageCircle, href: SITE_CONFIG.whatsapp, label: "WhatsApp" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b shadow-sm supports-[backdrop-filter]:bg-background/60"
          : "bg-transparent"
      )}
    >
      {/* Progress Bar */}
      <ScrollProgress />

      <Container size="lg">
        <nav className="flex items-center justify-between h-16 md:h-18 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 flex items-center gap-2.5 group"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="relative">
              {/* Logo Mark */}
              <motion.div
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg shadow-primary/25"
                whileHover={{ scale: 1.05, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                JG
              </motion.div>
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-blue-600 blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
            </div>
            {/* Logo Text */}
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-sm sm:text-base leading-tight">
                James Gabbitus
              </span>
              <span className="text-[10px] sm:text-xs text-muted-foreground leading-tight">
                Next.js Developer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center bg-muted/50 rounded-full p-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      "relative px-3 xl:px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200",
                      isActive
                        ? "text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {/* Active Background */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-primary rounded-full shadow-md"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle />

            <Separator orientation="vertical" className="h-6 mx-1" />

            {/* WhatsApp - Icon only on smaller desktop */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden xl:hidden lg:flex"
              asChild
            >
              <Link
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </Link>
            </Button>

            {/* WhatsApp - With text on larger screens */}
            <Button variant="ghost" size="sm" className="hidden xl:flex" asChild>
              <Link
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Link>
            </Button>

            {/* Primary CTA */}
            <Button size="sm" className="group shadow-md shadow-primary/20" asChild>
              <Link
                href={SITE_CONFIG.calendly}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="w-4 h-4 mr-2" />
                <span className="hidden xl:inline">Book a Call</span>
                <span className="xl:hidden">Book</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-1 lg:hidden">
            <ThemeToggle />

            {/* Mobile CTA - Visible on tablets */}
            <Button
              size="sm"
              className="hidden sm:flex mr-1"
              asChild
            >
              <Link
                href={SITE_CONFIG.calendly}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">Book</span>
              </Link>
            </Button>

            {/* Mobile Menu Trigger */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                  {/* Notification dot for availability */}
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-green-500 rounded-full border-2 border-background" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-full sm:w-[400px] p-0 flex flex-col"
              >
                {/* Mobile Menu Header */}
                <div className="p-6 pb-4 border-b bg-muted/30">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        JG
                      </div>
                      <div>
                        <h2 className="font-bold text-lg">James Gabbitus</h2>
                        <p className="text-sm text-muted-foreground">
                          Next.js Developer
                        </p>
                      </div>
                    </div>
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon" className="shrink-0">
                        <X className="h-5 w-5" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </SheetClose>
                  </div>

                  {/* Availability Badge */}
                  <Badge
                    variant="secondary"
                    className="bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 animate-pulse" />
                    Available for new projects
                  </Badge>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 overflow-y-auto py-4 px-4">
                  <nav className="space-y-1">
                    {NAV_ITEMS.map((item, index) => {
                      const isActive = activeSection === item.href;
                      const Icon = navIcons[item.href] || ChevronRight;

                      return (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <SheetClose asChild>
                            <Link
                              href={item.href}
                              onClick={(e) => handleNavClick(e, item.href)}
                              className={cn(
                                "flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium transition-all duration-200",
                                isActive
                                  ? "bg-primary text-primary-foreground shadow-md"
                                  : "text-foreground hover:bg-muted"
                              )}
                            >
                              <Icon
                                className={cn(
                                  "w-5 h-5",
                                  isActive
                                    ? "text-primary-foreground"
                                    : "text-muted-foreground"
                                )}
                              />
                              <span>{item.label}</span>
                              {isActive && (
                                <ChevronRight className="w-4 h-4 ml-auto" />
                              )}
                            </Link>
                          </SheetClose>
                        </motion.div>
                      );
                    })}
                  </nav>
                </div>

                {/* Mobile Menu Footer */}
                <div className="p-4 border-t bg-muted/30 space-y-4">
                  {/* Primary CTAs */}
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="w-full" asChild>
                      <Link
                        href={SITE_CONFIG.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                      </Link>
                    </Button>
                    <Button className="w-full shadow-md" asChild>
                      <Link
                        href={SITE_CONFIG.calendly}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Book a Call
                      </Link>
                    </Button>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-2">
                    <Link
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
                    >
                      <Mail className="w-4 h-4" />
                      {SITE_CONFIG.email}
                    </Link>
                    <Link
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
                    >
                      <Phone className="w-4 h-4" />
                      {SITE_CONFIG.phone}
                    </Link>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center justify-center gap-2 pt-2">
                    {socialLinks.map((social) => (
                      <Link
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                        aria-label={social.label}
                      >
                        <social.icon className="w-4 h-4" />
                      </Link>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </Container>
    </motion.header>
  );
}

// Scroll Progress Indicator Component
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = React.useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(latest);
  });

  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left"
      style={{ scaleX: progress }}
    />
  );
}