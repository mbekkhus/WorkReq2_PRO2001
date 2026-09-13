# Vibe Studio - Work Requirement 2 - PRO2001 

Vibe Studio is a small multi-page React application. 

The application allows users to choose a color and mode on the Customize page. The selected preferences are then used to change the content and visual appearance of the Preview page. 

The original theme and mood concept is presented as Color and Mode in the interface. 


## Features 

- Three color options: Offset, Signal and Static 
- Three mode options: Quiet, Bright and Focus 
- A preview that changes based on the selected preferences 
- Shared state across multiple routes 
- Responsive layout for desktop and mobile 
- Accessible buttons with visible selected and focus state 


## Built with 

- React
- TypeScript 
- Vite 
- React Router 
- CSS 


## How to run 

install dependencies: 

```bash
npm install
```

Start the development server: 

```bash
npm run dev
```

Open the local URL shown in the terminal. 


## Shared State 

The preferences are stored together in a structured state object containing `color` and `mode`. 

The state is created in `App.tsx` and passed to the child routes through React Router´s `Outlet` context. This allows the selected preferences to remain available when the user moves between the Customize and Preview pages. 


## Custom Hooks

The application uses two related custom hooks in `usePreferences.ts`. 

`usePreferenceState` creates and updates the preference state. It provides the current preferences together with the `setColor` and `setMode` functions. 

`usePreferences` uses `useOutletContext` to give the route components access to the shared preference state without passing props through each component. 


## Quality Checks 

Run ESLint: 

```bash
npm run lint
```

Create a production build: 

```bash
npm run build
```