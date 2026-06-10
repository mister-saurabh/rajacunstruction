import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { FloatingActions } from "../components/site/FloatingActions";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Raja V.G. Home Design & VG Construction — Architect in Jaunpur" },
      {
        name: "description",
        content:
          "Premium home design, 2D planning, 3D elevation, structural design & construction consultancy in Jaunpur & Pratapgarh by Er. Rajaram Gupta, M.Tech Structure.",
      },
      { name: "author", content: "Er. Rajaram Gupta" },
      { property: "og:title", content: "Raja V.G. Home Design & VG Construction — Architect in Jaunpur" },
      {
        property: "og:description",
        content: "From Dream to Design, From Design to Reality.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Raja V.G. Home Design Services" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Raja V.G. Home Design & VG Construction — Architect in Jaunpur" },
      { name: "description", content: "Professional civil engineering, architectural design, house planning, 2D floor plans, 3D elevations, and construction consultancy services.Professional civil en" },
      { property: "og:description", content: "Professional civil engineering, architectural design, house planning, 2D floor plans, 3D elevations, and construction consultancy services.Professional civil en" },
      { name: "twitter:description", content: "Professional civil engineering, architectural design, house planning, 2D floor plans, 3D elevations, and construction consultancy services.Professional civil en" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/ca8167aa-d06c-4d42-9ab5-6c45589b0bc3" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/ca8167aa-d06c-4d42-9ab5-6c45589b0bc3" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Raja V.G. Home Design Services & VG Construction",
          founder: "Er. Rajaram Gupta",
          telephone: ["+91-8736936268", "+91-8881678176"],
          email: "raja123iit@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Usara Bazar, Badlapur",
            addressLocality: "Jaunpur",
            addressRegion: "Uttar Pradesh",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main className="pt-16 md:pt-20">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </QueryClientProvider>
  );
}
