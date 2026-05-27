# 🌍 Wanderlust — Travel Listing Platform

A full-stack Airbnb-inspired travel listing platform where users can discover, list, and review travel stays. Features complete authentication, image uploads to Cloudinary, and interactive maps powered by Mapbox. Built with Node.js, Express, MongoDB, and EJS.

## ✨ Features

- **Browse Listings** — Discover travel stays with images, location, price, and host details
- **Create & Manage Listings** — Authenticated users can post, edit, and delete their own listings
- **User Authentication** — Register and login securely with Passport.js (local strategy)
- **Reviews & Ratings** — Leave reviews on any listing; owners can delete their own reviews
- **Image Uploads** — Upload listing photos directly to Cloudinary via Multer
- **Interactive Maps** — Each listing displays its location on a Mapbox map
- **Input Validation** — All forms validated server-side with Joi schemas
- **Flash Messages** — Success/error feedback after every action
- **Session Management** — Persistent sessions stored in MongoDB with connect-mongo
- **Authorization** — Only listing owners can edit/delete their listings

## 🛠️ Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat-square&logo=mongodb&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=flat-square&logo=cloudinary&logoColor=white)

| Technology | Purpose |
|-----------|---------|
| Node.js + Express | Server and routing |
| MongoDB + Mongoose | Database and ODM |
| EJS + EJS-Mate | Server-side templating |
| Passport.js | User authentication (local strategy) |
| passport-local-mongoose | User model with auth helpers |
| Multer + Cloudinary | Image upload and cloud storage |
| Mapbox SDK | Geocoding and interactive maps |
| Joi | Request validation schemas |
| connect-flash | Flash notifications |
| express-session + connect-mongo | Session storage in MongoDB |
| method-override | PUT/DELETE from HTML forms |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- Cloudinary account (free tier works)
- Mapbox account (free tier works)

### Installation

```bash
# Clone the repo
git clone https://github.com/astha9900/wanderlust.git
cd wanderlust

# Install dependencies
npm install

# Set up environment variables
touch .env
```

Add to `.env`:
```env
ATLASDB_URL=mongodb+srv://<user>:<password>@cluster.mongodb.net/wanderlust
SECRET=your-session-secret

CLOUD_NAME=your-cloudinary-cloud-name
CLOUD_API_KEY=your-cloudinary-api-key
CLOUD_API_SECRET=your-cloudinary-api-secret

MAP_TOKEN=your-mapbox-access-token
```

```bash
# Seed the database with sample listings
node init/index.js

# Start the server
node app.js
```

Open [http://localhost:8080](http://localhost:8080)

## 📁 Project Structure

```
wanderlust/
├── app.js                  # Express app entry point
├── cloudConfig.js          # Cloudinary configuration
├── middleware.js            # Custom middleware (auth guards, etc.)
├── schema.js               # Joi validation schemas
│
├── models/
│   ├── listing.js          # Listing Mongoose model
│   ├── review.js           # Review Mongoose model
│   └── user.js             # User model with passport-local-mongoose
│
├── controllers/
│   ├── listings.js         # Listing route handlers
│   ├── reviews.js          # Review route handlers
│   └── users.js            # Auth route handlers
│
├── routes/
│   ├── listing.js          # /listings routes
│   ├── review.js           # /listings/:id/reviews routes
│   └── user.js             # /register, /login, /logout routes
│
├── views/
│   ├── listings/           # EJS templates for listings
│   ├── users/              # Login and register templates
│   └── layouts/            # EJS-Mate layout templates
│
├── public/                 # Static assets (CSS, JS, images)
│
├── init/
│   └── index.js            # Database seeder with sample listings
│
└── utils/
    └── ExpressError.js     # Custom error class
```

## 🔒 Authorization Rules

| Action | Who Can Do It |
|--------|-------------|
| View listings | Everyone |
| Create listing | Logged-in users only |
| Edit listing | Listing owner only |
| Delete listing | Listing owner only |
| Add review | Logged-in users only |
| Delete review | Review author only |

## 🔮 Future Improvements

- Booking / reservation system with date picker
- Payment integration (Stripe)
- Wishlist / saved listings
- Search and filter by location, price, amenities
- Host profiles with ratings

## 📄 License

MIT © [Astha Bharti](https://github.com/astha9900)
