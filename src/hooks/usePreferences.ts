import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'

export type Color = 'offset' | 'signal' | 'static'
export type Mode = 'quiet' | 'bright' | 'focus'

export interface Preferences {
  color: Color
  mode: Mode
}

export function usePreferenceState() {
  const [preferences, setPreferences] = useState<Preferences>({
    color: 'offset',
    mode: 'quiet'
  })

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