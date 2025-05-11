
## Features of app

### Dark/Light Mode Integration
- Implemented using `ThemeContext.jsx`
- Theme persists across page refreshes
- Applies to all components including Google Maps

###  Dynamic Google Maps
- Custom dark theme styling for maps
- Auto-switches between light/dark modes
- Optimized loading with lazy loading

###  Contact Form
- Form validation
- Responsive design
- Accessible form controls

###  Component Architecture
- Modular component structure
- Reusable UI components
- Context API for state management

##  Development Timeline

| Task                      | Time Spent |
|---------------------------|------------|
| Project Setup             | 1 hour     |
| Theme System              | 2 hours    |
| Map Integration           | 3 hours    |
| Contact Form Development  | 2 hours    |
| UI Polish & Responsiveness| 3 hours    |
| Testing & Debugging       | 2 hours    |
| **Total**                 | **13 hours** |

## Technical Implementation

- Built using **React.js** for modular UI structure.
- Styling is handled via **Tailwind CSS**, allowing responsive and dark mode-friendly components.
- Contact form includes client-side validation using controlled React inputs and state management.
- Dark mode is handled through a custom `ThemeContext`, allowing consistent theme application across the app.
- Google Maps is embedded using the **Google Maps JavaScript API**, and dynamically styled based on the active theme.
- When dark mode is enabled, the map switches to a **custom dark theme style** using the `styles` property in the Google Maps `MapOptions`.
- Lazy loading is implemented for the map to optimize performance and loading time.
- Component structure:
  - `ContactForm.jsx` – manages form state, validation, and styling.
  - `LocationSection.jsx` – handles map rendering and dark mode integration.

