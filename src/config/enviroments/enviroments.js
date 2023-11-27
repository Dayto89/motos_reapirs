require('dotenv').config();
const env = require('env-var');

exports.envs = {
    PORT: env.get('PORT').required().asPortNumber()
}

