import mongoose from 'mongoose';
import config from './config.js';

export default (server) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(config.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const db = mongoose.connection;

        db.on('error', (err) => {
            console.error('Failed to connect to database...');
            reject(err);
        });

        db.on('open', () => {
            console.log('Successfully connected to database...');
            resolve();
        });
    });
}