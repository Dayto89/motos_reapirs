const express = require('express');
const users = require('./users/users.route.js')
const repairs = require('./repairs/repairs.route.js')
const { getRequestTime } = require('./repairs/repairs.middleware.js')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(getRequestTime);
app.use('/api/v1', users)
app.use('/api/v1', repairs)


module.exports = app;