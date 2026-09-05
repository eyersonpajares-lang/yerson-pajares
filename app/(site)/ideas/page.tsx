import type { Metadata } from "next";
import { IdeasListClient } from "./IdeasListClient";

export const metadata: Metadata = {
  title: "Ideas",
  description:
    "Notes and essays on Project Controls, Planning, Construction Tech and AI.",
};

export default function IdeasPage() {
  return <IdeasListClient />;
}
