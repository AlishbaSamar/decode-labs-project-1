# DecodeLabs Full-Stack Internship Project

**Batch 2026 | Complete Full-Stack Web Application**

A modern, responsive full-stack web application featuring a beautiful frontend interface and a robust backend API for internship applications.

## Features
- **Frontend**: Semantic HTML5, CSS Grid + Flexbox, Mobile-First responsive design
- **Backend**: Node.js + Express API with CORS support
- **Form Handling**: Client and server-side validation, async submission
- **UI/UX**: Interactive hamburger menu, smooth scrolling, hover animations
- **Professional Design**: Custom color palette, modern styling, accessibility-focused

## Tech Stack
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js, Express.js, CORS
- **Validation**: Regex-based email validation, input sanitization

## Project Structure
```
decode_labs/          # Frontend
├── index.html
├── styles.css
├── script.js
└── README.md

project2-backend/     # Backend API
├── server.js
├── package.json
└── (node_modules)
```

## How to Run

### Prerequisites
- Node.js installed on your system
- A web browser

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd project2-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
   The API will run on `http://localhost:5000`

### Frontend
1. Open `decode_labs/index.html` in your web browser
2. The frontend will connect to the backend API for form submissions

### API Endpoints
- `GET /` - Test endpoint
- `POST /add-user` - Submit internship application
- `GET /users` - Retrieve all applications
- `PUT /update-user/:id` - Update an application
- `DELETE /delete-user/:id` - Delete an application

## Live Demo
[Frontend Demo](https://your-username.github.io/decode-labs/)

Made with ❤️ for DecodeLabs Internship Program 2026