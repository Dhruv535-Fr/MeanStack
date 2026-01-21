
const express = require('express');
const app = express();
const PORT = 8000;

// DB connection
const connectDB = require('./config/db');
connectDB();

// Middleware
app.use(express.urlencoded({ extended: false }));
const logger = require('./middlewares/logger');
app.use(logger);
app.use(express.json());

// User routes
const userRoutes = require('./routes/user');
app.use('/api/users', userRoutes);

app.listen(PORT, () => console.log(`Server has Started at Port: ${PORT}!`));
