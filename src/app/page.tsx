import {
  HeroSection,
  ServicesSection,
  ProjectsSection,
  WhyMeSection,
  TechStackSection,
  ProcessSection,
  TestimonialsSection,
  FAQSection,
  ContactSection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <WhyMeSection />
      <TechStackSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}