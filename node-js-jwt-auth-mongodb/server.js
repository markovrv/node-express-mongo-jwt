const express = require("express")
const cors = require("cors")
const app = express()
const db = require("./app/models")
const dbConfig = require("./app/config/db.config")
require("dotenv").config()

const corsOptions = { origin: '*' }
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.mongoose.connect(dbConfig.url(), {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log("Successfully connect to MongoDB.");
    db.initial();
  }).catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

app.get('/', (req, res) => { 
  res.json({ message: "Добро пожаловать!" }) 
});

const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
