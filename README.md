# FocusBoard – Task Management Dashboard

FocusBoard is a responsive task management dashboard designed to help users organize their daily work, manage priorities, and track productivity.

## Features

- **Dashboard Overview:** View total tasks, in-progress tasks, completed tasks, and completion percentage.
- **Task Management:** Create, edit, and delete tasks.
- **Search Tasks:** Quickly find tasks by title.
- **Status Filters:** Filter tasks by All, To do, In progress, and Completed.
- **Priority Filter:** Filter tasks according to priority.
- **Focus Notes Carousel:** Navigate through motivational productivity notes.
- **Local Storage:** Automatically save tasks in the browser so they remain available after refreshing.
- **Responsive Design:** Supports desktop, tablet, and mobile screen sizes.

## Tech Stack

- React.js
- JavaScript
- HTML5
- CSS3
- Vite
- Lucide React
- Browser Local Storage

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Visual Studio Code (recommended)

### Installation

1. Clone the repository:

   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   ```

2. Open the project folder:

   ```bash
   cd focusboard
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

## Production Build

To create an optimized production build, run:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
focusboard/
├── public/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── Header.jsx
│   │   ├── StatCard.jsx
│   │   ├── TaskList.jsx
│   │   ├── TaskItem.jsx
│   │   ├── TaskForm.jsx
│   │   ├── FilterBar.jsx
│   │   └── FocusNotes.jsx
│   ├── data/
│   │   └── sampleTasks.js
│   ├── hooks/
│   │   └── useTasks.js
│   ├── styles/
│   │   ├── dashboard.css
│   │   └── responsive.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── README.md
```

## Data Persistence

FocusBoard uses the browser's Local Storage to save task information. Tasks remain available after a page refresh in the same browser.

## Live Demo

_deployed application URL._

## Author

Developed as a Frontend Developer Trainee Assignment.
