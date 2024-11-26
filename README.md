# Foodie *(MERN Stack Food Delivery Website)*

## 📋 Project Overview
This is a dynamic food delivery website built using the MERN stack (MongoDB, Express, ReactJS, NodeJS). The project integrates a fully functional frontend, backend and admin panel. It also incorporates Stripe for seamless payment processing.

## 🌟 Features
- **Frontend** : Built with ReactJS for a responsive and user-friendly interface.
- **Backend** : Developed using Express and Node.js to manage APIs and data flow.
- **Database** : MongoDB is used for efficient data storage and retrieval.
- **Admin Panel** : Includes functionalities to manage menu items and orders.
- **Stripe Integration** : Secure and smooth payment processing.
- **Menu Items** : Predefined categories such as Salad, Rolls, Desserts, Sandwich, Cake, Pure Veg, Pasta, and Noodles.
- **Dynamic Content** : Data-driven menu display with attractive images.

## 🚀 Tech Stack
- **Frontend** : ReactJS
- **Backend** : ExpressJS, Node.js
- **Database** : MongoDB
- **Payment Gateway** : Stripe
- **State Management**: Context API

## 📂 Folder Structure
```plaintext
root/
│
├── frontend/            # ReactJS-based frontend
│   ├── public/          # Static assets (e.g., favicon, etc.)
│   ├── src/             # Source code
│       ├── assets/      # Images, icons, and other static resources
│       ├── components/  # Reusable React components
│       ├── context/     # Context API for global state management
│       ├── pages/       # Page-level React components
│       ├── App.jsx      # Main application file
│       ├── main.jsx     # Entry point for React app
│
├── backend/             # Node.js + Express backend
│   ├── config/          # Configuration files (e.g., database connection)
│   ├── controllers/     # Request handlers for routes
│   ├── middleware/      # Middleware (e.g., authentication)
│   ├── models/          # Mongoose schemas for MongoDB
│   ├── routes/          # API route definitions
│   ├── uploads/         # Directory for uploaded files/images
│   ├── .env             # Environment variables file
│   ├── server.js        # Main server file
│
├── admin/               # Admin panel
│   ├── public/          # Static assets (e.g., index.html, favicon, etc.)
│   ├── src/             # Source code
│       ├── assets/      # Images, icons, and other static resources
│       ├── components/  # Reusable React components for admin
│       ├── pages/       # Page-level React components for admin
│       ├── App.jsx      # Main application file for admin
│       ├── main.jsx     # Entry point for React admin app
│
├── README.md            # Project documentation
├── package.json         # Project dependencies and scripts
└── package-lock.json    # Lockfile for dependencies
```
## 🔧 Setup Instructions

### Clone the repository:
```bash
git clone <repository-url>
```

### Install dependencies:
Navigate to the `frontend`, `backend`, and `admin` folders and run:
```bash
npm install
```

### Configure environment variables:
Update `.env` file in the `backend` folder with the following:
```env
STRIPE_SECRET_KEY=<your-stripe-secret-key>
```

### Run the application:
#### Start the backend server:
```bash
npm run server
```

#### Start the frontend and admin panels:
```bash
npm run dev
```

### Access the application:
- **Frontend**: [http://localhost:5174](http://localhost:5174)  
- **Backend**: [http://localhost:5000](http://localhost:4000)  
- **Admin Panel**: [http://localhost:4000](http://localhost:4000)

## 🛠️ Future Enhancements
- Have to introduce real-time order tracking.
- Have to add review and rating system for menu items.
- Implementation of notifications for order updates.
