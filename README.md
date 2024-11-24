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
│   ├── public/          # Static assets
│   ├── src/
│       ├── assets/      # assets
│       ├── components/  # Reusable components
│       ├── context/     # StoreContext component
│       ├── pages/       # Page-level components
│       ├── App.jsx      # Main application file
│       ├── main.jsx     # Entry point
│
├── backend/             # Node.js + Express backend
│   ├── config/          # Database Connection
│   ├── controllers/     # Controller files
│   ├── middleware/      # authentication files
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API endpoints
│   ├── uploads/         # Stores images uploaded by admin
│   ├── .env/            # File with secure information
│   ├── server.js        # Main server file
│
├── admin/               # Admin panel
|   ├── src/
│       ├── assets/      # assets
│       ├── components/  # Admin-specific components
│       ├── pages/       # Admin-specific Page-level components
│       ├── App.jsx      # Admin entry point
│       ├── main.jsx     # Main application file
│
├── README.md            # Project documentation
└── package.json         # Project dependencies
```
