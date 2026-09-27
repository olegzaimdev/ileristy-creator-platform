import type { Metadata } from "next";
import "./system.css";
import { DesignSystem } from "./_components/DesignSystem";

export const metadata: Metadata = { title: "ILERISTY — дизайн система" };

export default function DesignSystemPage() {
  return <DesignSystem />;
}
