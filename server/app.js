const express = require('express');
const path = require('path');

const app = express();
app.use('/react', express.static(path.join(__dirname + '/react-app')));


app.use(express.static(path.join(__dirname + '/public')));

// app.use((req, res) => {
//     res.status(404);
//     res.send('<h1>Error 404: source not found');
// })

app.listen(3000, () => {
    console.log("App listetning on port 3000");
})