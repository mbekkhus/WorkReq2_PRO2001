import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from 'react-router-dom'
import './index.css'
import App from './App'
import SettingsPage from './pages/SettingsPage'
import PreviewPage from './pages/PreviewPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/settings" replace />
      },
      {
        path: 'settings',
        element: <SettingsPage />
      },
      {
        path: 'preview',
        element: <PreviewPage />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)