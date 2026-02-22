import React from 'react';
import Slide from '@/components/core/Slide';

export default function ClaudeCodeDemoSlide() {
  return (
    <Slide>
      <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)]">
        <div className="text-6xl font-bold text-pe-dark mb-6">Live Demo</div>
        <div className="text-3xl text-gray-500 mb-12">Claude Code</div>

        <div className="w-[600px] bg-[#1e1e2e] rounded-xl p-6 shadow-2xl border border-gray-700">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-white/30 text-sm ml-2 font-mono">terminal</span>
          </div>
          <div className="font-mono text-lg text-white/80">
            <span className="text-green-400">$</span> claude
          </div>
          <div className="font-mono text-sm text-white/40 mt-2">
            <span className="inline-block w-2 h-5 bg-white/60 animate-pulse"></span>
          </div>
        </div>

        <p className="text-xl text-gray-400 mt-10 italic">
          Switching to terminal for a live demonstration
        </p>
      </div>
    </Slide>
  );
}
