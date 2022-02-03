require('dotenv').config();
const express = require('express');
const projectsRoutes = require('./routes/projectsRoutes');
const imagesRoutes = require('./routes/imagesRoutes');
const contactRoutes = require('./routes/contactRoutes');
const cors = require("cors");
const app = express();

app.use(express.json());

//Geomar change this according to your react port
let headerCors = 3002

app.use(
  cors({
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", "cookies"],
    origin: [`http://localhost:${headerCors}`],
  })
);

app.use('/api/projects', projectsRoutes);
//app.use('api/pictures', imagesRoutes);
app.use('/api/contact', contactRoutes);



module.exports = app;