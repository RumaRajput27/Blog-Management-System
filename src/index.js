const app = require('./app'); // Import the app.js from the src folder

const PORT = 3000; // Hardcoded port value

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`click the Link : http://localhost:${PORT}`);
  
});
