import Image from 'next/image';
import { SpeakerInfo } from '@/lib/types';

interface SpeakerHeadshotProps {
  speaker: SpeakerInfo;
  size?: 'sm' | 'md' | 'lg';
  showTitle?: boolean;
}

const sizeMap = {
  sm: 'w-16 h-16',
  md: 'w-28 h-28',
  lg: 'w-36 h-36',
};

export default function SpeakerHeadshot({ speaker, size = 'md', showTitle = true }: SpeakerHeadshotProps) {
  return (
    <div className="text-center">
      <div className={`${sizeMap[size]} relative overflow-hidden rounded-full border-2 border-white/40 mx-auto mb-3`}>
        <Image
          src={speaker.photo}
          alt={speaker.name}
          fill
          className="object-cover"
        />
      </div>
      <p className="text-xl font-semibold text-white">{speaker.name}</p>
      {showTitle && (
        <p className="text-sm text-white/70 font-light">{speaker.title}</p>
      )}
    </div>
  );
}
