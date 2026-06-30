"use client"

import { type MotionProps, motion } from "framer-motion"
import React, { useEffect, useRef, useState } from "react"
import { cn } from "../lib/utils"
import { useNavigate } from "react-router-dom"

interface AnimatedSpanProps extends MotionProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export const AnimatedSpan = ({ children, delay = 0, className, ...props }: AnimatedSpanProps) => (
  <motion.div
    animate={{ opacity: 1, y: 0 }}
    className={cn("grid text-sm font-normal tracking-tight", className)}
    initial={{ opacity: 0, y: -5 }}
    transition={{ duration: 0.3, delay: delay / 1000 }}
    {...(props as any)}
  >
    {children}
  </motion.div>
)

interface TypingAnimationProps extends MotionProps {
  children: string
  className?: string
  duration?: number
  delay?: number
  as?: React.ElementType
}

export const TypingAnimation = ({
  children,
  className,
  duration = 60,
  delay = 0,
  as: Component = "span",
  ...props
}: TypingAnimationProps) => {
  if (typeof children !== "string") {
    throw new Error("TypingAnimation: children must be a string. Received:")
  }

  // Use motion() wrapper for dynamic components in framer-motion 
  const MotionComponent = motion(Component as any);

  const [displayedText, setDisplayedText] = useState<string>("")
  const [started, setStarted] = useState(false)
  const elementRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true)
    }, delay)
    return () => clearTimeout(startTimeout)
  }, [delay])

  useEffect(() => {
    if (!started) {
      return
    }

    let i = 0
    const typingEffect = setInterval(() => {
      if (i < children.length) {
        setDisplayedText(children.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingEffect)
      }
    }, duration)

    return () => {
      clearInterval(typingEffect)
    }
  }, [children, duration, started])

  return (
    <MotionComponent
      className={cn("text-sm font-normal tracking-tight", className)}
      ref={elementRef}
      {...(props as any)}
    >
      {displayedText}
    </MotionComponent>
  )
}

interface TerminalProps {
  children: React.ReactNode
  className?: string
}

export const Terminal = ({ children, className }: TerminalProps) => {
  return (
    <div
      className={cn(
        "z-0 h-full max-h-[400px] w-full max-w-lg rounded-xl border border-border bg-background shadow-2xl",
        className,
      )}
    >
      <div className="flex flex-col gap-y-2 border-b border-border p-4 bg-zinc-900/50 rounded-t-xl">
        <div className="flex flex-row gap-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
      </div>
      <pre className="p-4">
        <code className="grid gap-y-1 overflow-auto font-mono">{children}</code>
      </pre>
    </div>
  )
}

export default function Opening() {
  const [inputValue, setInputValue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (inputValue.trim() === "npm install portofolio user") {
        setSubmitted(true);
        setTimeout(() => {
          navigate("/home");
        }, 7500); 
      } else {
        // If they type something else, we can just clear it or let them try again
        setInputValue("");
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center p-8 bg-zinc-950">
      <Terminal className="bg-zinc-950 text-zinc-100 border-zinc-800">
        {!submitted ? (
          <div className="flex items-center text-sm font-normal tracking-tight">
            <span className="mr-2 text-zinc-400">$</span>
            <input
              type="text"
              autoFocus
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent outline-none flex-1 text-zinc-100 font-mono"
              placeholder="npm install portofolio user"
            />
          </div>
        ) : (
          <>
            <div className="flex items-center text-sm font-normal tracking-tight">
              <span className="mr-2 text-zinc-400">$</span>
              <span>npm install portofolio user</span>
            </div>
            <AnimatedSpan delay={500} className="text-zinc-400">
              Fetching packages...
            </AnimatedSpan>
            <AnimatedSpan delay={1500} className="text-zinc-400">
              Installing dependencies:
            </AnimatedSpan>
            <AnimatedSpan delay={2000}>
              <span className="text-green-400">✓</span> @portofolio/ui
            </AnimatedSpan>
            <AnimatedSpan delay={2500}>
              <span className="text-green-400">✓</span> @portofolio/animations
            </AnimatedSpan>
            <AnimatedSpan delay={3000}>
              <span className="text-green-400">✓</span> @portofolio/data
            </AnimatedSpan>
            <AnimatedSpan delay={3500}>
              <span className="text-green-400">✓</span> @portofolio/assets
            </AnimatedSpan>
            <AnimatedSpan delay={4500} className="text-green-400">
              Success! Installed portofolio user
            </AnimatedSpan>
            <TypingAnimation delay={5000}>$ starting development server...</TypingAnimation>
            <AnimatedSpan delay={6000} className="text-blue-400">
              ▲ Ready
            </AnimatedSpan>
            <AnimatedSpan delay={6500} className="text-zinc-400">
              - Redirecting to Home...
            </AnimatedSpan>
          </>
        )}
      </Terminal>
    </div>
  )
}
