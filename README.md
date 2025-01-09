# Contact Management System

A Node.js-based backend application designed to manage contact information efficiently. This project features user authentication and authorization using JWT, CRUD operations integrated with a MongoDB database, and secure API routes.

## Features

- **User Authentication & Authorization**:
  - Register and log in users securely.
  - Token-based authentication using JSON Web Tokens (JWT).
  - Role-based access control for different levels of functionality.

- **CRUD Operations**:
  - Create, Read, Update, and Delete contacts.
  - Data persistence with MongoDB.

- **API Routes**:
  - Organized and secure API endpoints.
  - Authentication middleware to protect routes.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yashsuthar00/nodeJs-CONTACT-MANAGER-APP.git
   cd contact-management-system

2. Install dependencies:

    ```bash
    npm install

3. Set up environment variables:

- Create a `.env` file in the root directory.
- Add the following keys:
    ```makefile
    PORT=5000
    MONGO_URI=your-mongodb-connection-string
    JWT_SECRET=your-jwt-secret

4. Start the server:

    ```
    npm start

5. Access the application:

- Base URL: `http://localhost:5000`

## API Endpoints

### Authentication Routes

- **POST /api/users/register**: Register a new user.
- **POST /api/users/login**: Authenticate a user and return a JWT.
- **GET /api/users/current**: Shows the current authenticated user.
### Contact Routes

- **GET /api/contacts**: Get all contacts (protected).
- **POST /api/contacts**: Add a new contact (protected).
- **GET /api/contacts/:id**: Get a single contact by ID (protected).
- **PUT /api/contacts/:id**: Update a contact by ID (protected).
- **DELETE /api/contacts/:id**: Delete a contact by ID (protected).
