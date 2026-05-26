import { getAllSlideshowMetadata } from '@/lib/slideshows';
import SlideshowPage from '@/components/core/SlideshowPage';

export function generateStaticParams() {
  return getAllSlideshowMetadata().map(s => ({ slideshow: s.id }));
}

export default async function Page({ params }: { params: Promise<{ slideshow: string }> }) {
  const { slideshow } = await params;
  return <SlideshowPage slideshowId={slideshow} />;
}
