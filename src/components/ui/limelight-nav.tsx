"use client"

import * as React from "react"
import { useLayoutEffect, useRef, useState } from "react"
import { cn } from "../../lib/utils"
import { useLocation, useNavigate } from "react-router-dom"

export interface NavItem {
  id: string
  label: string
  path: string
}

export interface LimelightNavProps {
  items: NavItem[]
  className?: string
  limelightClassName?: string
}

export const LimelightNav = ({
  items,
  className,
  limelightClassName,
}: LimelightNavProps) => {
  const location = useLocation()
  const navigate = useNavigate()
  
  // Find active index based on current path
  const defaultActiveIndex = items.findIndex(item => location.pathname === item.path)
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex >= 0 ? defaultActiveIndex : 0)
  const [isReady, setIsReady] = useState(false)
  const navItemRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const limelightRef = useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    const idx = items.findIndex(item => location.pathname === item.path)
    if (idx >= 0) setActiveIndex(idx)
  }, [location.pathname, items])

  useLayoutEffect(() => {
    if (items.length === 0) {
      return
    }

    const limelight = limelightRef.current
    const activeItem = navItemRefs.current[activeIndex]

    if (limelight && activeItem) {
      const newLeft = activeItem.offsetLeft + activeItem.offsetWidth / 2 - limelight.offsetWidth / 2
      limelight.style.left = `${newLeft}px`

      if (!isReady) {
        setTimeout(() => setIsReady(true), 50)
      }
    }
  }, [activeIndex, isReady, items])

  if (items.length === 0) {
    return null
  }

  return (
    <nav
      className={cn(
        "relative inline-flex items-center h-12 rounded-xl bg-surface-low/30 backdrop-blur-md ",
        className,
      )}
    >
      {items.map((item, index) => (
        <a
          className={cn(
            "relative z-20 flex h-full cursor-pointer items-center justify-center px-4 py-2 text-sm font-medium transition-colors duration-200",
            activeIndex === index ? "text-primary" : "text-muted-foreground hover:text-foreground"
          )}
          key={item.id}
          onClick={(e) => {
            e.preventDefault()
            navigate(item.path)
          }}
          ref={el => {
            navItemRefs.current[index] = el
          }}
          role="button"
          tabIndex={0}
        >
          {item.label}
        </a>
      ))}

      <div
        className={cn(
          "absolute top-0 z-10 w-11 h-[3px] rounded-full bg-primary shadow-[0_10px_15px_var(--color-primary)]",
          isReady ? "transition-[left] duration-300 ease-in-out" : "",
          limelightClassName,
        )}
        ref={limelightRef}
        style={{ left: "-999px" }}
      >
        <div className="absolute left-[-30%] top-[3px] w-[160%] h-12 [clip-path:polygon(5%_100%,25%_0,75%_0,95%_100%)] bg-gradient-to-b from-primary/20 to-transparent pointer-events-none" />
      </div>
    </nav>
  )
}
