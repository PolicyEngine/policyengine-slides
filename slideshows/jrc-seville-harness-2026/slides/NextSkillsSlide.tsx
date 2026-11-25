'use client';

import { IconBinaryTree, IconMessageQuestion, IconTools } from '@tabler/icons-react';
import { Card, Frame } from '../deck';
import { nextSkills } from '../text';

/** What AI should get right once it nails the basics: three cards, headings and icons only. */
const icons = [IconMessageQuestion, IconBinaryTree, IconTools];

export default function NextSkillsSlide() {
  return (
    <Frame title={nextSkills.title}>
      <div className="flex h-full flex-col justify-center pb-[4vh]">
        <div className="grid grid-cols-3 items-stretch gap-[2vw]">
          {nextSkills.cards.map((tag, i) => {
            const Icon = icons[i];
            return (
              <Card key={tag} className="flex flex-col items-center gap-[3vh] !py-[5vh] text-center">
                <Icon className="h-[10vh] w-[10vh] text-pe-teal" stroke={1.5} aria-hidden />
                <span className="font-display font-bold leading-tight text-pe-dark" style={{ fontSize: '1.3em' }}>
                  {tag}
                </span>
              </Card>
            );
          })}
        </div>
      </div>
    </Frame>
  );
}
