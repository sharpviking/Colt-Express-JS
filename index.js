const express = require("express");

const app = express();

const morgan = require('morgan');

// app.use((req, res) => {
//     console.log("We got a new request")
//     res.send("Helllo , EWe got your request! This is the response!")

// })

app.use(morgan('common'));
app.use((req, res, next) => {
    console.log('This is my middleware!')
    next();
})
app.use((req, res, next) => {
    console.log('This is my second middleware!')
    next();
})

app.get('/', (req, res) => {
    res.send("This is home page")
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1> Browsing the ${subreddit} subreddit`)
})
app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1> Viewing post Id: ${postId} on the ${subreddit} subreddit</h1>`)
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


app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('Nothing found if nothing searched!');
    }

    res.send(`<h1> Search tresults for: ${q} </h1>`)
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
