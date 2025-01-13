const knex = require('knex')
require('dotenv').config();

const { PGHOST, PGDATABSE, PGUSER, PGPASSWORD,PGPORT } =process.env;

module.exports = {
    db: knex({
        client: "pg",
        connection: {
            host: PGHOST,
            port: PGPORT,
            user: PGUSER,
            database: PGDATABSE,
            password: PGPASSWORD,
            ssl: {rejectUnauthorized: false},
        }
    })
};