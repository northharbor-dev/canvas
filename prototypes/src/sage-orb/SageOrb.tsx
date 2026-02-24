import './sage-orb.css'
import defaultOrbImage from './sage-orb.png'

export type OrbState = 'rest' | 'thinking' | 'responding'

interface SageOrbProps {
  state: OrbState
  size?: number
  imageSrc?: string
  onClick?: () => void
}

const animationClass: Record<OrbState, string> = {
  rest: 'animate-orb-rest',
  thinking: 'animate-orb-thinking',
  responding: 'animate-orb-responding',
}

const glowClass: Record<OrbState, string> = {
  rest: 'animate-orb-rest-glow',
  thinking: 'animate-orb-thinking-glow',
  responding: 'animate-orb-responding-glow',
}

/**
 * Sage AI assistant avatar — a glowing energy orb with three animation states.
 *
 * Portable: copy this folder (SageOrb.tsx, sage-orb.css, sage-orb.png) into
 * any React project. The only external dependency is Tailwind CSS for utility
 * classes; replace them with inline styles if Tailwind isn't available.
 */
export function SageOrb({ state, size = 120, imageSrc, onClick }: SageOrbProps) {
  const src = imageSrc ?? defaultOrbImage

  return (
    <button
      onClick={onClick}
      className="relative cursor-pointer border-0 bg-transparent p-0 group"
      style={{ width: size, height: size }}
      aria-label={`Sage is ${state === 'rest' ? 'ready' : state}`}
    >
      {/* Outer glow layer */}
      <div
        className={`absolute inset-0 rounded-full ${glowClass[state]}`}
        style={{
          background: 'radial-gradient(circle, rgba(144,180,148,0.3) 0%, rgba(144,180,148,0) 70%)',
          filter: 'blur(8px)',
        }}
      />

      {/* Main orb image */}
      <img
        src={src}
        alt="Sage"
        className={`w-full h-full object-contain relative z-10 ${animationClass[state]}`}
        draggable={false}
      />

      {/* Hover ring */}
      <div className="absolute inset-1 rounded-full border border-white/0 group-hover:border-white/20 transition-all duration-300 z-20" />
    </button>
  )
}
