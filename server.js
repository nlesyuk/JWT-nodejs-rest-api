const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./app/models");

const isProd = false

const corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// DB
const Role = db.role;
if (isProd) {
  db.sequelize.sync();
  // insert rows manually
} else {
  // In development, you may need to drop existing tables and re-sync database. So you can use force: true as code above.
  db.sequelize.sync({ force: true }).then(() => {
    console.log('Drop and Resync Db');
    initial();
  });

  // helps us to create 3 rows in database.
  function initial() {
    Role.create({
      id: 1,
      name: "user"
    });

    Role.create({
      id: 2,
      name: "moderator"
    });

    Role.create({
      id: 3,
      name: "admin"
    });
  }
}

// ROUTES
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);