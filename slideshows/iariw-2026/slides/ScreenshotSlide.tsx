import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';
import Image from '@/components/core/BasePathImage';

interface ScreenshotSlideProps {
  title: string;
  src: string;
  alt: string;
  caption?: string;
  url?: string;
}

/** Full-width screenshot slide — demo insurance for when the venue network dies. */
export default function ScreenshotSlide({
  title,
  src,
  alt,
  caption,
  url,
}: ScreenshotSlideProps) {
  return (
    <Slide>
      <SlideHeader>
        <div className="flex items-baseline justify-between">
          <SlideTitle>{title}</SlideTitle>
          {url && (
            <span className="font-mono text-lg text-pe-teal">{url}</span>
          )}
        </div>
      </SlideHeader>

      <div className="mt-4 flex flex-col items-center">
        <div className="relative w-full max-w-6xl rounded-xl overflow-hidden border border-gray-200 shadow-lg">
          <Image
            src={src}
            alt={alt}
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
        </div>
        {caption && (
          <p className="mt-3 text-base text-gray-600 text-center max-w-5xl">
            {caption}
          </p>
        )}
      </div>
    </Slide>
  );
}
