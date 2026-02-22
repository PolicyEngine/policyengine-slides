import { getAllSlideshowMetadata } from '@/lib/slideshows';
import SlideshowPage from '@/components/core/SlideshowPage';

export function generateStaticParams() {
  return getAllSlideshowMetadata().map(s => ({ slideshow: s.id }));
}

export default function Page({ params }: { params: { slideshow: string } }) {
  return <SlideshowPage slideshowId={params.slideshow} />;
}
