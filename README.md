### Task 1: Basic Server Setup
**Objective:** Set up a basic Node.js server using Express.

**Instructions:**
1. Create a simple server that listens on port 3000.
2. When you access `http://localhost:3000`, it should return a message like "Server is accesible on port 3000.".



### Task 2: Simple REST API
**Objective:** Create a basic REST API with Express.

**Instructions:**
1. Create endpoints for a basic CRUD (Create, Read, Update, Delete) application.
2. Use an array to store data in memory (e.g., an array of user objects with `id`, `name`, and `email` properties).
3. Implement the following routes:
    - `GET /users` - Returns the list of users.
    - `GET /users/:id` - Returns a single user by ID.
    - `POST /users` - Adds a new user.
    - `PUT /users/:id` - Updates a user by ID.
    - `DELETE /users/:id` - Deletes a user by ID.



### Task 3: Middleware and Error Handling
**Objective:** Implement middleware and error handling in your Express application.

**Instructions:**
1. Create middleware that logs the details of each incoming request (method, URL, etc.).
2. Implement error handling for the routes. If an error occurs (e.g., a user is not found), return a suitable error message with the appropriate HTTP status code.
3. Add a custom 404 error handler for undefined routes.



### Task 4: Basic Authentication
**Objective:** Implement basic authentication in your Express application.

**Instructions:**
1. Create a simple login endpoint (`POST /login`) that accepts a username and password.
2. Validate the username and password (hardcode a valid username and password for simplicity).
3. If the credentials are correct, return a success message.
4. If the credentials are incorrect, return an error message.
