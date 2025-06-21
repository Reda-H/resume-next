"use client"

import { useEffect, useRef, useState, useCallback } from 'react'

interface HalftoneBackgroundProps {
  className?: string
}

export default function HalftoneBackground({ className = "" }: HalftoneBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const animationFrameRef = useRef<number>()
  const timeRef = useRef(0)
  const centerPointRef = useRef({ x: 0, y: 0 })

  // Adjust this parameter to control opacity falloff (higher = faster falloff)
  const OPACITY_FALLOFF = 5

  const calculateOpacity = (waveOffset: number) => {
    // Using natural log (base e) for smooth falloff
    // Map waveOffset from [0,1] to a decreasing logarithmic curve
    const baseOpacity = 0.15 // Maximum opacity
    if (waveOffset <= 0) return 0
    
    const logFalloff = -Math.log(waveOffset) / OPACITY_FALLOFF
    return baseOpacity * Math.max(0, 1 - logFalloff)
  }

  const triggerAnimation = useCallback((x: number, y: number) => {
    if (isAnimating) return
    
    const canvas = canvasRef.current
    if (!canvas) return

    // Convert page coordinates to canvas coordinates
    const rect = canvas.getBoundingClientRect()
    const canvasX = x - rect.left
    const canvasY = y - rect.top
    
    centerPointRef.current = { x: canvasX, y: canvasY }
    setIsAnimating(true)
    timeRef.current = 0
    
    // Animation will run for the time it takes to leave the screen
    const duration = 1000
    setTimeout(() => {
      setIsAnimating(false)
    }, duration)
  }, [isAnimating])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      // Reset center point on resize if not animating
      if (!isAnimating) {
        centerPointRef.current = {
          x: canvas.width / 2,
          y: canvas.height / 2
        }
      }
    }

    const handleGlobalClick = (e: MouseEvent) => {
      // Use the click coordinates directly from the event
      triggerAnimation(e.clientX, e.clientY)
    }

    const drawHalftoneWave = () => {
      const gridSize = 25
      const rows = Math.ceil(canvas.height / gridSize)
      const cols = Math.ceil(canvas.width / gridSize)

      // Clear canvas with transparent background
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Calculate max distance based on furthest corner from center point
      const maxDistance = Math.sqrt(
        Math.pow(Math.max(centerPointRef.current.x, canvas.width - centerPointRef.current.x), 2) + 
        Math.pow(Math.max(centerPointRef.current.y, canvas.height - centerPointRef.current.y), 2)
      )

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const centerX = x * gridSize + gridSize / 2
          const centerY = y * gridSize + gridSize / 2
          
          // Calculate distance from current center point
          const distanceFromCenter = Math.sqrt(
            Math.pow(centerX - centerPointRef.current.x, 2) + 
            Math.pow(centerY - centerPointRef.current.y, 2)
          )
          
          const normalizedDistance = distanceFromCenter / maxDistance
          
          // Create expanding wave effect
          const wavePosition = normalizedDistance * 2 - (timeRef.current * 1.5)
          const waveOffset = Math.max(0, 1 - Math.abs(wavePosition))
          
          const size = gridSize * 0.8 * waveOffset
          
          // Calculate opacity using logarithmic falloff
          const opacity = calculateOpacity(waveOffset)
          
          if (opacity > 0) {
            ctx.beginPath()
            ctx.arc(centerX, centerY, size / 2, 0, Math.PI * 2)
            ctx.fillStyle = `hsla(159, 40%, 35%, ${opacity})`
            ctx.fill()
          }
        }
      }
    }

    const animate = () => {
      if (!isAnimating) return
      
      drawHalftoneWave()
      // Adjust speed to match the 1-second duration
      timeRef.current += 0.016
      
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    // Initial setup
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    // Add global click listener
    window.addEventListener('click', handleGlobalClick)

    // Start animation loop when needed
    if (isAnimating) {
      animate()
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('click', handleGlobalClick)
    }
  }, [isAnimating, triggerAnimation])

  return (
    <canvas 
      ref={canvasRef} 
      className={`fixed inset-0 z-0 ${className}`}
      style={{ background: 'transparent' }}
    />
  )
} 