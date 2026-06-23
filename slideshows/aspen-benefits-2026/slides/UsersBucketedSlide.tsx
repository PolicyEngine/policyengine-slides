import Slide from "@/components/core/Slide";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";
import Image from "@/components/core/BasePathImage";

type Org = {
  name: string;
  logo: string;
  inRoom?: boolean;
  smaller?: boolean;
  invert?: boolean;
};

const determinism: Org[] = [
  { name: "MyFriendBen", logo: "/logos/organizations/myfriendben.png", inRoom: true },
  { name: "Mirza", logo: "/logos/organizations/mirza.png", inRoom: true },
  { name: "Starlight", logo: "/logos/organizations/starlight.png", inRoom: true },
  { name: "Amplifi", logo: "/logos/organizations/amplifi.png" },
  { name: "Atlanta Fed", logo: "/logos/organizations/atlanta-fed.png" },
  { name: "Living Wage Calculator", logo: "/logos/organizations/living-wage-calculator.png" },
  { name: "Gary Community Ventures", logo: "/logos/organizations/gary-community-ventures.png" },
  { name: "Mothers Outreach Network", logo: "/logos/organizations/mothers-outreach-network.png" },
  { name: "Fund for Guaranteed Income", logo: "/logos/organizations/f4gi.png" },
];

const prediction: Org[] = [
  { name: "Brookings", logo: "/logos/organizations/brookings.svg" },
  { name: "American Enterprise Institute", logo: "/logos/organizations/aei.png" },
  { name: "Niskanen Center", logo: "/logos/organizations/niskanen-center.png", inRoom: true },
  { name: "Georgetown", logo: "/logos/organizations/georgetown.png", inRoom: true },
  { name: "CRFB", logo: "/logos/organizations/crfb.png", invert: true },
  { name: "10 Downing Street", logo: "/logos/organizations/10-downing-street.png" },
  { name: "NBER", logo: "/logos/organizations/nber.png" },
  { name: "Joint Economic Committee", logo: "/logos/organizations/jec.png", smaller: true },
  { name: "Center for Growth and Opportunity", logo: "/logos/organizations/cgo.jpg" },
];

function LogoGrid({ orgs }: { orgs: Org[] }) {
  return (
    <div className="grid grid-cols-3 gap-x-6 gap-y-4 mt-3">
      {orgs.map((org) => (
        <div key={org.name} className="relative flex items-center justify-center h-[52px]">
          <Image
            src={org.logo}
            alt={org.name}
            width={org.smaller ? 88 : 116}
            height={46}
            className={`object-contain max-h-[46px] w-auto${
              org.invert ? " invert" : ""
            }`}
          />
          {org.inRoom && (
            <span
              className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full"
              style={{ background: "var(--pe-teal)" }}
              aria-label="in the room today"
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default function UsersBucketedSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>
          Organizations use PolicyEngine for both deterministic and predictive
          analysis
        </SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-7 mt-1">
        <div className="content-card p-6">
          <div className="slide-tag mb-1" style={{ fontSize: "0.65rem" }}>
            What is the law &middot; determinism
          </div>
          <p className="text-sm text-gray-500 mb-1">
            Benefit-access tools computing current-law eligibility and amounts.
          </p>
          <LogoGrid orgs={determinism} />
        </div>

        <div className="content-card p-6">
          <div className="slide-tag mb-1" style={{ fontSize: "0.65rem" }}>
            What would a change do &middot; prediction
          </div>
          <p className="text-sm text-gray-500 mb-1">
            Researchers, governments, and think tanks scoring reforms.
          </p>
          <LogoGrid orgs={prediction} />
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-3">
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--pe-teal)" }} />
        <p className="text-base text-gray-600">
          Several are in this room today.
        </p>
      </div>
    </Slide>
  );
}
