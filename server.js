require("dotenv").config();

const express = require('express');
const app = express();
app.use(express.json());

const routers = require('./routers/userRouter');
app.use("/user", routers);

port = process.env.port || 3001;
app.listen(port, () => {
    console.log(`Server running on port ${port} 🔥`)
});