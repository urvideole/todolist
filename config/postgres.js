const { Pool } = require('pg');

const pool = new Pool({
    user: 'udeole',
    host: 'localhost',
    database: 'udeole',
    password: 'abcd1234.',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
});

module.exports = {
    pool
}