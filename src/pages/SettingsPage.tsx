import { usePreferences } from '../hooks/usePreferences'
import { NavLink } from 'react-router-dom'

export default function SettingsPage() {
  const {
    preferences,
    setColor,
    setMode
  } = usePreferences()

  return (
    <section>
      <h2>Make it yours</h2>

      <p>
        Choose a color and a mode, then head over to the preview
        to see how your choices affect the vibe of this place.
      </p>

      <fieldset>
        <legend>Color</legend>

        <div className="option-grid">
          <button
            type="button"
            className={
              preferences.color === 'offset'
                ? 'option-button selected'
                : 'option-button'
            }
            aria-pressed={preferences.color === 'offset'}
            onClick={() => setColor('offset')}
          >
            Offset
          </button>

          <button
            type="button"
            className={
              preferences.color === 'signal'
                ? 'option-button selected'
                : 'option-button'
            }
            aria-pressed={preferences.color === 'signal'}
            onClick={() => setColor('signal')}
          >
            Signal
          </button>

          <button
            type="button"
            className={
              preferences.color === 'static'
                ? 'option-button selected'
                : 'option-button'
            }
            aria-pressed={preferences.color === 'static'}
            onClick={() => setColor('static')}
          >
            Static
          </button>
        </div>
      </fieldset>

      <fieldset>
        <legend>Mode</legend>

        <div className="option-grid">
          <button
            type="button"
            className={
              preferences.mode === 'quiet'
                ? 'option-button selected'
                : 'option-button'
            }
            aria-pressed={preferences.mode === 'quiet'}
            onClick={() => setMode('quiet')}
          >
            Quiet
          </button>

          <button
            type="button"
            className={
              preferences.mode === 'bright'
                ? 'option-button selected'
                : 'option-button'
            }
            aria-pressed={preferences.mode === 'bright'}
            onClick={() => setMode('bright')}
          >
            Bright
          </button>

          <button
            type="button"
            className={
              preferences.mode === 'focus'
                ? 'option-button selected'
                : 'option-button'
            }
            aria-pressed={preferences.mode === 'focus'}
            onClick={() => setMode('focus')}
          >
            Focus
          </button>
        </div>
      </fieldset>

      <div className="settings-footer">
  <p
    className="selection-summary"
    aria-live="polite"
  >
    <span>Selected</span>
    <strong>{preferences.color}</strong>
    <span aria-hidden="true">·</span>
    <strong>{preferences.mode}</strong>
  </p>

  <NavLink
    className="page-link"
    to="/preview"
  >
    View preview
    <span aria-hidden="true">→</span>
  </NavLink>
</div>
    </section>
  )
}