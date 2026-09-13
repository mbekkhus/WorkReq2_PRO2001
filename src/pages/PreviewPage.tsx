import {
  usePreferences,
  type Mode
} from '../hooks/usePreferences'

const modeContent: Record<
  Mode,
  {
    label: string
    heading: string
    text: string
  }
> = {
  quiet: {
    label: 'Quiet mode',
    heading: 'Take it slow.',
    text: 'A calm space with room to breathe.'
  },
  bright: {
    label: 'Bright mode',
    heading: 'Make some noise.',
    text: 'A playful space with a little more energy.'
  },
  focus: {
    label: 'Focus mode',
    heading: 'Clear the noise.',
    text: 'A focused space made for getting things done.'
  }
}

export default function PreviewPage() {
  const { preferences } = usePreferences()
  const content = modeContent[preferences.mode]

  return (
    <section className="preview-page">
      <header className="preview-heading">
        <h2>Here’s your space</h2>
        <p>
          Your choices shape the color and character of the preview.
        </p>
      </header>

      <div
        className={`preview-card color-${preferences.color} mode-${preferences.mode}`}
      >
        <p className="preview-mode">{content.label}</p>

        <h3>{content.heading}</h3>

        <p className="preview-text">{content.text}</p>

        <div className="preview-details">
          <span>{preferences.color}</span>
          <span>{preferences.mode}</span>
        </div>
      </div>
    </section>
  )
}