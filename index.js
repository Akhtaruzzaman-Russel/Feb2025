const express = require("express");
const app = express();

const secureApi = require("./middleware/secureApi");
const message = require("./controller/message");
const registration = require("./controller/registrationController");
const profile = require("./controller/profile");


app.use(express.json()); // Middleware



app.get("/message",secureApi, message);
app.post("/registration",secureApi, registration);
app.get("/profile",secureApi, profile);










app.listen(8000)