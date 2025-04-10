# CLAUDE.md - Cloud Native Amsterdam Website

## Commands
- `npm run start` - Run development server
- `npm run build` - Build production site
- `npm run serve` - Serve production build
- `npm run clean` - Clean Gatsby cache
- `npm run format` - Format code with Prettier
- `npm run lint` - Run ESLint (JS/JSX + MD files)
- `npm run lint:fix` - Fix linting issues

## Code Style
- **React Components**: Arrow functions required (`const Component = () => {}`)
- **Imports**: Organized by groups with newlines between, alphabetized
- **Formatting**: 100 char line length, 2 space indent, single quotes
- **Component Structure**: Each component has index.js and component.js/jsx
- **JSX Props**: Callbacks last, shorthand last, no alphabetical sorting
- **CSS**: Component-specific CSS in component folder
- **Error Handling**: Use React Error Boundaries for component-level errors
- **Images**: Use static imports with gatsby-plugin-image
- **Naming**: PascalCase for components, camelCase for functions/variables

## Azure Rule
- Use Azure best practices for Azure-related code/operations