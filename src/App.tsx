import { NavLink, Outlet } from 'react-router-dom'
import { usePreferenceState } from './hooks/usePreferences'

export default function App() {
  const preferenceState = usePreferenceState()

  return (
    <>
      <header className="site-header">
        <div className="site-header-inner">
          <div className="site-brand">
            <h1>Vibe Studio</h1>
            <p>A small space that shifts with you.</p>
          </div>

          <nav aria-label="Main navigation">
            <NavLink to="/settings">
              Customize
            </NavLink>

            <NavLink to="/preview">
              Preview
            </NavLink>
          </nav>
        </div>
      </header>

      <main>
        <Outlet context={preferenceState} />
      </main>
    </>
  )
}