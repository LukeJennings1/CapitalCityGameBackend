require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

// !!NOTE!! Please read the README.md for project notes and instruction on how to spin up a local server

app.use(express.json());
app.use(cors());

app.get('/api/countries', (req, res) => {
  
// validate authorisation key
const requestKey = req.headers['auth-key'];
const authKey = process.env.AUTH_KEY;

if (authKey !== requestKey) {
  return res.status(401).json({ message: 'Error - Invalid authorisation key'});
}

// make the fetch call if authorisation key is valid
fetch(process.env.API_KEY)
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.json();
  })
  .then((data) => {
    res.status(200).json({ message: 'success', data });
  })
  .catch((err) => {
    console.error('Fetch error:', err);
    res.status(500).json({ message: 'Internal server error' });
  });

});

// start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
