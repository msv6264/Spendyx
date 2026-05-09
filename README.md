# Spendyx 💰

Spendyx is a powerful expense tracking application built on the MERN stack. It helps you manage your finances with ease, providing features for authentication and expense management.

<img width="1919" height="866" alt="image" src="https://github.com/user-attachments/assets/ac6580d3-eb5c-4f1b-b1ea-afc2788d44b3" />

## ✨ Features

- **User Authentication**: Secure signup and login functionality.
- **Expense Management**: Track your spending with detailed expense entries.
- **MERN Stack**: Built using MongoDB, Express, React, and Node.js.
- **RESTful API**: Well-structured API endpoints for frontend integration.

## 🚀 Tech Stack

### Backend
- **Express**: Fast, unopinionated web framework.
- **Mongoose**: Elegant MongoDB object modeling.
- **Bcrypt**: Password hashing for security.
- **Dotenv**: Environment variable management.

### Frontend
- **React**: Modern UI library for building interfaces.
- **Vite**: Next generation frontend tooling.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **React Router**: Declarative routing for React applications.
- **Lucide React**: Beautiful & consistent icons.

## 🛠️ Getting Started

### Prerequisites
- Node.js installed
- MongoDB URI

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Spendyx
   ```

2. **Setup Backend**
   ```bash
   cd Backend
   npm install
   ```
   Create a `.env` file in the `Backend` directory:
   ```env
   PORT=5001
   MONGODB_URI=your_mongodb_uri
   ```

### Running the Application

- **Backend**: `cd Backend && npm run dev` (Ensure `nodemon` is installed or use `node server.js`)

## 📁 Project Structure

```text
Spendyx/
├── Backend/
│   ├── src/
│   │   ├── config/      # Database configuration
│   │   ├── models/      # Expense and User models
│   │   └── routes/      # Auth and Expense routes
│   └── server.js        # Server entry point
├── Frontend/            # React application
└── package.json         # Root configuration
```

## 📄 License

This project is licensed under the MIT License.
