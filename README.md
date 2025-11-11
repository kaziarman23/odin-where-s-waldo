# Photo Tag Game Frontend

This is the frontend for the "Where's the Character" photo tagging game, built with **Vite + React + Tailwind CSS**. It integrates with the backend API for character validation and high score submission.

## Features

- Clickable game image with targeting box
- Dropdown menu to select character
- Markers for found characters
- Timer tracking player time
- High score modal for submitting player name
- Responsive and compatible across screen sizes

## Project Structure

```
src/
├─ components/
│  ├─ GameImage.jsx      # main image & click handling
│  ├─ TargetBox.jsx      # box around click
│  ├─ Dropdown.jsx       # character selection dropdown
│  ├─ Marker.jsx         # marker for found character
│  ├─ Timer.jsx          # countdown / timer display
│  └─ ScoreModal.jsx     # prompt for name on completion
├─ App.jsx
├─ index.css
└─ main.jsx
```

## Setup & Run

1. **Clone the repository**

```bash
git clone https://github.com/kaziarman23/odin-where-s-waldo.git
cd odin-where-s-waldo
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure Tailwind** (already included if using this scaffold)

```bash
npx tailwindcss init -p
```

4. **Place game image**

- Add your image to `public/game.jpg`

5. **Run development server**

```bash
npm run dev
```

- App will open at `http://localhost:5173`
- Ensure the backend API is running at `http://localhost:4000`

## Notes

- Coordinates are normalized (0–1) relative to the image size for cross-device accuracy.
- The frontend expects the backend `/api/check` endpoint for validation and `/api/scores` for high score submission.
- Timer starts when the page loads and stops when all characters are found.
- After finishing, a modal prompts the player to submit their name and score.

## Deployment

- Can be deployed to Vercel, Netlify, or any static hosting service.
- Make sure to configure the API URL in fetch calls if backend is on a different domain.

## License

MIT
