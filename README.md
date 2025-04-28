# Chattr 💬

A modern real-time chat application built with the MERN stack and Socket.io.

## ✨ Features

- **Real-time Messaging** - Instant message delivery using Socket.io
- **Online User Status** - See who's currently active
- **User Authentication** - Secure login and registration with JWT
- **Responsive Design** - Works seamlessly on mobile and desktop
- **Message History** - Access your previous conversations
- **Filter Contacts** - Filter contacts by online status
- **Profile Management** - Update your profile information and picture
- **Optimized Performance** - Fast loading and smooth transitions

## 🛠️ Tech Stack

- **Frontend**:

  - React 19
  - Zustand for state management
  - TailwindCSS & DaisyUI for styling
  - Socket.io-client for real-time communication
  - React Router for navigation

- **Backend**:
  - Node.js & Express
  - MongoDB & Mongoose for database
  - JWT for authentication
  - Socket.io for WebSocket connections
  - Cloudinary for image uploads

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB account
- Cloudinary account (for image uploads)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/chattr.git
cd chattr
```

2. **Install dependencies**

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```
MONGODB_URI=your_mongodb_connection_string
PORT=5001
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

NODE_ENV=development
```

4. **Run the development server**

```bash
# Run backend
npm run dev

# Run frontend (in a separate terminal)
cd frontend
npm run dev
```

5. **Visit the application**

Open your browser and go to `http://localhost:5173`

## 📝 Usage

1. **Register a new account** or login with existing credentials
2. **Browse your contacts** in the sidebar
3. **Select a contact** to start a conversation
4. **Send messages** using the input field at the bottom
5. **Toggle online users** using the filter option in the sidebar
6. **Update your profile** through the settings menu

## 🔧 Building for Production

1. **Build the frontend**

```bash
cd frontend
npm run build
```

2. **Start the production server**

```bash
# From the root directory
npm start
```

## 📈 Architecture

Chattr uses a modern architecture with the following components:

- **React Frontend**: Provides the user interface and handles client-side logic
- **Express Backend**: Handles API requests, authentication, and database operations
- **Socket.io Layer**: Enables real-time communication between clients
- **MongoDB Database**: Stores user data, messages, and application state

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgements

- [React](https://reactjs.org/)
- [Socket.io](https://socket.io/)
- [TailwindCSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [MongoDB](https://www.mongodb.com/)
- [Express](https://expressjs.com/)
- [Zustand](https://github.com/pmndrs/zustand)
