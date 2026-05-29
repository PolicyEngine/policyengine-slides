import type { Metadata } from 'next';
import { getAllSlideshowMetadata, getSlideshowById } from '@/lib/slideshows';
import { buildSlideshowMetadata } from '@/lib/slideshow-seo';
import SlideshowPage from '@/components/core/SlideshowPage';

export function generateStaticParams() {
  return getAllSlideshowMetadata().map(s => ({ slideshow: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slideshow: string }>;
}): Promise<Metadata> {
  const { slideshow } = await params;
  const config = getSlideshowById(slideshow);

  if (!config) {
    return { title: 'PolicyEngine Slides' };
  }

  return buildSlideshowMetadata(config);
}

export default async function Page({ params }: { params: Promise<{ slideshow: string }> }) {
  const { slideshow } = await params;
  return <SlideshowPage slideshowId={slideshow} />;
}
