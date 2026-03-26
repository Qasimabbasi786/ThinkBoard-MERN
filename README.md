# ThinkBoard - MERN Notes Application

A modern, full-stack notes application built with the MERN stack (MongoDB, Express, React, Node.js). ThinkBoard allows users to create, read, update, and delete notes with a responsive and intuitive user interface.

## 🎯 Features

- **Create Notes**: Easily create new notes with a clean and simple interface
- **View All Notes**: Browse all your notes in a beautiful card-based layout
- **View Note Details**: Click on any note to view its complete content
- **Update Notes**: Edit existing notes to modify their content
- **Delete Notes**: Remove notes you no longer need
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Rate Limiting**: Built-in rate limiting to protect the backend from abuse
- **Real-time Updates**: Changes are reflected immediately across the application

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for building REST APIs
- **MongoDB** - NoSQL database for data persistence
- **Upstash Redis** - Distributed cache for rate limiting
- **Nodemon** - Development tool for auto-reloading

### Frontend
- **React** - UI library for building interactive user interfaces
- **Vite** - Next-generation frontend build tool
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Axios** - HTTP client for API communication
- **ESLint** - Code quality and consistency

## 📁 Project Structure

```
Mern-ThinkBoard/
│
├── backend/
│   ├── src/
│   │   ├── server.js              # Main server entry point
│   │   ├── config/
│   │   │   ├── db.js              # MongoDB connection configuration
│   │   │   └── upstash.js         # Redis cache configuration
│   │   ├── controllers/
│   │   │   └── notesController.js # Business logic for notes operations
│   │   ├── middleware/
│   │   │   └── rateLimiter.js     # Rate limiting middleware
│   │   ├── models/
│   │   │   └── note.js            # Note database schema
│   │   └── routes/
│   │       └── notesRoutes.js     # API endpoints for notes
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── main.jsx               # React entry point
    │   ├── App.jsx                # Main App component
    │   ├── App.css                # App styles
    │   ├── index.css              # Global styles
    │   ├── components/
    │   │   ├── Navbar.jsx         # Navigation component
    │   │   ├── NoteCard.jsx       # Single note card component
    │   │   ├── NotesNotFound.jsx  # Empty state component
    │   │   └── RateLimitedUI.jsx  # Rate limit error component
    │   ├── lib/
    │   │   ├── axios.js           # Axios configuration
    │   │   └── utils.js           # Utility functions
    │   └── pages/
    │       ├── HomePage.jsx       # Home page - display all notes
    │       ├── CreatePage.jsx     # Create new note page
    │       └── NoteDetailPage.jsx # View/edit note detail page
    ├── index.html
    ├── vite.config.js
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── eslint.config.js
    └── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account or local MongoDB instance
- Upstash Redis account (for rate limiting feature)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory with the following variables:
```
MONGODB_URI=your_mongodb_connection_string
UPSTASH_REDIS_URL=your_upstash_redis_url
PORT=5000
```

4. Start the development server:
```bash
npm run dev
```
Or manually:
```bash
nodemon src/server.js
```

The backend server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the frontend directory (if needed):
```
VITE_API_BASE_URL=http://localhost:5000
```

4. Start the development server:
```bash
npm run dev
```

The frontend will typically run on `http://localhost:5173`

## 📝 API Endpoints

### Notes API

- **GET `/api/notes`** - Get all notes
- **GET `/api/notes/:id`** - Get a specific note by ID
- **POST `/api/notes`** - Create a new note
  - Request body: `{ title: string, content: string }`
- **PUT `/api/notes/:id`** - Update an existing note
  - Request body: `{ title: string, content: string }`
- **DELETE `/api/notes/:id`** - Delete a note

## 🔒 Rate Limiting

The application implements rate limiting using Upstash Redis to protect the backend from excessive requests. Clients exceeding the rate limit will receive an appropriate error message on the frontend.

## 🎨 Styling

The frontend uses **Tailwind CSS** for styling, providing a modern and responsive design. The utility-first approach allows for rapid UI development while maintaining consistency and performance.

## 📱 Responsive Design

ThinkBoard is fully responsive and works seamlessly across different screen sizes:
- Desktop (1024px and above)
- Tablet (768px to 1023px)
- Mobile (below 768px)

## 🤝 Contributing

Contributions are welcome! If you'd like to improve ThinkBoard, feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License. Feel free to use it for personal and commercial projects.

## 👨‍💻 Author

Created as a personal project to practice full-stack MERN development.

## 📧 Support

If you encounter any issues or have questions about the project, feel free to reach out or open an issue.

---

**Happy coding! 🚀**
