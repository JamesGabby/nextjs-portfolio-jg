"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HelpCircle, ArrowRight, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "@/components/layout/section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { FAQS, SITE_CONFIG } from "@/lib/constants";

export function FAQSection() {
  return (
    <Section id="faq">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left Column - Header & CTA */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <FadeIn>
            <Badge variant="secondary" className="mb-4">
              <HelpCircle className="w-3 h-3 mr-1" />
              FAQ
            </Badge>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg text-muted-foreground mb-8">
              Got questions? I&apos;ve got answers. If you don&apos;t see what you&apos;re
              looking for, feel free to reach out directly.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="bg-card border-2 rounded-2xl p-6 mb-6">
              <h3 className="font-semibold mb-2">Still have questions?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                I&apos;m happy to answer any questions you might have about your
                project or my services.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="flex-1 group" asChild>
                  <Link
                    href={SITE_CONFIG.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book a Call
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" className="flex-1" asChild>
                  <Link
                    href={SITE_CONFIG.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>

          {/* Quick Stats */}
          <FadeIn delay={0.4}>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">24h</div>
                <div className="text-sm text-muted-foreground">
                  Response Time
                </div>
              </div>
              <div className="bg-muted/50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">Free</div>
                <div className="text-sm text-muted-foreground">
                  Initial Consultation
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Right Column - FAQ Accordion */}
        <div>
          <StaggerContainer staggerDelay={0.05}>
            <Accordion type="single" collapsible className="space-y-4">
              {FAQS.map((faq, index) => (
                <StaggerItem key={faq.id}>
                  <AccordionItem
                    value={faq.id}
                    className="bg-card border-2 rounded-xl px-6 data-[state=open]:border-primary/50 transition-colors"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-5">
                      <span className="font-semibold pr-4">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </StaggerItem>
              ))}
            </Accordion>
          </StaggerContainer>

          {/* Additional Help */}
          <FadeIn delay={0.5}>
            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 via-primary/5 to-blue-600/10 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <HelpCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">
                    Need more detailed information?
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Every project is unique. Let&apos;s discuss your specific
                    requirements and I&apos;ll provide tailored answers.
                  </p>
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <Link href="#contact">
                      Send me a message
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}