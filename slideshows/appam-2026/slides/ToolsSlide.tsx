import Frame from './Frame';

const rows = [
  {
    question: 'What did each state’s rules say, year by year?',
    tools: 'Welfare Rules Database and CCDF Policies Database (Urban), Policy Tracking System (PN-3)',
  },
  {
    question: 'What could a family receive across programs and states?',
    tools: 'State Safety Net Interactive, 2001–2024 (Brookings), Policy Impact Calculator (PN-3), PolicyEngine',
  },
  {
    question: 'Who qualifies and takes part, state by state?',
    tools: 'State of the Safety Net, from ATTIS and the American Community Survey (Urban)',
  },
  {
    question: 'What would a change do?',
    tools: 'Policy Impact Calculator (PN-3), State of the Safety Net what-ifs (Urban), PolicyEngine',
  },
];

const additions = [
  { title: 'Any parameter', body: 'Change any parameter, or write new rules in Python.' },
  { title: 'Microdata', body: 'Run your own survey or administrative file.' },
  { title: 'Open code', body: 'Read and edit every rule.' },
  { title: 'Current law forward', body: 'Project through 2035.' },
];

export default function ToolsSlide() {
  return (
    <Frame title="Research questions and the tools that answer them">
      <div className="flex h-full flex-col justify-between gap-[2vh]">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b-2 border-gray-300 text-gray-700" style={{ fontSize: '0.85em' }}>
              <th className="w-[38%] py-[0.6vh] pr-[3vh] font-semibold">Question</th>
              <th className="py-[0.6vh] font-semibold">Tools</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.question} className="border-b border-gray-200">
                <td className="py-[1.5vh] pr-[3vh] font-medium text-pe-dark">{row.question}</td>
                <td className="py-[1.5vh]">{row.tools}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h2 className="mb-[1.2vh] font-semibold text-pe-dark">What PolicyEngine adds</h2>
          <div className="grid grid-cols-4 gap-[2.5vh]">
            {additions.map((addition) => (
              <div key={addition.title} className="content-card p-[1.8vh]">
                <h3 className="font-semibold text-pe-dark">{addition.title}</h3>
                <p style={{ fontSize: '0.9em' }}>{addition.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}
