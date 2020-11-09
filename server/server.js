const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

const methods = require('./methods');
const { setRoutes } = require('./utils');

const routes = [
    {method: 'get', url: '/skills', callback: methods.getSkills},
    {method: 'get', url: '/user', callback: methods.getUsers},
    {method: 'get', url: '/education', callback: methods.getEducation}
];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

setRoutes(app, routes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});