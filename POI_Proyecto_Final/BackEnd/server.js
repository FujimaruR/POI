const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const authRoutes = require('./routes/authRoutes');


const PORT = process.env.PORT || process.env.API_PORT;
// process.env.Port receive the HOST port, Api PORT receive .env PORT. 

const app = express();
app.use(express.json());
app.use(cors());


// register the routes
app.use("/api/auth", authRoutes);
 


const server = http.createServer(app);


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        server.listen(PORT, () => {

            console.log(`Server is listening on ${PORT}`)

        });
    })
    .catch(err => {
        console.log("database connection failed, Server not started");
        console.error(err);
    })
