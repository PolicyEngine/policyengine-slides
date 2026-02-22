'use client';

import { useState } from 'react';

interface PasswordGateProps {
  children: React.ReactNode;
}

export default function PasswordGate({ children }: PasswordGateProps) {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const correctPassword = process.env.NEXT_PUBLIC_PRIVATE_PASSWORD || '';

  if (unlocked) {
    return <>{children}</>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pe-darker via-pe-dark to-pe-teal/80 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 w-full max-w-sm">
        <h2 className="font-display text-2xl font-bold text-white mb-2">Private presentation</h2>
        <p className="text-white/50 text-sm mb-6">Enter the password to view this deck.</p>
        <input
          type="password"
          value={password}
          onChange={(e) => { setPassword(e.target.value); setError(false); }}
          placeholder="Password"
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-pe-teal mb-3"
          autoFocus
        />
        {error && (
          <p className="text-red-400 text-sm mb-3">Incorrect password</p>
        )}
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-pe-teal text-white font-semibold hover:bg-pe-teal/90 transition-colors"
        >
          View presentation
        </button>
      </form>
    </div>
  );
}
