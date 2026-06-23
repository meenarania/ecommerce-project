console.log("FILE LOADED"); 
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

// TEST ROUTE
app.get("/", (req, res) => {
    res.send("Backend Server Running");
});

// PRODUCTS API
app.get("/products", (req, res) => {
    res.json([
        { name: "Laptop", price: 50000 },
        { name: "Phone", price: 20000 }
    ]);
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});