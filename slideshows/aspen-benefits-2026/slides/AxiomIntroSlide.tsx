"use client";

import React, { useState } from "react";
import Slide from "@/components/core/Slide";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";

const IFRAME_URL = "https://axiom-foundation.org";

const requirements = [
  {
    title: "Accuracy at every step",
    detail:
      "Not just the final answer — every parameter, formula, citation, and test produced along the way.",
  },
  {
    title: "Deterministic quality gates",
    detail:
      "Tests, type checks, and cross-validation against other ground truths — TAXSIM, agency tables — that the agents must pass.",
  },
  {
    title: "Human review at the right boundary",
    detail:
      "Not every prompt — the assumptions and edge cases worth a second pair of eyes.",
  },
];

export default function AxiomIntroSlide() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Axiom: start from the statute itself</SlideTitle>
      </SlideHeader>

      <div className="mt-5 grid grid-cols-[1fr_1.15fr] gap-7 h-[calc(100vh-300px)]">
        <div className="flex flex-col gap-3">
          {requirements.map((r, i) => (
            <div
              key={r.title}
              className="content-card p-4 grid grid-cols-[40px_1fr] gap-3 items-start"
            >
              <div className="font-mono text-2xl font-bold text-pe-teal leading-none pt-1">
                {i + 1}
              </div>
              <div>
                <h3 className="text-base font-bold text-pe-dark mb-1">
                  {r.title}
                </h3>
                <p className="text-sm text-gray-700 leading-snug">{r.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 h-full">
          <div
            className="relative flex-1 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={IFRAME_URL}
              title="Axiom Foundation"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17343A]/12 via-transparent to-transparent pointer-events-none" />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setExpanded(true);
              }}
              className="absolute top-3 right-3 z-10 bg-white/90 hover:bg-white border border-gray-300 rounded-lg px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm transition-colors"
            >
              Expand
            </button>
          </div>

          <p className="text-sm text-gray-600 leading-snug px-1">
            Ariel Kennan &mdash; here today, incoming president of the Axiom
            Foundation &mdash; goes deeper in a later session.
          </p>
        </div>
      </div>

      {expanded && (
        <div
          className="fixed inset-0 z-[200] bg-black/60 flex items-center justify-center p-8"
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(false);
          }}
        >
          <div
            className="relative w-full h-full max-w-[95vw] max-h-[90vh] rounded-2xl overflow-hidden bg-white shadow-2xl pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={IFRAME_URL}
              title="Axiom Foundation (expanded)"
              className="w-full h-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setExpanded(false);
              }}
              className="absolute top-4 right-4 z-10 bg-white hover:bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 shadow-md transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </Slide>
  );
}
