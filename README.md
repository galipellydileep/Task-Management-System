# Task Management System (Backend API)

This project is a Task Management Backend API built using Node.js and TypeScript.

## Features
- User Authentication (Register, Login)
- Password hashing using bcrypt
- JWT-based authentication
- Task CRUD operations (Create, Read, Update, Delete)
- Protected routes
- RESTful API structure

## Tech Stack
- Node.js
- TypeScript
- Express.js
- JWT
- bcrypt

## API Endpoints

### Authentication
- POST /auth/register
- POST /auth/login

### Tasks
- GET /tasks
- POST /tasks
- PUT /tasks/:id
- DELETE /tasks/:id

## How to Run Locally
```bash
npm install
npm run dev
