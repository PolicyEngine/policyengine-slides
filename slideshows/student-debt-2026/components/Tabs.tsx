'use client';

interface TabsProps<T extends string> {
  options: { id: T; label: string }[];
  value: T;
  onChange: (id: T) => void;
}

/** Button group for switching a chart or table between views. */
export default function Tabs<T extends string>({ options, value, onChange }: TabsProps<T>) {
  return (
    <div className="inline-flex rounded-lg border border-gray-300 overflow-hidden">
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onChange(o.id);
          }}
          className={`px-4 py-2 text-base font-medium transition-colors ${
            value === o.id ? 'bg-pe-teal text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
