import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'

export type Color = 'offset' | 'signal' | 'static'
export type Mode = 'quiet' | 'bright' | 'focus'

export interface Preferences {
  color: Color
  mode: Mode
}

const STORAGE_KEY = 'vibe-studio-preferences'

const defaultPreferences: Preferences = {
  color: 'offset',
  mode: 'quiet'
}

function loadPreferences(): Preferences {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : defaultPreferences
  } catch {
    return defaultPreferences
  }
}

export function usePreferenceState() {
  const [preferences, setPreferences] = useState<Preferences>(loadPreferences)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences))
  }, [preferences])

  function setColor(color: Color) {
    setPreferences(previous => ({
      ...previous,
      color
    }))
  }

  function setMode(mode: Mode) {
    setPreferences(previous => ({
      ...previous,
      mode
    }))
  }

  return {
    preferences,
    setColor,
    setMode
  }
}

type PreferenceContext = ReturnType<typeof usePreferenceState>

export function usePreferences() {
  return useOutletContext<PreferenceContext>()
}