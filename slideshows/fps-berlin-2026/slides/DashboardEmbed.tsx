"use client";

import { useSyncExternalStore } from "react";
import BasePathImage from "@/components/core/BasePathImage";

const noSubscribe = () => () => {};

/**
 * The live dashboard in the browser deck; its saved first screen in the PDF
 * export (?export=1), where an iframe may not have loaded by the settle time.
 */
export default function DashboardEmbed({ src, title, image }: { src: string; title: string; image: string }) {
  const exporting = useSyncExternalStore(
    noSubscribe,
    () => new URLSearchParams(window.location.search).get("export") === "1",
    () => false,
  );
  return exporting ? (
    <BasePathImage src={image} alt={`${title}: first screen`} fill className="object-contain object-top" />
  ) : (
    <iframe src={src} title={title} loading="eager" />
  );
}
