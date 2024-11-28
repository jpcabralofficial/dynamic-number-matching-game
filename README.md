<!-- @format -->

# Dynamic Number Matching Game - Next.js

This is a memory matching game built with [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com/), where the user attempts to match pairs of numbers on a shuffled board. The game tracks the number of turns and displays a "Congratulations!" message when all pairs are matched.

## Project Setup

### 1. Install Dependencies

To get started, you need to install the project dependencies. You can use one of the following commands depending on your preferred package manager:

- Using **npm**:

```bash
npm install
# or
yarn install
```

This will install all the required packages for the project, including next, react, react-dom, and tailwindcss.

2. Running the Development Server
   After the dependencies are installed, run the development server using one of the following commands:

```bash
npm run dev
# or
yarn dev
```

This will start the development server, and you can open the game in your browser at http://localhost:3000.

3. Start Editing
   You can start editing the page by modifying the relevant components and hooks:

The main page logic is inside app/page.tsx.

The game logic is located in the hooks/useGameModel.ts file.

The UI is styled using Tailwind CSS and is located in components/GameBoard.tsx.

The app auto-updates in your browser as you modify the files.

Project Structure
The project follows a modular structure using the Model-View-Controller (MVC) pattern. The code is organized into different components, hooks, and views for maintainability and scalability.

Here’s an overview of the project structure:

```bash
/components
  └── GameBoard.tsx        # Main UI component for displaying the game board, handling user input, and interactions

/hooks
  └── useGameModel.ts      # Custom hook for managing game state, logic for selecting cards, matching pairs, and tracking turns

/ app
  └── page.tsx            # Main page file that renders the GameBoard component and initializes the game

/styles
  └── globals.css         # Global styles (including Tailwind configuration)

/public
  └── (assets like images or static files can go here)
```

Components
GameBoard.tsx: This is the main component where the game board is displayed. It handles user interactions such as selecting cards, updating the UI, and displaying the game results (turns and "Congratulations!").

### Hooks

- **useGameModel.ts**: The `useGameModel` hook contains all the game logic, including the following features:
  - **Card Generation and Shuffling**: Generates pairs of numbers based on the `maxNumber` provided by the user and shuffles them.
  - **Card Selection**: Handles the selection of two cards, checks if they match, and updates the state of the game.
  - **Turns Tracking**: Keeps track of the number of turns the user takes to complete the game.
  - **Game Over Logic**: Detects when all pairs are matched and triggers the "game over" condition to display a congratulations message.
  - **Game Reset**: Provides the ability to reset the game at any point.

### Tailwind CSS

- This project uses **Tailwind CSS** for styling. All components are styled using Tailwind utility classes, which makes it easy to customize and maintain the UI.

### Pages

- **page.tsx**: The main entry point for the app, rendering the `GameBoard` component and initializing the game logic.

## Features

- **User Input**: The user can input a maximum number (`n`) that determines the number range on the cards.
- **Card Generation**: The app generates a shuffled list of pairs of numbers from 1 to `n`. These cards are displayed face down initially.
- **Game Board**: The user clicks on two cards at a time. If the cards match, they remain face up. If they don't, they will flip back face down.
- **Game Loop**: The game continues until all pairs are matched.
- **Score and Turns**: The app tracks and displays how many turns it took the user to match all the pairs.
- **Congratulations Message**: A message is shown when all pairs are matched successfully.
- **Reset Game**: The user can reset the game at any time to start a new round with a different `maxNumber`.
- **Responsive UI**: The app is styled with Tailwind CSS and is responsive for mobile and desktop devices.

### Tailwind CSS Configuration

- This project uses **Tailwind CSS** for styling. It’s set up via the PostCSS configuration. You can customize the theme by modifying the `tailwind.config.js` file.

Visit:

```bash
https://dynamic-number-matching-game.vercel.app/
```

Learn More
To learn more about Next.js, take a look at the following resources:

Next.js Documentation - learn about Next.js features and API.
Learn Next.js - an interactive Next.js tutorial.
You can check out the Next.js GitHub repository - your feedback and contributions are welcome!

Deploy on Vercel
To deploy this app on Vercel:

Push the project to your GitHub repository.
Go to Vercel and import the project.
Click Deploy and your app will be live.
Check out the Next.js deployment documentation for more details.

License
This project is open source and available under the MIT License.
