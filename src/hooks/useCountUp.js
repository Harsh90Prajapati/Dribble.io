import { useEffect, useState } from 'react'

/**
 * Animates a number from 0 to `target` once `start` becomes true.
 * Respects prefers-reduced-motion by jumping straight to the target.
 */
export default function useCountUp(target, start, duration = 1600, decimals = 0) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const factor = Math.pow(10, decimals)

    if (reduceMotion) {
      setValue(target)
      return
    }

    let startTime = null
    let frame

    const tick = (timestamp) => {
      if (startTime === null) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target * factor) / factor)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [start, target, duration, decimals])

  return value
}
