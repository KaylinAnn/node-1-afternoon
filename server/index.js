const express = require("express");
const bodyParser = require("body-parser");
const bC = require("./controller/messages_controller");
const app = express();

app.use(bodyParser.json());

app.get("/api/messages", bC.read);
app.post("/api/messages", bC.create);
app.put("/api/messages/:id", bC.update);
app.delete("/api/messages/:id", bC.delete);

app.listen(3000, () => console.log("listening on port 3000"));
