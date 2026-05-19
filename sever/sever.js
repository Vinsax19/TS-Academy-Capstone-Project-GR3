const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint
app.post("/contact", (req, res) => {
  console.log(req.body);

  res.status(200).json({
    success: true,
    message: "Form submitted successfully",
    data: req.body,
  });
});

// Start server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});