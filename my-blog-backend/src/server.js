import express from "express";
import bodyParser from "body-parser";

const app = express();

//parses json object included with post request and adds body property to request parameter of matching route
app.use(bodyParser.json());

//recieves a get request on the endpoint /hello and repospons with a responce hello.
//information contained in URL
// Takes a callback argument which contains details about the request(req) and a reponce object(res)
app.get(`/hello`, (req, res) => res.send(`Hello`));
app.get(`/hello/:name`, (req, res) => res.send(`Hello ${req.params.name}`));

//post requets carry additional inpormation to pass along data to the server
app.post(`/hello`, (req, res) => res.send(`Hello ${req.body.name}`));

//start server, takes a port to start and a callback to get called when server is listening, this logs message
app.listen(8000, () => console.log(`Listening on port 8000`));
