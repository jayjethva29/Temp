const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

if (process.argv[2] === '--prod') process.env.NODE_ENV = 'production';

process.on('uncaughtException', (err) => {
  console.log(`🧩 Uncaught Exception 🤪`);
  console.log(err);
  process.exit(1);
});

// Imports
const app = require('./app');
const sequelize = require('./utils/sequlize');
const myRoutes = require('./routes/myRoutes');

//DB Connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => console.error('Unable to connect to the database:', error));

sequelize
  // .sync({ force: true })
  // .sync({ alter: true })
  .sync()
  .then((result) => {
    app.listen(process.env.PORT, () => {
      console.log(
        `✔ Server is listening at port ${process.env.PORT} in ${process.env.NODE_ENV}`
      );
    });
  })
  .catch((err) => {
    console.error('Error while creating tables...');
    console.log(err.message);
  });

process.on('unhandledRejection', (err) => {
  console.log(`🧩 Unhandled Rejection 🤪`);
  console.log(err);
  server.close(() => {
    process.exit(1);
  });
});
