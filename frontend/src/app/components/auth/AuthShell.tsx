import { cn } from '@/lib/utils';
import SquareReveal from '../SquareReveal';

interface AuthShellProps {
  children: React.ReactNode;
  gridSize?: number;
  /** Tailwind classes for the ambient glow behind the card (size and color). */
  glowClassName?: string;
  /** Extra classes for the glass card that wraps `children`. */
  cardClassName?: string;
  /** Extra classes for the area that centers the card. */
  contentClassName?: string;
  /** Allows the page to scroll instead of locking to the viewport height. */
  scrollable?: boolean;
}

export default function AuthShell({
  children,
  gridSize = 12,
  glowClassName = 'w-[500px] h-[500px] bg-cyan-500/20',
  cardClassName,
  contentClassName,
  scrollable = false,
}: AuthShellProps) {
  return (
    <main
      className={cn(
        'w-full bg-black relative',
        scrollable ? 'min-h-screen overflow-x-hidden' : 'h-screen overflow-hidden',
      )}
    >
      <SquareReveal gridSize={gridSize}>
        <div
          className={cn(
            'w-full flex items-center justify-center p-4 relative',
            scrollable ? 'min-h-screen py-20' : 'h-full',
            contentClassName,
          )}
        >
          {/* Background ambience */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-20 pointer-events-none bg-repeat"></div>
          <div
            className={cn(
              'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[120px] rounded-full pointer-events-none',
              glowClassName,
            )}
          ></div>

          <div
            className={cn(
              'relative z-10 w-full max-w-md p-8 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]',
              cardClassName,
            )}
          >
            {children}
          </div>
        </div>
      </SquareReveal>
    </main>
  );
}
