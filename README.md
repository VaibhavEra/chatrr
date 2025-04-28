# Chattr 💬

**Modern. Fast. Connected.**\
A real-time chat experience built with the MERN stack and powered by Socket.io.

🔗 [**Live Demo**](https://chattr-iwds.onrender.com/)

---

## ✨ Features

- **⚡ Real-Time Messaging** — Instant message delivery with Socket.io
- **🔴 Online Status Indicators** — See who’s online at a glance
- **🔒 Secure Authentication** — JWT-powered login and registration
- **📱 Responsive Design** — Perfectly optimized for mobile, tablet, and desktop
- **🐂⃣ Message History** — Access your past conversations anytime
- **🔍 Contact Filters** — Quickly find online contacts
- **🖼️ Profile Management** — Update your profile details and avatar
- **🚀 Optimized Performance** — Fast loads and smooth UI transitions

---

## 🛠️ Tech Stack

### Frontend

- **React 19** — UI library
- **Zustand** — Lightweight state management
- **TailwindCSS + DaisyUI** — Rapid and beautiful styling
- **Socket.io-client** — Real-time event handling
- **React Router** — Seamless page navigation

### Backend

- **Node.js + Express.js** — Robust server-side framework
- **MongoDB + Mongoose** — Flexible database management
- **JWT** — Authentication and authorization
- **Socket.io** — WebSocket real-time communication
- **Cloudinary** — Cloud-based image upload and management

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- A MongoDB Atlas account
- A Cloudinary account (for storing profile images)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/chattr.git
   cd chattr
   ```

2. **Install dependencies**

   ```bash
   # Backend
   npm install

   # Frontend
   cd frontend
   npm install
   ```

3. **Set up Environment Variables**

Create a `.env` file in the project root:

```
MONGODB_URI=your_mongodb_connection_string
PORT=5001
JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

NODE_ENV=development
```

4. **Start the Development Servers**

```bash
# Start backend server
npm run dev

# In a separate terminal, start frontend
cd frontend
npm run dev
```

5. **Visit the App**

Open your browser at:\
👉 [http://localhost:5173](http://localhost:5173)

---

## 📝 How to Use

- **Register** a new account or **log in** with your credentials.
- **Browse contacts** and view their online status.
- **Start chatting** by selecting a contact.
- **Send and receive messages** instantly.
- **Filter contacts** by online status to chat faster.
- **Edit your profile** by updating your avatar and personal information.

---

## 🔧 Building for Production

1. **Build the frontend**

   ```bash
   cd frontend
   npm run build
   ```

2. **Start the production backend server**

   ```bash
   # From the root directory
   npm start
   ```

---

## 🏩️ Architecture Overview

Chattr is designed with a clean and scalable architecture:

| Layer         | Technology                    | Purpose                                 |
| ------------- | ----------------------------- | --------------------------------------- |
| Frontend      | React + Zustand + TailwindCSS | Client-side UI and state management     |
| API Server    | Node.js + Express             | Business logic and API routes           |
| Real-Time     | Socket.io                     | WebSocket-based real-time communication |
| Database      | MongoDB + Mongoose            | Persistent data storage                 |
| Media Storage | Cloudinary                    | Storing profile pictures securely       |

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit** your changes
   ```bash
   git commit -m "Add amazing feature"
   ```
4. **Push** the changes
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open** a Pull Request and let's collaborate!

---

## 🙏 Acknowledgements

- [React](https://reactjs.org/)
- [Socket.io](https://socket.io/)
- [TailwindCSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [Zustand](https://github.com/pmndrs/zustand)

---

> Built with ❤️
