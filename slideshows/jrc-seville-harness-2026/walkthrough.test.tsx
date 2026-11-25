import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import WalkthroughFigure from './slides/WalkthroughFigures';
import { walkthrough } from './text';

const { gates, graph, uses } = walkthrough.figures.byId;
const dollars = (s: string) => Number(s.replace(/[^0-9.]/g, ''));
const words = (id: 'gates' | 'graph' | 'uses') =>
  renderToStaticMarkup(<WalkthroughFigure id={id} />)
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#x27;|&apos;/g, '’')
    .replace(/\s+/g, ' ');

describe('encoder walkthrough captions', () => {
  it('shows the eight steps of the walkthrough in order', () => {
    expect(walkthrough.steps.map((step) => step.n)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('gives every build a title and an explanation to read aloud', () => {
    for (const step of walkthrough.steps) {
      expect(step.title.length).toBeGreaterThan(10);
      expect(step.about.length).toBeGreaterThan(40);
    }
  });

  it('draws its own figure for the checks, the graph and the uses', () => {
    expect(walkthrough.steps.filter((step) => step.figure).map((step) => [step.n, step.figure])).toEqual([
      [4, 'gates'],
      [6, 'graph'],
      [8, 'uses'],
    ]);
  });
});

describe('the checks figure', () => {
  it('puts only drafting, the checks and applying on the rail', () => {
    expect(gates.rail.map((step) => step.kicker)).toEqual(['Encode', 'Checks', 'Apply']);
  });

  it('keeps AI review and program comparison off the rail, with no pass mark', () => {
    expect(gates.aside.map((item) => item.kicker)).toEqual(['AI review', 'Program comparison']);
    const drawn = words('gates');
    expect(drawn).toContain('Advisory by default');
    expect(drawn).toContain('Runs separately');
    expect(drawn).not.toMatch(/✓|passes|compared|read\b/);
  });

  it('says on the figure that the workflow is an illustration, with the repair and the waiver', () => {
    const caveat = gates.caveat.join(' ');
    expect(caveat).toMatch(/^Illustration\./);
    expect(caveat).toContain('manual repair');
    expect(caveat).toContain('validation waiver list');
    expect(words('gates')).toContain(gates.caveat[0]);
  });
});

describe('the rule graph figure', () => {
  it('takes net income from 7 U.S.C. § 2014(d) and (e)', () => {
    expect(graph.inputs[0].label.join(' ')).toBe('Net income under 7 U.S.C. § 2014(d) and (e)');
    expect(JSON.stringify(graph)).not.toContain('(e)(6)');
  });

  it('carries values that follow from one another', () => {
    const [net, rate, max, onePersonCost, sizeLimit, minimumRate] = graph.inputs.map((input) => dollars(input.value.split('·')[0]));
    expect(dollars(graph.net.value)).toBe(net);
    // The household contributes 30 percent of its net income.
    expect(dollars(graph.contribution.value)).toBeCloseTo(net * rate, 2);
    // The allotment before the minimum rounds down to a whole dollar.
    expect(dollars(graph.before.value)).toBe(Math.floor(max - dollars(graph.contribution.value)));
    // The minimum allotment is 8 percent of the one-person thrifty food plan cost, to the nearest dollar; it reaches
    // households of one or two. That cost is its own input: it equals the household's maximum only for one person.
    expect(sizeLimit).toBe(2);
    expect(dollars(graph.minimum.value)).toBe(Math.floor(onePersonCost * minimumRate + 0.5));
    expect(dollars(graph.output.value)).toBe(Math.max(dollars(graph.before.value), dollars(graph.minimum.value)));
  });

  it('reads the household maximum and the one-person cost as separate inputs', () => {
    const labels = graph.inputs.map((input) => input.label[0]);
    expect(labels).toContain('Household maximum allotment');
    expect(labels).toContain('One-person thrifty food plan cost');
    expect(graph.inputs.filter((input) => input.label[1] === 'USDA FY 2026, 48 states and DC')).toHaveLength(2);
  });

  it('names the rule that picks the allotment', () => {
    expect(graph.output.rule.join(' ')).toBe(`The greater of ${graph.before.value} and ${graph.minimum.value}`);
    expect(words('graph')).toContain('The greater of $182 and $24');
  });
});

describe('the uses figure', () => {
  it('presents the four tools as potential uses', () => {
    expect(uses.usesKicker).toBe('Potential uses of the same rules');
    expect(uses.uses.map((use) => use.name)).toEqual(['AI tools', 'Government tools', 'Navigation tools', 'Research tools']);
    expect(words('uses')).toContain('POTENTIAL USES OF THE SAME RULES');
  });

  it('makes no claim about every value', () => {
    expect(JSON.stringify(uses)).not.toMatch(/every/i);
  });
});

describe('every figure', () => {
  it.each(['gates', 'graph', 'uses'] as const)('%s credits axiom.org and stays hidden from screen readers', (id) => {
    const markup = renderToStaticMarkup(<WalkthroughFigure id={id} />);
    expect(markup).toContain('Adapted from axiom.org');
    expect(markup).toContain('aria-hidden="true"');
  });
});
