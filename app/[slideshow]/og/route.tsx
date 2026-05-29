import { ImageResponse } from 'next/og';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { getSlideshowById, getAllSlideshowMetadata } from '@/lib/slideshows';
import { formatDate } from '@/lib/types';

// Prerender one card per deck at build time; unknown ids render on demand.
export function generateStaticParams() {
  return getAllSlideshowMetadata().map((s) => ({ slideshow: s.id }));
}

const SIZE = { width: 1200, height: 630 };

function loadLogo(): string | null {
  try {
    const svg = readFileSync(
      join(process.cwd(), 'public/logos/white.svg'),
      'utf-8',
    );
    return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
  } catch {
    return null;
  }
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slideshow: string }> },
) {
  const { slideshow } = await params;
  const config = getSlideshowById(slideshow);

  const title = config?.title ?? 'PolicyEngine';
  const description =
    config?.description ?? 'Presentation decks from PolicyEngine';
  const date = config?.date ? formatDate(config.date) : '';
  const location = config?.location ?? '';
  const speaker = config?.speakers?.[0]?.name ?? '';
  const logo = loadLogo();

  const metaParts = [location, date].filter(Boolean).join('  ·  ');

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#0D2F33',
          backgroundImage: 'linear-gradient(135deg, #1D4044 0%, #0D2F33 100%)',
          padding: '72px',
          color: 'white',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Top accent bar: brand teal-to-amber gradient */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '12px',
            display: 'flex',
            backgroundImage:
              'linear-gradient(90deg, #319795 0%, #2C7A7B 55%, #E8913A 100%)',
          }}
        />

        {/* Logo / wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', height: '56px' }}>
          {logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={logo} height={46} alt="PolicyEngine" />
          ) : (
            <div style={{ fontSize: 36, fontWeight: 700, display: 'flex' }}>
              PolicyEngine
            </div>
          )}
        </div>

        {/* Center content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            justifyContent: 'center',
          }}
        >
          {metaParts ? (
            <div
              style={{
                display: 'flex',
                fontSize: 26,
                fontWeight: 600,
                color: '#6FC7C3',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '22px',
              }}
            >
              {metaParts}
            </div>
          ) : null}

          <div
            style={{
              display: 'flex',
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-1.5px',
              maxWidth: '1000px',
            }}
          >
            {title}
          </div>

          {description ? (
            <div
              style={{
                display: 'flex',
                fontSize: 31,
                fontWeight: 400,
                color: 'rgba(255,255,255,0.78)',
                lineHeight: 1.35,
                marginTop: '30px',
                maxWidth: '960px',
              }}
            >
              {description}
            </div>
          ) : null}
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 26,
          }}
        >
          <div style={{ display: 'flex', color: 'rgba(255,255,255,0.9)' }}>
            {speaker}
          </div>
          <div style={{ display: 'flex', color: '#6FC7C3', fontWeight: 600 }}>
            policyengine.org/slides
          </div>
        </div>
      </div>
    ),
    SIZE,
  );
}
