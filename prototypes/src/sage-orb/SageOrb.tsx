type OrbState = 'rest' | 'thinking' | 'responding'

interface SageOrbProps {
  state: OrbState
  size?: number
  onClick?: () => void
}

export function SageOrb({ state, size = 120, onClick }: SageOrbProps) {
  const stateStyles: Record<OrbState, string> = {
    rest: 'animate-orb-rest',
    thinking: 'animate-orb-thinking',
    responding: 'animate-orb-responding',
  }

  return (
    <button
      onClick={onClick}
      className={`relative cursor-pointer border-0 bg-transparent p-0 group`}
      style={{ width: size, height: size }}
      aria-label={`Sage is ${state === 'rest' ? 'ready' : state}`}
    >
      {/* Outer glow layer */}
      <div
        className={`absolute inset-0 rounded-full ${stateStyles[state]}-glow`}
        style={{
          background: 'radial-gradient(circle, rgba(144,180,148,0.3) 0%, rgba(144,180,148,0) 70%)',
          filter: 'blur(8px)',
        }}
      />

      {/* Main orb image */}
      <img
        src="/assets/sage-orb.png"
        alt="Sage"
        className={`w-full h-full object-contain relative z-10 ${stateStyles[state]}`}
        draggable={false}
      />

      {/* Hover ring */}
      <div className="absolute inset-1 rounded-full border border-white/0 group-hover:border-white/20 transition-all duration-300 z-20" />
    </button>
  )
}
