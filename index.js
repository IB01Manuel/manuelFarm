import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dbConfig from "./db-config.js";

const app = express();
const port = process.env.PORT || 3000;

const db = new pg.Client(dbConfig);
 
db.connect();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// GET home page
app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.get("/Contact", (req, res) => {
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