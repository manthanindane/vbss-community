import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageTransition from '@/components/shared/PageTransition';

export default function NotFound() {
  return (
    <PageTransition>
      <div className="min-h-[70vh] flex items-center justify-center bg-cream-50 section-padding pt-32">
        <div className="container-main text-center">
          <h1 className="font-display text-8xl md:text-9xl font-bold gradient-text mb-4">404</h1>
          <h2 className="font-heading text-3xl font-semibold text-charcoal-900 mb-6">Page Not Found</h2>
          <p className="text-lg text-charcoal-500 max-w-md mx-auto mb-10">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button size="lg" asChild>
            <Link to="/">
              <Home className="w-5 h-5 mr-2" />
              Go Back Home
            </Link>
          </Button>
        </div>
      </div>
    </PageTransition>
  );
}
