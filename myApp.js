const express = require('express');
const path = require('path');
const app = express();

// Serve static files from root directory
app.use(express.static(__dirname));

// Route for root path
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// If you want a /public route for assets
app.use("/public", express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});;


































 module.exports = app;
