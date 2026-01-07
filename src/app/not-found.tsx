import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Container size="sm" className="text-center py-20">
        {/* 404 Text */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold gradient-text mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/">
              <Home className="w-5 h-5 mr-2" />
              Go to Homepage
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/#contact">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Contact Me
            </Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}