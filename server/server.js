const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const port = 5000;

const methods = require('./methods');
const { setRoutes } = require('./utils');

const routes = [
    {method: 'get', url: '/skills', callback: methods.getSkills},
    {method: 'get', url: '/users', callback: methods.getUsers},
    {method: 'get', url: '/education', callback: methods.getEducation}
];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(cors());
app.options('*', cors());

setRoutes(app, routes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});