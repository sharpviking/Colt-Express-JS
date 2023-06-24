const express = require("express");

const app = express();

// app.use((req, res) => {
//     console.log("We got a new request")
//     res.send("Helllo , EWe got your request! This is the response!")

// })

app.get('/', (req, res) => {
    res.send("This is home page")
})

app.post('/cats', (req, res) => {
    res.send("This is post request of CATS!!!")
})
app.get('/cats', (req, res) => {
    res.send("MEOWWWW!!!")
})

app.get('/dogs', (req, res) => {
    res.send("WOFF!!!")
})

app.get('*', (req, res) => {
    res.send(`I dont know that path!`)
})



app.listen(3000, () => {
    console.log("Listening on port 3000")
})


//Another way to start server using express

// const express = require('express');

// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/`);
// });
