# Assignment 6 - Mini Project (Notes App)

## 📌 Project Overview
This is a simple **Notes Application** built using React. It allows users to create, edit, and delete notes. This project combines all previous concepts like state management, event handling, and UI updates.

---

## ⚙️ Tech Stack
- React (Vite)
- JavaScript (ES6+)
- HTML5
- CSS3
- Node.js
- Express

---

## 🧩 Features

### ➕ Add Notes
- User can create new notes
- Notes are stored in state

### ❌ Delete Notes
- User can remove unwanted notes

### ✏️ Edit Notes
- User can update existing notes

---

## 🧠 Concepts Used

### 1. useState
- Used to manage notes array
- Handles add, delete, and edit operations

### 2. Event Handling
- `onClick` for buttons
- `onChange` for input fields

### 3. Array Manipulation
- `.map()` used to display notes
- `filter()` used for delete
- update logic used for edit

---

## 📁 Folder Structure

```
my-notes-app/
│
├── frontend/
│   └── src/
│       ├── components/
│       │   ├── NoteForm.jsx
│       │   └── NoteCard.jsx
│       │
│       ├── pages/
│       │   └── Home.jsx
│       │
│       ├── assets/
│       │   └── images/
│       │
│       ├── api/
│       │   └── NoteApi.jsx
│       │
│       ├── App.jsx
│       └── main.jsx
│
├── backend/
│   └── server.js
│
└── README.md
```

---

## ⚙️ Setup Instructions

### Frontend Setup

```bash
npm create vite@latest frontend
```

```bash
cd frontend
```

```bash
npm install
```

```bash
npm run dev
```

---

### Backend Setup

```bash
mkdir backend
```

```bash
cd backend
```

```bash
npm init -y
```

```bash
npm install express
```

```bash
npm install -D nodemon
```

```bash
node server.js
```

or

```bash
npx nodemon server.js
```

---

### Install Axios

```bash
npm install axios
```

---

## 🖥️ Output Preview

📸 Add your screenshot here:

```
## 🖥️ Output Preview

### Home Page
![Home](public/screenshots/home.png)

### Add Note
![Add Note](public/screenshots/add-note.png)


### Final Output
![DataBase](public/screenshots/Database.png)
```

---

## 🎯 How It Works

1. User adds a note using input field
2. Note is stored in state array
3. Notes are displayed using `.map()`
4. User can:
   - Delete note using filter
   - Edit note using update function

---

## ✅ Status

✔ Add Notes feature completed  
✔ Delete Notes feature completed  
✔ Edit Notes feature completed  
✔ State management implemented
