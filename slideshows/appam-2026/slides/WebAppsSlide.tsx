import Image from '@/components/core/BasePathImage';
import Frame from './Frame';
import Walkthrough from './Walkthrough';
import styles from './deck.module.css';

const apps = [
  {
    address: 'policyengine.org/us/cliffwatch',
    // CliffWatch's share link for the household in the screenshot.
    href: 'https://www.policyengine.org/us/cliffwatch?s=MA&zip=02139&ms=unmarried&p=33:a::0,6:c::0,10:c::0',
    src: '/images/appam-2026/cliffwatch-chart.png',
    width: 1689,
    height: 661,
    alt: 'CliffWatch’s chart of a household’s net income as its wages rise, with red markers on three cliffs',
    caption:
      'Enter a household to see where a raise leaves it with less. For example, we entered a single parent of two in Massachusetts. CliffWatch counts health coverage in net income.',
  },
  {
    address: 'app.policyengine.org/us/build',
    href: 'https://app.policyengine.org/us/build',
    src: '/images/appam-2026/build-report.png',
    width: 1820,
    height: 640,
    alt: 'Build’s report on doubling the Massachusetts child and family tax credit amount from $440 to $880 from January 1, 2026: $657.4m annual state revenue loss, 45.7% of people gaining income and a 2.3% decrease in child poverty',
    caption:
      'Find a parameter by name, set a new value and run a report. For example, we doubled the Massachusetts child and family credit. Build runs PolicyEngine US 2.2.1, and we ran slide 9 on 2.90.2.',
  },
];

export default function WebAppsSlide({ buildStep }: { buildStep?: number }) {
  return (
    <Frame title="You can find a family’s cliffs and build a reform without writing code">
      <div className={`flex h-full items-center ${styles.flow}`}>
        {/* Columns in proportion to each screenshot's width, so both print at one scale. */}
        <div
          className={`grid w-full items-start gap-[4vh] ${styles.flow} ${styles.shots}`}
          style={{ gridTemplateColumns: apps.map((app) => `${app.width}fr`).join(' ') }}
        >
          {apps.map((app) => (
            <figure key={app.address} className="m-0 min-w-0">
              <div className="content-card overflow-hidden border border-gray-200">
                <Image
                  src={app.src}
                  alt={app.alt}
                  width={app.width}
                  height={app.height}
                  loading="eager"
                  className="block h-auto w-full"
                />
              </div>
              <figcaption className="mt-[1.4vh]">
                {/* A new tab keeps the deck on this slide; the class stops a click from advancing it. */}
                <a
                  className="pointer-events-auto"
                  style={{ textDecoration: 'underline' }}
                  href={app.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {app.address}
                </a>
                <p className="text-pretty">{app.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <Walkthrough play={buildStep === 2} />
    </Frame>
  );
}
