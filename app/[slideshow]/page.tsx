import type { Metadata } from 'next';
import { getAllSlideshowMetadata, getSlideshowById } from '@/lib/slideshows';
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

  const { title, description } = config;
  const url = `https://policyengine.org/slides/${slideshow}`;
  // Reference the image route with an explicit absolute URL. Next's metadata
  // file conventions drop the configured basePath ("/slides") from generated
  // image URLs, so we build the full path ourselves to keep crawlers happy.
  const ogImage = `${url}/og`;

  return {
    title: `${title} · PolicyEngine`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'PolicyEngine',
      type: 'article',
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slideshow: string }> }) {
  const { slideshow } = await params;
  return <SlideshowPage slideshowId={slideshow} />;
}
