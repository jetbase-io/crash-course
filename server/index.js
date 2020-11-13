const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const port = 5000;

const { sequelize, models } = require('./models/index');
const routes = require('./routes/index');
const seeds = require('./seeds/index');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.options('*', cors());

app.use((req, res, next) => {
    req.context = {
        models
    };
    next();
});

routes(app);

const eraseDatabaseOnSync = true;

sequelize.sync({ force: eraseDatabaseOnSync }).then(() => {
    if (eraseDatabaseOnSync) {
        seeds(models);
    }

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    });
});