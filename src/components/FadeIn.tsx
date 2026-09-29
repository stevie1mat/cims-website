'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

export default function FadeIn({ children, delay = 0 }: { children: ReactNode, delay?: number }) {
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (domRef.current) observer.unobserve(domRef.current)
        }
      })
    }, { threshold: 0.15 })
    
    if (domRef.current) observer.observe(domRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
