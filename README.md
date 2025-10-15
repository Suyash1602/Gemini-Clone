# Gemini-Clone

A modern, responsive AI-powered chat application inspired by Google's Gemini. This project allows users to interact with an AI assistant, ask questions, brainstorm ideas, and get instant responses.

## Features

- **Responsive Design:** Works seamlessly on desktop and mobile devices.
- **AI Chat:** Enter prompts and receive intelligent responses powered by Google's Gemini API.
- **Clean UI:** Minimalist and user-friendly interface.
- **Contextual Sidebar:** Access recent chats and settings.
- **Keyboard Shortcuts:** Press Enter to send prompts.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Suyash1602/Gemini-Clone.git
   cd Gemini-Clone
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the development server:**

   ```sh
   npm run dev
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:5173
   ```

## Project Structure

```
Gemini-Clone/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── assets/
│   ├── components/
│   │   ├── Main/
│   │   │   ├── Main.jsx
│   │   │   └── Main.css
│   │   └── SideBar/
│   │       ├── SideBar.jsx
│   │       └── SideBar.css
│   ├── config/
│   │   └── gemini.js
│   └── context/
│       └── Context.jsx
├── package.json
├── vite.config.js
└── README.md
```

## Configuration

- The Gemini API key is set in [`src/config/gemini.js`](src/config/gemini.js).
- You can update the UI and logic in the [`src/components/`](src/components/) directory.

## Usage

- Type your prompt in the input field at the bottom of the page.
- Press **Enter** or click the send button to submit.
- View responses instantly in the chat area.

## License

This project is for educational purposes only.

---

**Note:** This project uses the [@google/genai](https://www.npmjs.com/package/@google/genai) SDK for AI responses.
