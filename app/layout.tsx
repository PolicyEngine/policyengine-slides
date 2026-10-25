import type { Metadata } from 'next';
import './globals.css';
import { EXPORT_HOLD_SCRIPT } from '@/lib/export-hold';

export const metadata: Metadata = {
  metadataBase: new URL('https://policyengine.org'),
  title: 'PolicyEngine Slides',
  description: 'Presentation decks from PolicyEngine',
  icons: {
    icon: '/slides/logos/profile_teal.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Runs before load can fire; it acts only on ?export=1&settle=<ms>. */}
        <script dangerouslySetInnerHTML={{ __html: EXPORT_HOLD_SCRIPT }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
