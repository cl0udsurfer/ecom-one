const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

const app = express();

app.use(cors());
app.use(helmet());

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

// Route Files
const auth = require('./routes/auth');
const category = require('./routes/category');
const product = require('./routes/product');
const order = require('./routes/order');
const user = require('./routes/user');
const braintreeRoutes = require('./routes/braintree');
const photo = require('./routes/photo');

// Mount Routers
app.use('/api/v1/auth', auth);
app.use('/api/v1/category', category);
app.use('/api/v1/product', product);
app.use('/api/v1/orders', order);
app.use('/api/v1/photo', photo);
app.use('/api/v1/user', user);
app.use('/api/v1/braintree', braintreeRoutes);

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
