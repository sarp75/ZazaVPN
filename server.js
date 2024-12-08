const express = require('express');
const app = express();
const port = process.env.PORT || 3000;  // Render will automatically assign a port

// Basic route
app.get('/', (req, res) => {
    res.send('ZazaVPN is ALIVE!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
