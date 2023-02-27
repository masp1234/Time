
const express = require('express');
const app = express();

const PORT = 8080;
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + 'public/index.html');
});

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});


