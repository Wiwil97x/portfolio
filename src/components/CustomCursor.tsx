'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    if (!dot) return

    const move = (e: MouseEvent) => {
      dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`
    }

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const interactive = target.closest('a') || target.closest('button')
      if (interactive) {
        dot.style.width = '12px'
        dot.style.height = '12px'
        dot.style.marginLeft = '-2px'
        dot.style.marginTop = '-2px'
        dot.style.opacity = '0.6'
      } else {
        dot.style.width = '8px'
        dot.style.height = '8px'
        dot.style.marginLeft = '0'
        dot.style.marginTop = '0'
        dot.style.opacity = '1'
      }
    }

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', onOver)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', onOver)
    }
  }, [])

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999]"
      style={{ willChange: 'transform', transition: 'width 0.15s, height 0.15s, opacity 0.15s' }}
    />
  )
}
