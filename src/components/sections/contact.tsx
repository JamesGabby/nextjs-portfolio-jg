"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Mail,
  Phone,
  MessageCircle,
  Calendar,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  Loader2,
  ArrowRight,
  MapPin,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/layout/section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { SITE_CONFIG, PROJECT_TYPES, BUDGET_RANGES } from "@/lib/constants";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";
import { cn } from "@/lib/utils";

const contactMethods = [
  {
    id: "email",
    icon: Mail,
    label: "Email",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    description: "Send me an email anytime",
  },
  {
    id: "phone",
    icon: Phone,
    label: "Phone",
    value: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phone}`,
    description: "Call during business hours",
  },
  {
    id: "whatsapp",
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with me",
    href: SITE_CONFIG.whatsapp,
    description: "Quick responses guaranteed",
  },
  {
    id: "calendly",
    icon: Calendar,
    label: "Schedule Call",
    value: "Book a meeting",
    href: SITE_CONFIG.calendly,
    description: "Free 30-min consultation",
  },
];

const socialLinks = [
  {
    id: "github",
    icon: Github,
    label: "GitHub",
    href: SITE_CONFIG.github,
  },
  {
    id: "linkedin",
    icon: Linkedin,
    label: "LinkedIn",
    href: SITE_CONFIG.linkedin,
  },
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactSection() {
  const [formStatus, setFormStatus] = React.useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      projectType: undefined,
      budget: undefined,
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setFormStatus("submitting");
    setErrorMessage("");

    try {
      // Simulate API call - replace with actual API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setFormStatus("success");
      reset();

      // Reset success state after 5 seconds
      setTimeout(() => {
        setFormStatus("idle");
      }, 5000);
    } catch (error) {
      setFormStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );

      // Reset error state after 5 seconds
      setTimeout(() => {
        setFormStatus("idle");
        setErrorMessage("");
      }, 5000);
    }
  };

  return (
    <Section id="contact" background="muted">
      {/* Section Header */}
      <div className="text-center mb-12 md:mb-16">
        <FadeIn>
          <Badge variant="secondary" className="mb-4">
            <Mail className="w-3 h-3 mr-1" />
            Get In Touch
          </Badge>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Amazing Together</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your project? Fill out the form below or reach out
            directly. I typically respond within 24 hours.
          </p>
        </FadeIn>
      </div>

      <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
        {/* Contact Information */}
        <div className="lg:col-span-2">
          <FadeIn delay={0.2}>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">
                Contact Information
              </h3>
              <p className="text-muted-foreground mb-6">
                Choose your preferred method of communication. I&apos;m always happy
                to discuss your project.
              </p>
            </div>
          </FadeIn>

          {/* Contact Methods */}
          <StaggerContainer className="space-y-4 mb-8" staggerDelay={0.1}>
            {contactMethods.map((method) => (
              <StaggerItem key={method.id}>
                <Link
                  href={method.href}
                  target={
                    method.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    method.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-center gap-4 p-4 bg-card border-2 rounded-xl hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <method.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold group-hover:text-primary transition-colors">
                      {method.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {method.description}
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Social Links */}
          <FadeIn delay={0.5}>
            <div className="mb-8">
              <h4 className="font-semibold mb-4">Connect with me</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-card border-2 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Availability Info */}
          <FadeIn delay={0.6}>
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-blue-600/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="font-semibold">Currently Available</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                I&apos;m taking on new projects. Let&apos;s discuss how I can help bring
                your vision to life.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  United Kingdom
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  GMT/BST
                </span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3">
          <FadeIn delay={0.3}>
            <Card className="border-2">
              <CardContent className="p-6 md:p-8">
                {formStatus === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. I&apos;ll get back to you within 24
                      hours.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setFormStatus("idle")}
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium leading-none"
                        >
                          Name <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="name"
                          placeholder="John Smith"
                          {...register("name")}
                          error={errors.name?.message}
                          disabled={formStatus === "submitting"}
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none"
                        >
                          Email <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          {...register("email")}
                          error={errors.email?.message}
                          disabled={formStatus === "submitting"}
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div className="space-y-2">
                      <label
                        htmlFor="company"
                        className="text-sm font-medium leading-none"
                      >
                        Company{" "}
                        <span className="text-muted-foreground">
                          (optional)
                        </span>
                      </label>
                      <Input
                        id="company"
                        placeholder="Your company name"
                        {...register("company")}
                        error={errors.company?.message}
                        disabled={formStatus === "submitting"}
                      />
                    </div>

                    {/* Project Type & Budget */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="projectType"
                          className="text-sm font-medium leading-none"
                        >
                          Project Type{" "}
                          <span className="text-destructive">*</span>
                        </label>
                        <Select
                          id="projectType"
                          options={PROJECT_TYPES}
                          placeholder="Select project type"
                          {...register("projectType")}
                          error={errors.projectType?.message}
                          disabled={formStatus === "submitting"}
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="budget"
                          className="text-sm font-medium leading-none"
                        >
                          Budget Range{" "}
                          <span className="text-destructive">*</span>
                        </label>
                        <Select
                          id="budget"
                          options={BUDGET_RANGES}
                          placeholder="Select budget range"
                          {...register("budget")}
                          error={errors.budget?.message}
                          disabled={formStatus === "submitting"}
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none"
                      >
                        Project Details{" "}
                        <span className="text-destructive">*</span>
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about your project, goals, and any specific requirements..."
                        className="min-h-[150px]"
                        {...register("message")}
                        error={errors.message?.message}
                        disabled={formStatus === "submitting"}
                      />
                    </div>

                    {/* Error Message */}
                    {formStatus === "error" && errorMessage && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm"
                      >
                        {errorMessage}
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={formStatus === "submitting"}
                    >
                      {formStatus === "submitting" ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>

                    {/* Privacy Note */}
                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to be contacted
                      regarding your inquiry. Your information will never be
                      shared with third parties.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}