# 💡 Lights Out Puzzle Game (React)

## Project Overview
The **Lights Out Puzzle Game** is an interactive 5x5 grid based puzzle built using React.  
The objective of the game is to turn all the lights OFF by clicking on tiles. Each click toggles the selected light and its adjacent neighbors (up, down, left, right).

This project demonstrates key React concepts such as:
- Components
- State management (useState)
- Props
- Event handling
- Lifting state up
- Immutability
- Game logic design

## Objective of the Game
The goal is simple:
Turn all lights OFF on the grid.

When all lights are OFF, the player wins the game.

## How to Play
- The game starts with a randomized 5x5 grid of lights
- Click any light to toggle it ON/OFF
- Clicking a light also toggles:
  - Top neighbor
  - Bottom neighbor
  - Left neighbor
  - Right neighbor
- Continue playing until all lights are OFF
- You win when the entire grid is OFF

## Features
- 5x5 interactive grid system
- Toggle logic (self + neighbors)
- Move counter tracking
- Win detection system
- Difficulty levels:
  - Easy
  - Medium
  - Hard
- Undo last move functionality
- New Game / Reset button
- Always solvable puzzle generation
- Modern glowing UI design
- Responsive layout

## Game Logic Explanation
The game uses a structured toggle system:

1. The board is represented as an array of 25 boolean values
2. Each value represents ON (true) or OFF (false)
3. Clicking a cell toggles:
   - Itself
   - Adjacent cells (up, down, left, right)

### Solvability Logic
- The puzzle is generated from an empty board
- Random valid moves are applied to ensure the puzzle is always solvable
- This guarantees that every generated state can be solved by the player

## Component Structure

### Game.jsx
- Main component
- Manages all state:
  - lights array
  - move count
  - history (for undo)
  - difficulty level
- Handles game logic and win condition

### Grid.jsx
- Renders 5x5 grid layout
- Receives props from Game component
- Passes click events to Light component

### Light.jsx
- Represents a single cell
- Handles UI rendering
- Shows ON/OFF state visually
- Triggers click events

## State Management
- State is stored in `Game.jsx`
- Passed down using props
- Updates are handled immutably (new arrays are created instead of modifying existing ones)

## Core Functions
- `applyToggle()` → toggles a cell and its neighbors
- `generateSolvableBoard()` → creates a solvable puzzle
- `toggleLight()` → handles user click
- `checkWin()` → checks if all lights are OFF
- `undo()` → restores previous state

## Installation & Setup

### 1. Install dependencies
npm install
### 2. Run development server
npm run dev
### 3.Build for Production
npm run build

## Project Structure
src/
 ├── components/
 │    ├── Game.jsx
 │    ├── Grid.jsx
 │    └── Light.jsx
 ├── App.jsx
 └── main.jsx

## Concepts Demonstrated
React functional components
useState hook
Props drilling
Event handling
State lifting
Immutable state updates
Game logic implementation

## Discussion Questions

### 1. Why is “lifting state up” necessary in this project?
Lifting state up is necessary because the Game component needs to manage the entire game state including the board and history. This allows features like undo and win detection to work properly from a single source of truth.

### 2. Why is immutability important when updating the lights array?
Immutability is important because React detects changes by comparing references. If we directly modify the array, React may not rerender correctly. Creating a new copy ensures proper state updates and UI rendering.

### 3. How is state structured in this application?
- Game.jsx → holds main state (lights, moves, history, difficulty)
- Grid.jsx → receives data via props and renders grid
- Light.jsx → handles UI display and click interaction

State flows from Game → Grid → Light.

### 4. What was the most challenging part of the project?
The most challenging part was implementing correct neighbor toggling logic in a 5x5 grid and ensuring the puzzle is always solvable. Managing index calculations and state updates was also complex.

## Author
Ammad Ali
