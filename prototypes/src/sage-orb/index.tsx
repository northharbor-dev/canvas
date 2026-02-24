import { useState } from 'react'
import { SageOrb } from './SageOrb'
import type { OrbState } from './SageOrb'

export { SageOrb } from './SageOrb'
export type { OrbState } from './SageOrb'

const stateDescriptions: Record<OrbState, { label: string; description: string }> = {
  rest: {
    label: 'At Rest',
    description: 'Gentle floating with subtle glow breathing. Sage is ready and waiting.',
  },
  thinking: {
    label: 'Thinking',
    description: 'Slow pulsation — the aura expands and contracts. Sage is processing.',
  },
  responding: {
    label: 'Responding',
    description: 'Faster modulation with brightness oscillating rhythmically, like speech.',
  },
}

export default function SageOrbPage() {
  const [state, setState] = useState<OrbState>('rest')
  const [showChat, setShowChat] = useState(false)

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Demo controls */}
      <div className="max-w-2xl mx-auto pt-12 px-6">
        <h1 className="text-2xl font-bold mb-2">Sage Orb</h1>
        <p className="text-slate-400 mb-8">
          Animated energy orb avatar for the Sage AI assistant.
          Click the orb or use the controls below to change states.
        </p>

        {/* State selector */}
        <div className="flex gap-2 mb-12">
          {(Object.keys(stateDescriptions) as OrbState[]).map((s) => (
            <button
              key={s}
              onClick={() => setState(s)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                state === s
                  ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/50'
                  : 'bg-slate-800 text-slate-400 border border-slate-700 hover:border-slate-500'
              }`}
            >
              {stateDescriptions[s].label}
            </button>
          ))}
        </div>

        {/* Current state info */}
        <div className="text-center mb-4">
          <span className="text-xs uppercase tracking-wider text-slate-500">
            {stateDescriptions[state].label}
          </span>
          <p className="text-sm text-slate-400 mt-1">
            {stateDescriptions[state].description}
          </p>
        </div>
      </div>

      {/* Orb display - centered */}
      <div className="flex justify-center items-center py-16">
        <SageOrb
          state={state}
          size={180}
          onClick={() => {
            setShowChat(!showChat)
          }}
        />
      </div>

      {/* Chat simulation */}
      {showChat && (
        <div className="max-w-md mx-auto px-6 pb-12">
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700 p-6">
            <div className="flex items-center gap-3 mb-4">
              <SageOrb state={state} size={32} />
              <span className="text-sm font-medium text-slate-300">Sage</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Hello! I'm Sage, your retirement planning assistant.
              How can I help you today?
            </p>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => setState('thinking')}
                className="text-xs px-3 py-1.5 rounded-lg bg-slate-700 text-slate-300 hover:bg-slate-600 transition-colors"
              >
                Ask a question (triggers thinking)
              </button>
              <button
                onClick={() => setState('responding')}
                className="text-xs px-3 py-1.5 rounded-lg bg-slate-700 text-slate-300 hover:bg-slate-600 transition-colors"
              >
                Get response (triggers responding)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Size variants */}
      <div className="max-w-2xl mx-auto px-6 pb-12">
        <h2 className="text-lg font-semibold mb-6 text-slate-300">Size Variants</h2>
        <div className="flex items-end gap-8 justify-center">
          {[40, 64, 96, 140].map((size) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <SageOrb state={state} size={size} />
              <span className="text-xs text-slate-500">{size}px</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating demo */}
      <div className="fixed bottom-6 right-6 z-50">
        <SageOrb
          state={state}
          size={64}
          onClick={() => setShowChat(!showChat)}
        />
      </div>
    </div>
  )
}
