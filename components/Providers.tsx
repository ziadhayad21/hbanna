"use client";

import { LanguageProvider } from "@/contexts/LanguageProvider";
import type { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
