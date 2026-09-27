import type { Metadata } from "next";
import { DesignSystem } from "@/features/landing/components/DesignSystem";

export const metadata: Metadata = { title: "ILERISTY — дизайн система" };

export default function DesignSystemPage() {
  return <DesignSystem />;
}
