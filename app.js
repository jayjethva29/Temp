const express = require('express');
const AppError = require('./utils/AppError');
const errorHandler = require('./controllers/errorHandler');
const myRoutes = require('./routes/myRoutes');

const app = express();

//Gloabal Middlewares
app.use(express.json());
app.use(express.static(`${__dirname}/Public`));

//Entry points
app.use(myRoutes);

app.all('*', (req, _, next) => {
  next(new AppError(404, `Can't find ${req.originalUrl} on this server!`));
});

app.use(errorHandler);

module.exports = app;
