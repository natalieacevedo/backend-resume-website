require('dotenv').config();
const express = require('express');

const projectsRoutes = require('./routes/projectsRoutes');
const imagesRoutes = require('./routes/imagesRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

app.use(express.json());

app.use('/api/projects', projectsRoutes);
//app.use('api/pictures', imagesRoutes);
app.use('/api/contact', contactRoutes);



module.exports = app;