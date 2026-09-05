import type { Metadata } from "next";
import { WorkLogListClient } from "./WorkLogListClient";

export const metadata: Metadata = {
  title: "Work Log",
  description: "Building, learning and experimenting — one day at a time.",
};

export default function WorkLogPage() {
  return <WorkLogListClient />;
}
