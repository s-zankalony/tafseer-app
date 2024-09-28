# Tafseer Al-Quran Al-Kareem

This project is a web application for Tafseer Al-Quran Al-Kareem by Sheikh Yassin Roushdy showing video from dedicated Youtube channel https://www.youtube.com/@hmohameda. It is built using React and Vite, with Tailwind CSS for styling.

## Project Structure

.eslintrc.cjs
.gitignore
.vscode/
settings.json
index.html
package.json
postcss.config.js
public/
\_redirects
README.md
src/
App.css
App.jsx
assets/
functions.jsx
links.js
playlists.js
sheikhBiography.js
tafseerIntro.js
components/
About.jsx
Biography.jsx
context.jsx
DisplayLinks.jsx
Layout.jsx
Navbar.jsx
OneLink.jsx
pagination/
Playlists.jsx
reducer.jsx
Search.jsx
Sidebar2.jsx
TafseerIntroPage.jsx
index.css
main.jsx
tailwind.config.js
vite.config.js

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Installation

1. Clone the repository:

```sh
git clone https://github.com/your-username/tafseer-al-quran.git
cd tafseer-al-quran
```

2. Install the dependencies:

```sh
npm install
```

### Running the Project

To start the development server, run:

```sh
npm run dev
```

This will start the Vite development server and you can view the application at `http://localhost:3000`.

### Building the Project

To build the project for production, run:

```sh
npm run build
```

The built files will be in the [`dist`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Fsameh%2Fcode%2FGithub-Repos%2Ftafseer%2Ftafseer-app%2Fdist%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22b1c699c9-b1ca-4fc5-92a7-9cb0babb36f3%22%5D '/home/sameh/code/Github-Repos/tafseer/tafseer-app/dist') directory.

### Linting

To lint the project, run:

```sh
npm run lint
```

## Project Components

### Main Components

- **App.jsx**: The main application component that sets up the routes.
- **Layout.jsx**: The layout component that includes the [`Navbar`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Fsameh%2Fcode%2FGithub-Repos%2Ftafseer%2Ftafseer-app%2Fsrc%2Fcomponents%2FLayout.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A0%2C%22character%22%3A7%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Fsameh%2Fcode%2FGithub-Repos%2Ftafseer%2Ftafseer-app%2Fsrc%2Fcomponents%2FNavbar.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A6%2C%22character%22%3A6%7D%7D%5D%2C%22b1c699c9-b1ca-4fc5-92a7-9cb0babb36f3%22%5D 'Go to definition') and [`Sidebar2`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Fsameh%2Fcode%2FGithub-Repos%2Ftafseer%2Ftafseer-app%2Fsrc%2Fcomponents%2FSidebar2.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A11%2C%22character%22%3A6%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Fsameh%2Fcode%2FGithub-Repos%2Ftafseer%2Ftafseer-app%2Fsrc%2Fcomponents%2FLayout.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A1%2C%22character%22%3A23%7D%7D%5D%2C%22b1c699c9-b1ca-4fc5-92a7-9cb0babb36f3%22%5D 'Go to definition').
- **Navbar.jsx**: The navigation bar component.
- **Sidebar2.jsx**: The sidebar component.
- **DisplayLinks.jsx**: Component to display links.
- **About.jsx**: Component for the "About" page.
- **Playlists.jsx**: Component for the "Playlists" page.
- **Biography.jsx**: Component for the "Biography" page.
- **TafseerIntroPage.jsx**: Component for the "Tafseer Introduction" page.

### Context and State Management

- **context.jsx**: Provides global context for the application.
- **reducer.jsx**: Reducer for managing state.

### Assets

- **functions.jsx**: Utility functions.
- **links.js**: Data for links.
- **playlists.js**: Data for playlists.
- **sheikhBiography.js**: Data for Sheikh's biography.
- **tafseerIntro.js**: Data for Tafseer introduction.

## Styling

The project uses Tailwind CSS for styling. Configuration can be found in [`tailwind.config.js`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Fsameh%2Fcode%2FGithub-Repos%2Ftafseer%2Ftafseer-app%2Ftailwind.config.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22b1c699c9-b1ca-4fc5-92a7-9cb0babb36f3%22%5D '/home/sameh/code/Github-Repos/tafseer/tafseer-app/tailwind.config.js').

## ESLint Configuration

The project uses ESLint for linting. Configuration can be found in [`.eslintrc.cjs`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Fsameh%2Fcode%2FGithub-Repos%2Ftafseer%2Ftafseer-app%2F.eslintrc.cjs%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22b1c699c9-b1ca-4fc5-92a7-9cb0babb36f3%22%5D '/home/sameh/code/Github-Repos/tafseer/tafseer-app/.eslintrc.cjs').

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For any inquiries, please contact Sameh El Zankalony at [sameh@zankalony.com](mailto:sameh@zankalony.com).

# Contributions are Welcome!

Feel free to contribute to this project.
