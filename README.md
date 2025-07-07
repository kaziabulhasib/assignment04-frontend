# Library Management Website

A full-stack Library Management System built with React, Redux Toolkit, RTK Query, TypeScript, Express, and MongoDB.

## Features

- 📚 **Book Management**: Add, edit, delete, and view books.
- 🔍 **Pagination**: Browse books with server-side pagination.
- 📖 **Borrow Books**: Borrow books with quantity and due date.
- 📊 **Borrow Summary**: View a summary of all borrowed books.
- 🖥️ **Responsive UI**: Clean, responsive design using Tailwind CSS.
- ⚡ **Instant Updates**: Book list updates automatically after add/edit/delete/borrow.
- 🛠️ **TypeScript**: Type-safe codebase for both frontend and backend.

## Tech Stack

- **Frontend**: React, Redux Toolkit, RTK Query, React Hook Form, Tailwind CSS, SweetAlert2, TypeScript, Vite
- **Backend**: Express, MongoDB, Mongoose, TypeScript

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB (local or cloud)

### Installation

#### 1. Clone the repository

```bash
git clone <repo-url>
cd assignment4-library-management
```

#### 2. Install dependencies

```bash
cd backend
npm install

cd ../frontend
npm install
```

#### 3. Configure Environment

- Create a `.env` file in the `backend` folder with your MongoDB URI 

#### 4. Start the backend server

```bash
cd backend
npm run dev
```

#### 5. Start the frontend dev server

```bash
cd frontend
npm run dev
```

- The frontend will be available at `http://localhost:5173`
- The backend will run at `http://localhost:5000`

## Usage

- Use the **Navbar** to navigate between All Books, Add Book, and Borrow Summary.
- Add, edit, or delete books from the All Books page.
- Borrow books using the borrow button.
- View borrow statistics on the Borrow Summary page.

## Assignment Requirements Coverage

- [x] Book CRUD (Create, Read, Update, Delete)
- [x] Pagination (server-side)
- [x] Borrow book with quantity and due date
- [x] Borrow summary/aggregation
- [x] Responsive UI
- [x] TypeScript everywhere
- [x] Clean project structure

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
