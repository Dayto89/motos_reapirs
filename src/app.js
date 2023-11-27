const express = require('express');
const users = require('./users/users.route')
const repairs = require('./repairs/repairs.route')

const app = express();

const getRequestTime = (req, res, next) => {
    const requestTime = new Date().toISOString();
    req.requestTime = requestTime
    next()
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(getRequestTime)
app.use('/api/v1', users)
app.use('/api/v1', repairs)





app.listen(3000, () => {
    console.log("Server running on port: " + 3000)
}) 