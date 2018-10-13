const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 9000;


app.use(express.static('./client/build')); // deployment

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.post('/login', (req, res) => {
    const data = req.body;
    console.log('Body: ', data);

    const password = data.password;
    const email = data.email;


    if (email) {
        // TODO
        // Process your authentication
        return res.json({
            isAuthenticated: true
        });
    }
    // TODO
    // Process your authentication
    return res.json({
        isAuthenticated: false
    });


});




app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build/', 'index.html'));
});

app.listen(PORT, () => {
    console.log('Server is starting at PORT ' + PORT);
});