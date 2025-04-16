# Manuel Farms - Farm-to-Customer E-Commerce Platform

## About The Project
Manuel Farms is a web-based application designed to bridge the gap between farmers and customers
by providing a convenient marketplace for farm products and livestock.

## 🚀 Live Demo 
[![Live Demo](https://img.shields.io/badge/Manuel_Farms-Live_Demo-blue?style=for-the-badge&logo=netlify)](https://manuelfarms-demo.netlify.app)

[![App Screenshot](./public/images/screenshot.png)](https://manuelfarms-demo.netlify.app)

➡️ **Try it now:** [https://manuelfarm-project.onrender.com](https://manuelfarm-project.onrender.com)

**Key Value Propositions:**
- 🛒 One-stop shop for hard-to-find farm products and livestock
- 🏡 Home delivery of bulk agricultural products
- ⏱️ Time-saving solution for busy customers
- 👨‍🌾 Direct connection between farmers and consumers

### Built With
**Backend:**
- Node.js
- Express.js

**Frontend:**
- EJS templates
- Bootstrap 5
- HTML/CSS

**Database:**
- PostgreSQL

## Features
**Current Features:**
- Product search and discovery
- Dynamic product display
- Bulk order capabilities
- Responsive web design

**Planned Features (Roadmap):**
- Online ordering system
- Integrated payment gateway
- User accounts and order history
- Farmer profiles and inventory management

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- PostgreSQL (v12 or higher)

### Installation
1. Clone the repository:
```bash
   git clone https://github.com/yourusername/manuel-farms.git
   cd manuel-farms
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following:
```env
DB_HOST=your_database_host
DB_USER=your_database_username
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
DB_PORT=your_database_port
```

4. Initialize the database:
```bash
npm run db:setup
```

5. Run the application:
```bash
npm start
```

6. Open in your browser:
Visit `http://localhost:3000`

## Project Structure

```text
manuel-farms/
├── public/            # Static assets
│   ├── css/
│   ├── js/
│   └── images/
├── views/            # EJS templates
├── .env               # Environment varaibles template
├── db-config.js          # Database models
├── index.js             # Main application file | Business logic | Application routes
└── package.json
```

## License
MIT License. See [LICENSE] (LICENSE) for full text
