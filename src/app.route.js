import express from 'express';
import productRoute from './modules/product/product.route.js';
import UserRoute from './modules/user/user.route.js';

const AppRoute = express();

AppRoute.use('/product', productRoute);
AppRoute.use('/user', UserRoute);

export default AppRoute;