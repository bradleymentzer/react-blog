import express from "express";

const app = express();

//recieves a get request on the endpoint /hello and repospons with a responce hello.
// Takes a callback argument which contains details about the request(req) and a reponce object(res)
app.get(`hello`, (req, res) => res.send(`Hello`));

//start server, takes a port to start and a callback to get called when server is listening, this logs message
app.listen(8000, () => console.log(`Listening on port 8000`));
