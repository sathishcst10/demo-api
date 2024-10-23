const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World' });
});
app.get('/about', (req, res) => {
    res.status(200).json({ message: 'About Us', data : [] });
});
app.get('/contact/:id', (req, res) => {
    res.status(200).json({ message: 'Contact Us', data : req.params.id });
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});