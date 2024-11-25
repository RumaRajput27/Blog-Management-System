const app = require('./app'); // Import the app.js from the src folder

const PORT = 5000; // Hardcoded port value

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
