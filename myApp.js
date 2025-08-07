const express = require('express');
const path = require('path');
const app = express();

// Serve static files from root directory
app.use(express.static(__dirname));

// Route for root path
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/healthcheck', (req, res) => {
  res.status(200).send('OK');
});

// If you want a /public route for assets
app.use("/public", express.static(path.join(__dirname, "public")));


process.on('SIGTERM', () => {
  console.log('Received SIGTERM, shutting down gracefully');
  process.exit(0);
});

//this peace os code 
const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Simple server listening on ${port}`);
});
// Keep process alive
setInterval(() => {}, 1000)































 module.exports = app;
