# SattaGo - Highly Secure Full-Stack Application

SattaGo is a highly secure, encrypted, production-ready web application featuring both an Admin Panel and a User Panel for a lottery and wallet system.

## Project Structure

The project follows a clean architecture separating the frontend UI from the backend API.

- `src/`: React + Vite frontend prototype (User Panel & Admin Panel toggled via `App.jsx`).
- `server/`: Node.js + Express backend API skeleton.
- `schema.sql`: Complete normalized MySQL database schema with relationships and initial settings.

## 1. Database Setup (MySQL)

To make the application dynamic, you must import the provided database schema into your MySQL server.

1. Ensure MySQL is installed and running on your system.
2. Open your terminal or MySQL client.
3. Run the following command to import the schema:
   ```bash
   mysql -u root -p < schema.sql
   ```
   *(Enter your MySQL password when prompted).*

This will create a database named `sattago_db` with all necessary tables (`Users`, `Wallets`, `Bets`, `LotterySessions`, etc.) and insert default system settings.

## 2. Backend Setup (Node.js API)

The backend acts as the bridge between the React frontend and the MySQL database.

1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure the environment variables:
   - Edit the `server/.env` file.
   - Update `DB_HOST`, `DB_USER`, `DB_PASSWORD`, and `DB_NAME` to match your MySQL setup.
4. Start the backend development server:
   ```bash
   node index.js
   ```
   *The server will run on port 5000 by default. You can test it by visiting `http://localhost:5000/api/health`.*

## 3. Frontend Setup (React UI)

The frontend contains prototypes for both the User and Admin panels. By default, it runs the UI prototyping mode.

1. Navigate to the repository root.
2. Install dependencies (using legacy-peer-deps for React 19 compatibility if needed):
   ```bash
   npm install --legacy-peer-deps
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```

*(Note: Currently, the frontend operates using local React state to demonstrate the UI flow. To make it fully dynamic, you will need to replace the dummy functions in `App.jsx`, `auth/Login.jsx`, etc., with `fetch` or `axios` calls to the Node.js API endpoints you define in the `server/` directory).*
