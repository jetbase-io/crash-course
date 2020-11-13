const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const port = 5000;

const { sequelize, models } = require('./models/index');
const routes = require('./routes/index');

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

app.use('/users', routes.user);
app.use('/skills', routes.skill);
app.use('/education', routes.education);


sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    });
});