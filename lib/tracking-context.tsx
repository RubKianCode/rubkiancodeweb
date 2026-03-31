"use client"

import React, { createContext, useContext, useState, useCallback } from "react"

export type TrackingCategory = 'heading' | 'subheading' | 'body' | 'button'
export type Lang = 'th' | 'en'

export interface TrackingValues {
  th: Record<TrackingCategory, number>
  en: Record<TrackingCategory, number>
}

interface TrackingContextValue {
  values: TrackingValues
  setValues: (values: TrackingValues) => void
  getTracking: (category: TrackingCategory, lang: Lang) => React.CSSProperties
  resetToDefaults: () => void
}

// Default values matching current hero-section code
export const DEFAULT_TRACKING: TrackingValues = {
  th: {
    heading:    0.05,   // was tracking-[0.05em] on h1
    subheading: 0.07,   // was tracking-[0.07em] on h2 subtitle
    body:       0.02,
    button:     0.05,
  },
  en: {
    heading:    0,      // was tracking-normal
    subheading: 0.025,  // tracking-wide
    body:       0,      // tracking-normal
    button:     0.025,  // tracking-wide
  },
}

const STORAGE_KEY = 'rk_tracking_values'

function loadValues(): TrackingValues {
  if (typeof window === 'undefined') return DEFAULT_TRACKING
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) return JSON.parse(stored)
  } catch {}
  return DEFAULT_TRACKING
}

function saveValues(values: TrackingValues) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(values))
  } catch {}
}

export function trackingStyle(value: number): React.CSSProperties {
  return value === 0 ? {} : { letterSpacing: `${value.toFixed(3)}em` }
}

const TrackingContext = createContext<TrackingContextValue>({
  values: DEFAULT_TRACKING,
  setValues: () => {},
  getTracking: () => ({}  as React.CSSProperties),
  resetToDefaults: () => {},
})

export function TrackingProvider({ children }: { children: React.ReactNode }) {
  const [values, setValuesState] = useState<TrackingValues>(() => loadValues())

  const setValues = useCallback((newValues: TrackingValues) => {
    setValuesState(newValues)
    saveValues(newValues)
  }, [])

  // Returns a React.CSSProperties object — works with dynamic values
  const getTracking = useCallback(
    (category: TrackingCategory, lang: Lang): React.CSSProperties => {
      const v = values[lang][category]
      return v === 0 ? {} : { letterSpacing: `${v.toFixed(3)}em` }
    },
    [values]
  )

  const resetToDefaults = useCallback(() => {
    setValuesState(DEFAULT_TRACKING)
    saveValues(DEFAULT_TRACKING)
  }, [])

  return (
    <TrackingContext.Provider value={{ values, setValues, getTracking, resetToDefaults }}>
      {children}
    </TrackingContext.Provider>
  )
}

export function useTracking() {
  return useContext(TrackingContext)
}
