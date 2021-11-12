import dotenv from 'dotenv';

dotenv.config();

const dbUrls = {
    development: process.env.DB_URL_DEVELOPMENT,
    production: process.env.DB_URL_PRODUCTION,
};

const dbUrl = dbUrls[process.env.NODE_ENV.trim()];

const config = {
    APP_PORT: process.env.PORT || process.env.DEV_PORT,
    DB_URL: dbUrl,
};

export default config;