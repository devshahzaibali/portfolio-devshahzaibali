"use client";

import { useEffect, useState } from "react";

interface HydrationSafeProps {
  children: React.ReactNode;
}

export default function HydrationSafe({ children }: HydrationSafeProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Suppress hydration warnings caused by browser extensions
    const originalError = console.error;
    console.error = (...args) => {
      const message = args[0];
      if (
        typeof message === "string" &&
        (message.includes("hydration") ||
          message.includes("bis_skin_checked") ||
          message.includes("bis_register") ||
          message.includes("A tree hydrated but some attributes"))
      ) {
        return;
      }
      originalError.apply(console, args);
    };

    return () => {
      console.error = originalError;
    };
  }, []);

  // During SSR and initial hydration, render a minimal version
  if (!isClient) {
    return <div suppressHydrationWarning={true}>{children}</div>;
  }

  // After hydration, render normally
  return <>{children}</>;
}
