"use client"

import { Moon, Sun, Sparkles } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleToggle = () => {
    setIsAnimating(true)
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
    setTimeout(() => setIsAnimating(false), 600)
  }

  if (!mounted) {
    return (
      <button className="relative p-2.5 rounded-full bg-secondary/50 text-muted-foreground overflow-hidden w-11 h-11">
        <Sun className="w-5 h-5" />
      </button>
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <button
      onClick={handleToggle}
      className="relative p-2.5 rounded-full bg-secondary/60 hover:bg-secondary text-foreground overflow-hidden border border-border/50 w-11 h-11 group"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: isDark 
          ? '0 0 20px 2px rgba(100, 200, 255, 0.15), inset 0 0 15px rgba(100, 200, 255, 0.05)' 
          : '0 0 20px 2px rgba(255, 180, 50, 0.15), inset 0 0 15px rgba(255, 180, 50, 0.05)',
      }}
    >
      {/* Animated background pulse during transition */}
      <div 
        className="absolute inset-0 rounded-full"
        style={{
          background: isDark 
            ? 'radial-gradient(circle at center, rgba(100, 200, 255, 0.2) 0%, transparent 70%)'
            : 'radial-gradient(circle at center, rgba(255, 180, 50, 0.2) 0%, transparent 70%)',
          opacity: isAnimating ? 1 : 0,
          transform: isAnimating ? 'scale(1.5)' : 'scale(0.8)',
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />

      {/* Sparkle particles during animation */}
      {isAnimating && (
        <>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                backgroundColor: isDark ? 'rgba(100, 200, 255, 0.8)' : 'rgba(255, 180, 50, 0.8)',
                left: '50%',
                top: '50%',
                animation: `sparkle-out 0.6s ease-out forwards`,
                animationDelay: `${i * 0.05}s`,
                transform: `rotate(${i * 60}deg) translateX(0)`,
              }}
            />
          ))}
        </>
      )}
      
      {/* Icon container with flip animation */}
      <div 
        className="relative flex items-center justify-center w-full h-full"
        style={{
          transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isAnimating ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {isDark ? (
          <div className="relative">
            <Sun 
              className="w-5 h-5 transition-all duration-300 group-hover:rotate-45" 
              style={{ 
                color: '#fbbf24',
                filter: 'drop-shadow(0 0 4px rgba(251, 191, 36, 0.5))',
              }}
            />
          </div>
        ) : (
          <div className="relative">
            <Moon 
              className="w-5 h-5 text-primary transition-all duration-300 group-hover:-rotate-12"
              style={{
                filter: 'drop-shadow(0 0 4px rgba(100, 150, 255, 0.4))',
              }}
            />
            <Sparkles 
              className="absolute w-2.5 h-2.5 -top-1 -right-1 text-primary/80"
              style={{
                animation: 'pulse 2s ease-in-out infinite',
              }}
            />
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes sparkle-out {
          0% {
            transform: rotate(var(--rotation)) translateX(0);
            opacity: 1;
          }
          100% {
            transform: rotate(var(--rotation)) translateX(20px);
            opacity: 0;
          }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
      `}</style>
    </button>
  )
}
