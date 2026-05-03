"use client"

import { useEffect, useState, useRef } from "react"
import { useTheme } from "next-themes"

interface Star {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  animationDuration: number
  animationDelay: number
  type: "normal" | "bright" | "dim"
}

interface ShootingStar {
  id: number
  startX: number
  startY: number
  angle: number
  duration: number
}

export function StarBackground() {
  const [stars, setStars] = useState<Star[]>([])
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([])
  const [mounted, setMounted] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const prevThemeRef = useRef<string | undefined>()
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const generateStars = () => {
      const newStars: Star[] = []
      const starCount = 200

      for (let i = 0; i < starCount; i++) {
        const type = Math.random() > 0.85 ? "bright" : Math.random() > 0.5 ? "normal" : "dim"
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: type === "bright" ? Math.random() * 2.5 + 2 : Math.random() * 1.5 + 0.5,
          opacity: type === "bright" ? 0.95 : type === "normal" ? 0.6 : 0.25,
          animationDuration: Math.random() * 4 + 2,
          animationDelay: Math.random() * 5,
          type,
        })
      }
      setStars(newStars)
    }

    generateStars()
  }, [])

  // Detect theme change and trigger shooting stars animation
  useEffect(() => {
    if (mounted && prevThemeRef.current !== undefined && prevThemeRef.current !== resolvedTheme) {
      setIsTransitioning(true)
      
      // Generate shooting stars during transition
      const newShootingStars: ShootingStar[] = []
      for (let i = 0; i < 5; i++) {
        newShootingStars.push({
          id: Date.now() + i,
          startX: Math.random() * 60 + 20,
          startY: Math.random() * 30,
          angle: Math.random() * 30 + 30,
          duration: Math.random() * 0.5 + 0.8,
        })
      }
      setShootingStars(newShootingStars)
      
      // Clear shooting stars and transition state
      setTimeout(() => {
        setShootingStars([])
        setIsTransitioning(false)
      }, 1500)
    }
    prevThemeRef.current = resolvedTheme
  }, [resolvedTheme, mounted])

  const isDark = mounted && resolvedTheme === "dark"
  
  // Colors that adapt to the theme with smooth transitions
  const bgGradientStart = isDark ? "rgba(3, 7, 18, 1)" : "rgba(248, 250, 255, 1)"
  const bgGradientMid = isDark ? "rgba(8, 15, 35, 1)" : "rgba(235, 240, 255, 1)"
  const bgGradientEnd = isDark ? "rgba(12, 22, 45, 1)" : "rgba(220, 228, 250, 1)"
  const starColor = isDark ? "rgba(255, 255, 255, 1)" : "rgba(70, 90, 150, 1)"
  const starGlowColor = isDark ? "rgba(200, 230, 255, 0.5)" : "rgba(70, 90, 150, 0.35)"
  const primaryGlow = isDark ? "rgba(100, 200, 255, 0.6)" : "rgba(80, 120, 200, 0.5)"
  const accentGlow = isDark ? "rgba(100, 255, 200, 0.5)" : "rgba(100, 180, 150, 0.45)"
  const primaryStarColor = isDark ? "rgba(130, 210, 255, 1)" : "rgba(80, 120, 200, 1)"
  const accentStarColor = isDark ? "rgba(130, 255, 210, 1)" : "rgba(100, 180, 150, 1)"

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated background gradient with multiple layers */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 50% -20%, ${bgGradientStart} 0%, transparent 70%),
            radial-gradient(ellipse 100% 100% at 80% 100%, ${bgGradientMid} 0%, transparent 50%),
            radial-gradient(ellipse 100% 100% at 20% 100%, ${bgGradientMid} 0%, transparent 50%),
            linear-gradient(180deg, ${bgGradientStart} 0%, ${bgGradientMid} 50%, ${bgGradientEnd} 100%)
          `,
          transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />
      
      {/* Aurora/Nebula effect that intensifies during transition */}
      <div 
        className="absolute inset-0"
        style={{
          background: isDark 
            ? `
              radial-gradient(ellipse 60% 40% at 15% 25%, rgba(60, 100, 180, ${isTransitioning ? '0.15' : '0.08'}) 0%, transparent 60%),
              radial-gradient(ellipse 50% 50% at 85% 20%, rgba(80, 60, 150, ${isTransitioning ? '0.12' : '0.06'}) 0%, transparent 50%),
              radial-gradient(ellipse 70% 40% at 70% 80%, rgba(100, 60, 150, ${isTransitioning ? '0.1' : '0.05'}) 0%, transparent 50%)
            `
            : `
              radial-gradient(ellipse 60% 40% at 15% 25%, rgba(100, 140, 220, ${isTransitioning ? '0.25' : '0.18'}) 0%, transparent 60%),
              radial-gradient(ellipse 50% 50% at 85% 20%, rgba(140, 100, 200, ${isTransitioning ? '0.2' : '0.12'}) 0%, transparent 50%),
              radial-gradient(ellipse 70% 40% at 70% 80%, rgba(100, 150, 200, ${isTransitioning ? '0.15' : '0.08'}) 0%, transparent 50%)
            `,
          transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />

      {/* Transition flash effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark 
            ? 'radial-gradient(circle at 50% 30%, rgba(100, 200, 255, 0.15) 0%, transparent 60%)'
            : 'radial-gradient(circle at 50% 30%, rgba(255, 200, 100, 0.1) 0%, transparent 60%)',
          opacity: isTransitioning ? 1 : 0,
          transition: 'opacity 0.6s ease-out',
        }}
      />
      
      {/* Shooting stars during transition */}
      {shootingStars.map((shootingStar) => (
        <div
          key={shootingStar.id}
          className="absolute"
          style={{
            left: `${shootingStar.startX}%`,
            top: `${shootingStar.startY}%`,
            width: '100px',
            height: '2px',
            background: isDark 
              ? 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(100,200,255,1) 100%)'
              : 'linear-gradient(90deg, rgba(100,120,180,0) 0%, rgba(100,120,180,0.6) 50%, rgba(80,100,200,1) 100%)',
            transform: `rotate(${shootingStar.angle}deg)`,
            animation: `shooting-star ${shootingStar.duration}s ease-out forwards`,
            borderRadius: '2px',
            boxShadow: isDark 
              ? '0 0 10px 2px rgba(100, 200, 255, 0.5)'
              : '0 0 8px 2px rgba(80, 100, 200, 0.4)',
          }}
        />
      ))}
      
      {/* Stars with staggered transition */}
      {stars.map((star, index) => (
        <div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: starColor,
            opacity: isTransitioning ? star.opacity * 1.3 : star.opacity,
            animation: `twinkle ${star.animationDuration}s ease-in-out ${star.animationDelay}s infinite`,
            boxShadow: star.type === "bright" 
              ? `0 0 ${star.size * 3}px ${star.size}px ${starGlowColor}`
              : star.type === "normal"
              ? `0 0 ${star.size * 1.5}px ${star.size * 0.5}px ${starGlowColor}`
              : 'none',
            transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.002}s`,
            transform: isTransitioning ? `scale(${1 + Math.random() * 0.3})` : 'scale(1)',
          }}
        />
      ))}

      {/* Larger accent stars with pulsing glow */}
      {[
        { x: 15, y: 20, size: 'w-3 h-3', color: primaryStarColor, glow: primaryGlow, glowSize: '20px 8px', anim: 'twinkle-slow 6s' },
        { x: 80, y: 15, size: 'w-2.5 h-2.5', color: accentStarColor, glow: accentGlow, glowSize: '15px 6px', anim: 'twinkle 4s 1s' },
        { x: 70, y: 60, size: 'w-2 h-2', color: primaryStarColor, glow: primaryGlow, glowSize: '12px 5px', anim: 'twinkle-fast 3s 2s' },
        { x: 25, y: 75, size: 'w-3 h-3', color: accentStarColor, glow: accentGlow, glowSize: '18px 7px', anim: 'twinkle-slow 5s 0.5s' },
        { x: 90, y: 45, size: 'w-2 h-2', color: primaryStarColor, glow: primaryGlow, glowSize: '14px 5px', anim: 'twinkle 4.5s 1.5s' },
        { x: 5, y: 55, size: 'w-2.5 h-2.5', color: accentStarColor, glow: accentGlow, glowSize: '16px 6px', anim: 'twinkle-slow 5.5s 2.5s' },
        { x: 45, y: 10, size: 'w-2 h-2', color: primaryStarColor, glow: primaryGlow, glowSize: '14px 5px', anim: 'twinkle 5s 0.8s' },
        { x: 60, y: 85, size: 'w-2 h-2', color: accentStarColor, glow: accentGlow, glowSize: '12px 4px', anim: 'twinkle-fast 3.5s 1.2s' },
        { x: 35, y: 40, size: 'w-2.5 h-2.5', color: primaryStarColor, glow: primaryGlow, glowSize: '15px 6px', anim: 'twinkle 4s 0.3s' },
        { x: 92, y: 78, size: 'w-2 h-2', color: accentStarColor, glow: accentGlow, glowSize: '13px 5px', anim: 'twinkle-slow 5s 1.8s' },
      ].map((star, index) => (
        <div 
          key={index}
          className={`absolute ${star.size} rounded-full`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            backgroundColor: star.color,
            boxShadow: `0 0 ${star.glowSize} ${star.glow}`,
            animation: `${star.anim} ease-in-out infinite`,
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: isTransitioning ? 'scale(1.4)' : 'scale(1)',
          }}
        />
      ))}
    </div>
  )
}
