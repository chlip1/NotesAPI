require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3001,
    database: process.env.DATABASE || "mongodb+srv://chlip1:chlip1mongoose@notes.5kcce1w.mongodb.net/?retryWrites=true&w=majority"
};