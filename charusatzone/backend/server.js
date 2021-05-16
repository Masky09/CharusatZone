const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const router = require('./routes/route');

const app = express();
dotenv.config();

app.use(
  cors({
    origin: ['http://localhost:3000'],
  })
);

app.use(express.json());
app.use(router);

mongoose.connect(process.env.MONGOURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to Database.');
});

mongoose.connection.on('error', () => {
  console.log('Error..!!');
});

app.listen(5000, () => {
  console.log('Server is running on 5000');
});
