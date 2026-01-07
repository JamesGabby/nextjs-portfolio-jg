"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Container size="sm" className="text-center py-20">
        {/* Error Icon */}
        <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-10 h-10 text-destructive" />
        </div>

        {/* Error Message */}
        <h1 className="text-2xl md:text-3xl font-semibold mb-4">
          Something went wrong
        </h1>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          We apologize for the inconvenience. An unexpected error has occurred.
          Please try again or contact me if the problem persists.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" onClick={reset}>
            <RefreshCw className="w-5 h-5 mr-2" />
            Try Again
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/">
              <Home className="w-5 h-5 mr-2" />
              Go to Homepage
            </Link>
          </Button>
        </div>

        {/* Error Details (development only) */}
        {process.env.NODE_ENV === "development" && (
          <div className="mt-8 p-4 bg-muted rounded-lg text-left">
            <p className="text-sm font-mono text-muted-foreground break-all">
              {error.message}
            </p>
            {error.digest && (
              <p className="text-xs text-muted-foreground mt-2">
                Error ID: {error.digest}
              </p>
            )}
          </div>
        )}
      </Container>
    </div>
  );
}