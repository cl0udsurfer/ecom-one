const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

const app = express();

// Load env vars
dotenv.config({ path: './config/config.env' });

// Body Parser
app.use(express.json());

// Dev log
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// DB Connection
connectDB();

// Errorhandler Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 8000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// Unhandled Promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close Server & exit process
  server.close(() => process.exit(1));
});
