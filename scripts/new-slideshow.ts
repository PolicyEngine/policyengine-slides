import { mkdirSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('Usage: bun run new-slideshow <id> <title>');
  console.error('Example: bun run new-slideshow my-talk "My awesome talk"');
  process.exit(1);
}

const [id, ...titleParts] = args;
const title = titleParts.join(' ');
const dir = join(process.cwd(), 'slideshows', id);

if (existsSync(dir)) {
  console.error(`Slideshow "${id}" already exists at ${dir}`);
  process.exit(1);
}

mkdirSync(join(dir, 'slides'), { recursive: true });

const configContent = `import { SlideshowConfig } from '@/lib/types';
import CoverSlide from './slides/CoverSlide';
import EndSlide from './slides/EndSlide';

export const ${id.replace(/-([a-z])/g, (_, c) => c.toUpperCase())}Config: SlideshowConfig = {
  id: '${id}',
  title: '${title.replace(/'/g, "\\'")}',
  description: '',
  date: '${new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}',
  slides: [
    CoverSlide,
    EndSlide,
  ],
};
`;

const coverContent = `import React from 'react';
import CoverSlideTemplate from '@/components/layout/CoverSlide';

export default function CoverSlide() {
  return <CoverSlideTemplate />;
}
`;

const endContent = `import React from 'react';
import EndSlideTemplate from '@/components/layout/EndSlide';

export default function EndSlide() {
  return <EndSlideTemplate />;
}
`;

writeFileSync(join(dir, 'config.ts'), configContent);
writeFileSync(join(dir, 'slides', 'CoverSlide.tsx'), coverContent);
writeFileSync(join(dir, 'slides', 'EndSlide.tsx'), endContent);

console.log(`Created slideshow "${id}" at ${dir}`);
console.log('');
console.log('Next steps:');
console.log(`1. Add slides in ${dir}/slides/`);
console.log(`2. Import and register in lib/slideshows.ts`);
console.log('3. Run "bun dev" to preview');
