import { SlideshowConfig, SlideshowMetadata, flattenSlides } from "./types";
import { aiWebinarConfig } from "@/slideshows/ai-webinar/config";
import { abundanceDmvConfig } from "@/slideshows/abundance-dmv/config";
import { vanderbilt2025Config } from "@/slideshows/vanderbilt-2025/config";
import { mnHouse2025Config } from "@/slideshows/mn-house-2025/config";
import { riCtcWebinarConfig } from "@/slideshows/ri-ctc-webinar/config";
import { modelScopeConfig } from "@/slideshows/model-scope/config";
import { georgetown2026Config } from "@/slideshows/georgetown-2026/config";
import { cio4goodPanelConfig } from "@/slideshows/cio4good-panel/config";
import { cio4goodTalkConfig } from "@/slideshows/cio4good-talk/config";
import { cio4goodWorkshopConfig } from "@/slideshows/cio4good-workshop/config";
import { aeaReproducibilityConfig } from "@/slideshows/aea-reproducibility-2026-04-21/config";
import { pwbm2026Config } from "@/slideshows/pwbm-2026/config";
import { eagxdc2026Config } from "@/slideshows/eagxdc-2026/config";
import { codeForAmerica2026Config } from "@/slideshows/code-for-america-2026/config";
import { cliffwatchWebinarConfig } from "@/slideshows/cliffwatch-webinar/config";
import { cbo2026Config } from "@/slideshows/cbo-2026/config";
import { civicBuilders2026Config } from "@/slideshows/civic-builders-2026/config";
import { policybenchWebinarConfig } from "@/slideshows/policybench-webinar/config";
import { aspenBenefits2026Config } from "@/slideshows/aspen-benefits-2026/config";
import { l0Ima2026Config } from "@/slideshows/l0-ima-2026/config";
import { iariw2026Config } from "@/slideshows/iariw-2026/config";
import { arnold2026Config } from "@/slideshows/arnold-2026/config";

export const slideshows: SlideshowConfig[] = [
  arnold2026Config,
  iariw2026Config,
  l0Ima2026Config,
  aspenBenefits2026Config,
  policybenchWebinarConfig,
  civicBuilders2026Config,
  cliffwatchWebinarConfig,
  cbo2026Config,
  codeForAmerica2026Config,
  eagxdc2026Config,
  pwbm2026Config,
  aeaReproducibilityConfig,
  cio4goodWorkshopConfig,
  cio4goodPanelConfig,
  cio4goodTalkConfig,
  aiWebinarConfig,
  abundanceDmvConfig,
  vanderbilt2025Config,
  mnHouse2025Config,
  riCtcWebinarConfig,
  modelScopeConfig,
  georgetown2026Config,
];

export function getSlideshowById(id: string): SlideshowConfig | undefined {
  return slideshows.find((s) => s.id === id);
}

export function getAllSlideshowMetadata(): SlideshowMetadata[] {
  return slideshows.map((s) => ({
    id: s.id,
    title: s.title,
    description: s.description,
    date: s.date,
    location: s.location,
    speakers: s.speakers,
    private: s.private,
    slideCount: flattenSlides(s.slides).length,
  }));
}
