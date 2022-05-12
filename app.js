import express from 'express';
import AppMiddleware from './src/app.middleware.js';
//import products from './products.json' assert {type: "json"};
import AppRoute from './src/app.route.js';
import AppConfig from './src/app.config.js';

const app = express();

app.use(AppConfig);
app.use(AppMiddleware);
app.use(AppRoute);

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        data: {
            timestamp: new Date()
        }
    })
})

const PORT = process.env.PORT || 3030
app.listen(PORT, () => {console.log(`Server is Running on PORT ${PORT}`)})