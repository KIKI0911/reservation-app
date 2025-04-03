const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = process.env.PORT || 3001
const config = require('./config/dev')
const SampleDb = require('./sample-db')

const productRoutes = require('./routes/products')

main().catch(err => console.log(err));

async function main() {
    try {
        await mongoose.connect(config.DB_URI);
        console.log('MongoDB Connected');

        const sampleDb = new SampleDb();
        await sampleDb.initDb(); 
        console.log('Database initialized');
    } catch (error) {
        console.error('Database connection failed:', error);
    }
}

app.use('/api/v1/products', productRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

