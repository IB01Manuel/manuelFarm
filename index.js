import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dbConfig from "./db-config.js";
import cors from "cors"; //added for cross-origin requests

const app = express();
const port = process.env.PORT || 3001; // Changed port from 3000 to 3001 for server-side

const db = new pg.Client(dbConfig); 
db.connect();

const allowedOrigins = [
  "http://localhost:3000", // React dev server
  "https://manuel-farms-react-ui.vercel.app", // Vercel domain
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // parse json
app.use(express.static("public"));

// API Routes
app.get("/api/search", async (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.json({ items: [] });
  }

  try {
    const result = await db.query(
      "SELECT name, image_url, description, to_char(price, 'FM999,999,999.00') AS formatted_price FROM farm_items WHERE name ILIKE $1",
      [`%${query}%`]
    );
    res.json({ items: result.rows, query });
  } catch (error) {
    console.error("Database search error:", error.message);
    res.status(500).json({ error: "Error searching for items" });
  }
});

// Add a health check endpoint
app.get("/api/health", (req, res) => {
    res.json({ status: "OK", timestamp: new Date() });
});

// Server-side rendering routes (for EJS templates)
app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

// Search route
app.get("/search", async (req, res) => {
  const query = req.query.q; // Get search query from URL
  if (!query) return res.redirect("/");

  try {
    const result = await db.query(
      "SELECT name, image_url, description, to_char(price, 'FM999,999,999.00') AS formatted_price FROM farm_items WHERE name ILIKE $1",
      [`%${query}%`] // % wildcard allows partial matching
    );
    res.render("results.ejs", { items: result.rows, query });
  } catch (error) {
    console.error("Database search error:", error.message);
    res.status(500).send("Error searching for items");
  }
});
    
    
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});